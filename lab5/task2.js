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
    updatePicker();
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

function updatePicker() {
    colorPicker.value = rgbToHex(targetCell.style.backgroundColor);
}

colorPicker.addEventListener('input', function () {
    targetCell.style.backgroundColor = this.value;
    updatePicker();
});

targetCell.addEventListener('dblclick', function (e) {
    isDoubleClick = true;
    const row = this.parentNode;
    const startIndex = this.cellIndex;

    for (let i = startIndex; i < row.cells.length; i += 2) {
        row.cells[i].style.backgroundColor = getRandomColor();
    }
    updatePicker();
    setTimeout(() => {
        isDoubleClick = false;
    }, 100);
});

function rgbToHex(rgb) {
    // Витягуємо числа з rgb рядка
    const values = rgb.match(/\d+/g);

    // Конвертуємо кожне число в hex і додаємо нулі спереду якщо потрібно
    const r = Number(values[0]).toString(16).padStart(2, '0');
    const g = Number(values[1]).toString(16).padStart(2, '0');
    const b = Number(values[2]).toString(16).padStart(2, '0');

    // Повертаємо результат у форматі #rrggbb
    return `#${r}${g}${b}`;
}
