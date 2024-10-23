'use strict';

// task1
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


// task2

let lastImageIndex = 0;

const container = () => document.getElementById('image-container');

const lastImage = () => document.getElementById(`image-${lastImageIndex}`)

const add = () => {
    container().innerHTML += `<img id="image-${++lastImageIndex}" alt="Kramatorsk" src="https://upload.wikimedia.org/wikipedia/commons/c/c5/%D0%9F%D0%B0%D0%BB%D0%B0%D1%86_%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%B8_%D1%82%D0%B0_%D1%82%D0%B5%D1%85%D0%BD%D1%96%D0%BA%D0%B8%2C_%D0%9A%D1%80%D0%B0%D0%BC%D0%B0%D1%82%D0%BE%D1%80%D1%81%D1%8C%D0%BA_DJI_0002.jpg" width="800">`;
};

const zoomIn = () => {
    
};

const zoomOut = () => {

};

const remove = () => {
    const image = lastImage();
    if (image) {
        image.remove();
        lastImageIndex--;
    }
};
