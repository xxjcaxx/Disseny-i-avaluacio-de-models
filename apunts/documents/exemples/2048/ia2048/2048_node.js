import * as ç from "./2048.es.js"

function logBoard(board) {
    const numRows = board.length;
    const totalLines = numRows + 1; // +1 por la línea divisoria superior

    // Si ya se había dibujado antes, borramos el tablero anterior
    if (!logBoard.isFirstDraw) {
        // 1. Movemos el cursor hacia arriba tantas líneas como ocupaba el tablero anterior
        process.stdout.write(`\x1b[${totalLines}A`);
        // 2. Limpiamos desde la posición actual del cursor hasta el final de la pantalla
        process.stdout.write('\x1b[0J');
    } else {
        logBoard.isFirstDraw = false;
    }

    // Construimos e imprimimos el nuevo tablero
    let output = '\n';
    for (let i = 0; i < board.length; i++) {
        output += board[i].map(n => n).join('\t') + '\n';
    }
    
    process.stdout.write(output);
}

// Inicializamos la bandera
logBoard.isFirstDraw = true;


function getValidMoves(board) {
    let boardFlat = board.flat();
    return ['right', 'left', 'up', 'down'].map(m => {
        let boardMoved = ç.moveBoard(board)(m);
        return boardMoved.flat().every((n, i) => n === boardFlat[i]) ? 0 : 1;
    });
}

function runGameRandom(board) {
    let previousBoard = structuredClone(board);
    const movesMap = { 0: 'right', 1: 'left', 2: 'up', 3: 'down' };
    let validMoves = getValidMoves(previousBoard);
    let moveIndex = validMoves.map((v, i) => v === 1 ? i : -1).filter(i => i !== -1);
    if (moveIndex.length > 0) {
        let randomMove = moveIndex[Math.floor(Math.random() * moveIndex.length)];
        previousBoard = ç.moveBoard(previousBoard)(movesMap[randomMove]);
        previousBoard = ç.insertRandomNumber(previousBoard)(2);
        logBoard(previousBoard);
        setTimeout(() => runGameRandom(previousBoard), 0);
    }
}


let board = ç.generate2048Board(4);
board = ç.randomPlace(board)(2);

logBoard(board);

runGameRandom(board);

