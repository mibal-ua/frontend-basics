'use strict';

const stylesForState = {
    0: {
        backgroundColor: 'blue',
        color: 'white',
    },
    1: {
        backgroundColor: 'lightgreen',
        color: 'black',
    },
};

const state = {
    first: -1,
    second: -1,
};

const toggleFirst = () => {
    const first = document.getElementById('first');
    const style = getStylesForElement('first');
    Object.assign(first.style, style);
};

const toggleSecond = () => {
    const second = document.querySelector('#second');
    const style = getStylesForElement('second');
    Object.assign(second.style, style);
};

const getStylesForElement = (element) => {
    const currentState = state[element];
    const styles = stylesForState[currentState];
    state[element] = (currentState + 1) % 2;
    return styles;
};
