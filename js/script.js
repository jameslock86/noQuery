'use strict';

/* eslint-env browser */
/* eslint-disable no-console */

(() => {
    function ready() {
        const button = document.querySelector('button');
        button.addEventListener('click', () => console.log('YOU CLICK GOOD'));

        // add, remove, and toggle the button class
        const bigClass = 'button-super';
        document.getElementById('add-class').addEventListener('click', () =>
            button.classList.add(bigClass));
        document.getElementById('remove-class').addEventListener('click', () =>
            button.classList.remove(bigClass));
        document.getElementById('toggle-class').addEventListener('click', () =>
            button.classList.toggle(bigClass));

        // toggle list elements when you click on them
        const clickClass = 'click-me';
        const items = document.querySelectorAll(`.${clickClass}`);
        items.forEach(item => item.addEventListener('click', (event) => {
            Array.prototype.forEach.call(event.target.parentNode.children,
                child => child.classList.remove(clickClass));
            event.target.classList.add(clickClass);
        }));

        // mess with the list
        const list = document.getElementById('click-list');
        document.getElementById('list-button').addEventListener('click', () =>
            list.firstElementChild.remove());
    }
    document.addEventListener('DOMContentLoaded', ready);
})();