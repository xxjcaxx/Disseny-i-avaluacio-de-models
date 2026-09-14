export function generateDiv(board){
    const div = document.createElement('div');
    div.innerHTML = `<table>
    ${board.map(row => `<tr>${row.map(col => `<td class="tile tile-${col}"><span class="tile-inner">${col}</span></td>`).join('')}</tr>`).join('')}
    </table>`;
    return div;
}