'use strict';

/* eslint-env browser */

(() => {
    function ready() {
        const button = document.querySelector('button');
        button.addEventListener('click', () => console.log('YOU CLICK GOOD'));

        const bigClass = 'button-super';
        document.getElementById('add-class').addEventListener('click', () =>
            button.classList.add(bigClass));
            document.getElementById('remove-class').addEventListener('click', () =>
                button.classList.remove(bigClass));
            document.getElementById('toggle-class').addEventListener('click', () =>
                button.classList.toggle(bigClass));
        }
    document.addEventListener('DOMContentLoaded', ready);
})();