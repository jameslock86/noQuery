'use strict';

/* eslint-env browser */

(() => {
    function ready() {
        console.log('Hello, programmer!');
        const button = document.querySelector('button');
        console.log(button);

        button.addEventListener('click', () => console.log('YOU CLICK GOOD'));
    }

    document.addEventListener('DOMContentLoaded', ready);
})();
