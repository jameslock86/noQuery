'use strict';

/* eslint-env browser */
/* eslint-disable no-console */

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

        const clickClass = 'click-me';
        const items = document.querySelectorAll(`.${clickClass}`);
        items.forEach(item => item.addEventListener('click', event =>
            event.target.classList.toggle(clickClass)
        ));
    }
    document.addEventListener('DOMContentLoaded', ready);
})();
