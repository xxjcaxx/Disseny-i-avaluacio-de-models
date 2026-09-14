import './style.css'
import * as ç from "./2048.es.js"
import { generateDiv } from './2048interface.js';
import { MCTSearch, calculatePoints } from './2048game.js';




document.addEventListener("DOMContentLoaded",()=>{
  const divApp = document.querySelector('#board');
  let board = ç.generate2048Board(4);
  board = ç.randomPlace(board)(2);
  divApp.append(generateDiv(board));

  
  let score = 0;
  let bestScore = 0;
  const divPuntuacio = document.querySelector('#puntuacions');

  function showPoints(score,bestScore){
    divPuntuacio.innerHTML = `<div class="score-container">Score: ${score}</div><div class="best-container">Best: ${bestScore}</div>`;
  }
  
  showPoints(score,bestScore);

  function renderBoard(container,board){
    container.innerHTML='';
    container.append(generateDiv(board));
  }

  window.addEventListener("keyup",(event)=>{
    const arrowMap = {ArrowRight: 'right', ArrowLeft: 'left', ArrowUp: 'up', ArrowDown: 'down'};
    let direction = arrowMap[event.code];
    if(direction){
      const previousBoard = structuredClone(board);
      board = ç.moveBoard(board)(direction);
      score += calculatePoints(previousBoard,board);
      showPoints(score,bestScore);
   
      board = ç.insertRandomNumber(board)(2);
      renderBoard(divApp,board);
      
    }
  });

  const buttonNewGame= document.querySelector('#newGame');
  buttonNewGame.addEventListener('click',()=>{
    if(score > bestScore){ bestScore = score};
    score = 0;
    showPoints(score,bestScore);
    let board = ç.generate2048Board(4);
  board = ç.randomPlace(board)(2);
  renderBoard(divApp,board);
  })

  const buttonAI= document.querySelector('#ai');
  buttonAI.addEventListener('click',()=>{
    const movesMap = {0: 'right', 1: 'left', 2: 'up', 3: 'down'};
    function getTerminated(board,boardFlat){
      if (boardFlat.indexOf(0) !== -1) { return false}
      return ['right', 'left',  'up','down'].every(m => { 
        let boardMoved = ç.moveBoard(board)(m);
        return boardMoved.flat().every(n => n != 0); 
      }) 
    }
    function getValidMoves(board){
      let boardFlat = board.flat();
      return ['right', 'left',  'up','down'].map(m => { 
        let boardMoved = ç.moveBoard(board)(m);
        return boardMoved.flat().every((n,i) => n === boardFlat[i]) ? 0 : 1; 
      });
    }
    const mcGame = {
      moveSize: 4,
      getValidMoves: getValidMoves,
      getInitialState: ()=> ç.randomPlace(ç.generate2048Board(4))(2),
      getNextState: (state,move,player)=>  ç.insertRandomNumber(ç.moveBoard(state)(movesMap[move]))(2),
      changePerspective: (board)=>board,
      getWinAndTerminated: (board, move) => {
        let boardFlat = board.flat();
        return {
        win: Math.log2(Math.max(...boardFlat)), 
        terminated: getTerminated(board,boardFlat)
      }},
      changePlayer: (player)=>player
    };

   

    function runGame(numSearches) {
      
        let {wins, counts, depths, maxs} = MCTSearch(mcGame, board, numSearches);
        let avgCounts = counts.length > 0 ? counts.reduce((p,c)=> p+c)/counts.length : 0
        let avgMaxs = maxs.length > 0 ? maxs.reduce((p,c)=> p+c)/maxs.length : 0

        let best = movesMap[wins.indexOf(Math.max(...wins))];     
        const previousBoard = structuredClone(board);
        board = ç.moveBoard(board)(best);
        score += calculatePoints(previousBoard, board);
        showPoints(score,bestScore);
      
        board = ç.insertRandomNumber(board)(2);
        renderBoard(divApp,board);

        let searches = 450 - avgCounts*3;
        //console.log(wins, avgCounts, searches);
        if(!wins.every(n => n === 0)){
          console.log(wins);
          
          setTimeout(()=>runGame(searches), 0); 
        }

        //console.log(`wins`, previousBoard);

        document.querySelector('#stats pre').innerHTML+= `${Math.floor(numSearches)},${Math.round(avgCounts*100)/100},${Math.max(...counts)},${Math.max(...depths)},${Math.round(avgMaxs*100)/100},${Math.max(...maxs)},${Math.max(...board.flat())},${wins.map(w=>Math.round(w*100)/100).join(', ')},${best},${previousBoard.flat().join(', ')}\n`
        
    }
    
    // Iniciar el juego
    runGame(200);




  })

  const buttonRandom= document.querySelector('#random');
  buttonRandom.addEventListener('click',()=>{
    function getTerminated(board,boardFlat){
      if (boardFlat.indexOf(0) !== -1) { return false}
      return ['right', 'left',  'up','down'].every(m => { 
        let boardMoved = ç.moveBoard(board)(m);
        return boardMoved.flat().every(n => n != 0); 
      }) 
    }
    function getValidMoves(board){
      let boardFlat = board.flat();
      return ['right', 'left',  'up','down'].map(m => { 
        let boardMoved = ç.moveBoard(board)(m);
        return boardMoved.flat().every((n,i) => n === boardFlat[i]) ? 0 : 1; 
      });
    }

    function runGameRandom() {
      const movesMap = {0: 'right', 1: 'left', 2: 'up', 3: 'down'};
      let validMoves = getValidMoves(board);
      let moveIndex = validMoves.map((v,i) => v === 1 ? i : -1).filter(i => i !== -1);
      if(moveIndex.length > 0){
        let randomMove = moveIndex[Math.floor(Math.random() * moveIndex.length)];
        const previousBoard = structuredClone(board);
        board = ç.moveBoard(board)(movesMap[randomMove]);
        score += calculatePoints(previousBoard, board);
        showPoints(score,bestScore);
      
        board = ç.insertRandomNumber(board)(2);
        renderBoard(divApp,board);

        setTimeout(()=>runGameRandom(), 100); 
      }
    }
    
    // Iniciar el juego
    runGameRandom();  
  });

  const buttonAIServer= document.querySelector('#ai-server');
  buttonAIServer.addEventListener('click',()=>{
    const serverInput = document.querySelector('#server');
    const serverUrl = serverInput.value || 'http://localhost:5000';
    function getTerminated(board,boardFlat){
      if (boardFlat.indexOf(0) !== -1) { return false}
      return ['right', 'left',  'up','down'].every(m => { 
        let boardMoved = ç.moveBoard(board)(m);
        return boardMoved.flat().every(n => n != 0); 
      }) 
    }
    function getValidMoves(board){
      let boardFlat = board.flat();
      return ['right', 'left',  'up','down'].map(m => { 
        let boardMoved = ç.moveBoard(board)(m);
        return boardMoved.flat().every((n,i) => n === boardFlat[i]) ? 0 : 1; 
      });
    }

    async function runGameServer() {
      //const movesMap = {0: 'right', 1: 'left', 2: 'up', 3: 'down'};
      let validMoves = getValidMoves(board);
      let moveIndex = validMoves.map((v,i) => v === 1 ? i : -1).filter(i => i !== -1);
      if(moveIndex.length > 0){
        try {
          const response = await fetch(`${serverUrl}/best_move`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ board: board.flat() })
          });
          const data = await response.json();
          const bestMove = data.best_move;
          //console.log("bestMove", bestMove);
          
          if (bestMove !== undefined) {
            //console.log(bestMove);
            
            const previousBoard = structuredClone(board);
            board = ç.moveBoard(board)(bestMove);
            score += calculatePoints(previousBoard, board);
            showPoints(score,bestScore);
          
            board = ç.insertRandomNumber(board)(2);
            renderBoard(divApp,board);

            setTimeout(()=>runGameServer(), 100); 
          } else {
            console.error('No best move returned from server');
          }
        } catch (error) {
          console.error('Error fetching best move from server:', error);
        }
      }
    }
    
    // Iniciar el juego
    runGameServer();  
  });

});
