'use strict';

const toggleFirst = () => {
    const first = document.getElementById('first');
    first.style.backgroundColor = 'blue';
    first.style.color = 'white';
};

const toggleSecond = () => {
    const second = document.querySelector('#second');
    second.style.backgroundColor = 'lightgreen';
    second.style.color = 'black';
};
