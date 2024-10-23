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
    container().innerHTML += (
        `<div class="image" id="image-${++lastImageIndex}">
            <img alt="Kramatorsk" src="https://v-variant.com.ua/wp-content/uploads/2023/01/Kramatorsk-viyna.jpg" width="400">
        </div>`
    );
};

const hasClass = (name) => {
    const image = lastImage();
    if (!image) {
        return false;
    }
    return image.childNodes[1].classList.contains(name);
}

const removeClass = (name) => {
    const image = lastImage();
    if (!image) {
        return;
    }
    image.childNodes[1].classList.remove(name);
};

const addClass = (name) => {
    const image = lastImage();
    if (!image) {
        return;
    }
    image.childNodes[1].classList.add(name);
};

const zoomIn = () => {
    if (hasClass('zoomed-out')) {
        removeClass('zoomed-out');
    } else if (!hasClass('zoomed')) {
        addClass('zoomed');
    }
};

const zoomOut = () => {
    if (hasClass('zoomed')) {
        removeClass('zoomed');
    } else if (!hasClass('zoomed-out')) {
        addClass('zoomed-out');
    }
};

const remove = () => {
    const image = lastImage();
    if (image) {
        image.remove();
        lastImageIndex--;
    }
};
