'use strict';

const table = document.getElementById('table');
let isDoubleClick = false;

initTable();

function initTable() {
    let counter = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 6; j++) {
            const cell = document.createElement('td');
            cell.innerHTML = counter + '';
            counter++;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}


const targetCell = table.rows[1].cells[3]; // клітинка з номером 10
const colorPicker = document.getElementById('colorPicker');

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

targetCell.addEventListener('mouseover', function () {
    this.style.backgroundColor = getRandomColor();
});

targetCell.addEventListener('click', function () {
    if (!isDoubleClick) {
        setTimeout(() => {
            if (!isDoubleClick) {
                colorPicker.click();
            }
        }, 50);
    }
});

colorPicker.addEventListener('input', function () {
    targetCell.style.backgroundColor = this.value;
});

targetCell.addEventListener('dblclick', function (e) {
    isDoubleClick = true;
    const row = this.parentNode;
    const startIndex = this.cellIndex;

    for (let i = startIndex; i < row.cells.length; i += 2) {
        row.cells[i].style.backgroundColor = getRandomColor();
    }
    setTimeout(() => {
        isDoubleClick = false;
    }, 100);
});
