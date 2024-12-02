'use strict';

function download() {
    fetchUsers()
        .then(users => {
            console.log('users', users);
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
    //todo
    return undefined;
}
