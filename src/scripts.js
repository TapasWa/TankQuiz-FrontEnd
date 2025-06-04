// filepath: c:\Users\Tapsa\OneDrive\HTML\virtual-document-sample\src\scripts.js
import { say } from 'cowsay';

document.addEventListener('DOMContentLoaded', () => {
    const cowsayText = cowsay.say({
        text: 'Hello, welcome to my website!',
        eyes: 'oo',
        tongue: 'U ',
    });

    document.getElementById('cowsay-text').textContent = cowsayText;
});