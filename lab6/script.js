'use strict';

function download() {
    fetchUsers()
        .then(users => {
            console.log('users', users);
            return users;
        })
        .then(users => updateCards(users));
}

function fetchUsers() {
    return fetch('https://randomuser.me/api?results=4')
        .then((response) => response.json())
        .then((response) => response.results)
        .then((json) => {
            console.log('json=', json);
            return json;
        })
        .catch(err => {
            console.error('An error occurred when fetching users', err)
        });
}

function updateCards(users) {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';
    for (let user of users) {
        const cardHtml = getCardHtml(user);
        container.innerHTML += cardHtml;
    }
}

function getCardHtml({ cell, picture, email, location }) {
    const photo = picture.large;
    const { coordinates, city } = location;
    return (
        `<div class="card">
            <img alt="User photo" src="${photo}">
            <div class="info">
                <p class="field"><span>Cell:</span> ${cell}</p>
                <p class="field"><span>City:</span> ${city}</p>
                <p class="field"><span>E-mail:</span> ${email}</p>
                <p class="field"><span>Coordinates:</span> lt: ${coordinates.latitude}; lg: ${coordinates.longitude}</p>
            </div>
        </div>`
    );
}
