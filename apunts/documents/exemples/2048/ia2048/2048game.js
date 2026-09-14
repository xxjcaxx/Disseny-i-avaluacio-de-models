export function calculatePoints(previousBoard, currentBoard) {
  let previousQty = {};
  previousBoard.flat().forEach((number) => {
    previousQty[number] = previousQty[number] ? previousQty[number] + 1 : 1;
  });
  let currentQty = {};
  currentBoard.flat().forEach((number) => {
    currentQty[number] = currentQty[number] ? currentQty[number] + 1 : 1;
  });

  return Object.keys(currentQty).reduce((points, number) => {
    if (previousQty[number] === undefined) {
      previousQty[number] = 0;
    }
    let difference = currentQty[number] - previousQty[number];
    if (difference > 0) {
      points += difference * number;
    }
    return points;
  }, 0);
}

const MCStateToString = (state) => {
  /*
    Esta función auxiliar retornará el estado del juego en formato string, de manera que se vea bien por consola, por ejemplo
    */
  return `
${state.map((row) => row.map((col) => col).join(" ")).join("\n")}`;
};

const MCGetRandomMove = (validMoves) => {
  let possibleMoves = validMoves.reduce((eM, current, index) => {
    if (current === 1) {
      eM.push(index);
    }
    return eM;
  }, []);
  let move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
  return move;
};

const MCExpandNode = (game) => (node) => {
  let selectedMove = MCGetRandomMove(node.expandableMoves);
  node.expandableMoves[selectedMove] = 0;

  let children = {
    value: 0,
    moveTaken: selectedMove,
    visits: 0,
    parent: node,
    player: node.player,
    expandableMoves: [...node.expandableMoves],
    children: [],
    depth: node.depth+1
  };

  // Copiamos el estado anterior
  children.state = structuredClone(node.state);

  children.state = game.getNextState(
    children.state,
    selectedMove,
    children.player
  );
  // Calculamos los movimientos expandibles del nodo hijo
  children.expandableMoves = game.getValidMoves(children.state);
  // Añadimos el nodo hijo
  node.children.push(children);
  //console.log("Expand",children);
  return children;
};

const MCIsFullExpandedNode = (node) => {
  return node.expandableMoves.every((m) => m === 0) && node.children.length > 0;
};

const MCGetUcb = (node, parentNode, C) => {
  let qValue = node.value / node.visits;
  return qValue + C * Math.sqrt(Math.log(parentNode.visits) / node.visits);
};

const MCTSelectBestNode = (root) => {
  if (MCIsFullExpandedNode(root)) {
    // Si está expandido elige el mejor hijo

    let ucbList = root.children.map((child) => MCGetUcb(child, root, 1.42));
    let bestUCB = Math.max(...ucbList);
    let bestChild = root.children[ucbList.findIndex((ucb) => ucb === bestUCB)];
    return MCTSelectBestNode(bestChild);
  } // Si no está expandido se retorna a sí mismo
  return root;
};

const MCSimulate = (game) => (node) => {
  let count = 0;
  let max = 0;
  let win = (() => {
    let { win, terminated } = game.getWinAndTerminated(
      node.state,
      node.moveTaken
    );
    if (terminated) {
      return win;
    }
    let state_copy = structuredClone(node.state);

    while (true && count < 2000) {
      count++;
      let move = MCGetRandomMove(game.getValidMoves(state_copy));
      state_copy = game.getNextState(state_copy, move, 1);
      max = Math.max(...state_copy.flat());
      //console.log(state_copy);
      let { win, terminated } = game.getWinAndTerminated(state_copy, move);
      //console.log(win,terminated,state_copy);
      if (terminated) {
        return win + Math.log2(count); // Especifico de 2048 para valorar los que duran más
      }
    }
    return 0;
  })();
  return { win, count, max };
};

const MCBackPropagate = (node, value) => {
  node.value += value;
  node.visits += 1;
  if (node.parent) {
    MCBackPropagate(node.parent, value);
  }
};

export function MCTSearch(game, state, numSearches) {
  /// Está pensado para siempre ver la mejor jugada para el jugador 1
  // En caso de querer la mejor para el jugador -1 hay que cambiar la perspectiva
  // antes de buscar.

  let root = {
    state: state,
    moveTaken: null,
    value: 0,
    visits: 0,
    expandableMoves: [...game.getValidMoves(state)],
    parent: null,
    player: 1,
    children: [],
    depth: 0
  };

  let counts = [];
  let depths = [];
  let maxs = [];

  for (let search = 0; search < numSearches; search++) {
    // Selecciona de forma recursiva el mejor nodo si ya se ha expandido o el mismo:
    let node = MCTSelectBestNode(root);

    let { win, terminated } = game.getWinAndTerminated(
      node.state,
      node.moveTaken
    );

    if (!terminated) {
      // Si no ha terminado, se expande:
      node = MCExpandNode(game)(node);
      let simulation = MCSimulate(game)(node);
      win = simulation.win;
      counts.push(simulation.count);
      depths.push(node.depth);
      maxs.push(simulation.max);
    }
    if (terminated && node.parent === root) {
      counts.push(1)
      depths.push(node.depth);
      maxs.push(Math.max(...node.state.flat()));
    }

    // Específico de 2048, valoramos la cantidad de 0s en el nodo
    win += node.state.flat().filter((n) => n === 0).length / 2;

    MCBackPropagate(node, win);
    // console.log("Acaba Search",search, "root value", root.value, root.visits);
  }

  let moveWins = Array(game.moveSize).fill(0);

  let moveVisits = Array(game.moveSize).fill(0);
  for (let child of root.children) {
    moveWins[child.moveTaken] = child.value;
    moveVisits[child.moveTaken] = child.visits;
  }

  let winsTotal = moveWins.reduce((p, v) => p + v) + 1;

  if (counts.length === 0) { console.log(root, moveWins, moveVisits, winsTotal); }

  return { wins: moveWins.map((v) => v / winsTotal), counts: counts, depths: depths, maxs: maxs };
}

function removeAttribute(object, attribute) {
  delete object[attribute];
  for (let c of object.children) {
    removeAttribute(c, attribute);
  }
}
