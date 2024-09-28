'use strict';

// zad1

let div = document.body.children[0];
let ul = document.body.children[1];
let pit = document.body.children[1].lastElementChild;
console.log(div, ul, pit)

// zad2

let listItems = document.querySelectorAll("li");

for (const item of listItems) {
    item.classList.add("list-item");
}

// zad3

let numberOfBlocks = prompt("Введите количество блоков:");

numberOfBlocks = parseInt(numberOfBlocks);

let container = document.getElementById('container');

for (let i = 0; i < numberOfBlocks; i++) {
    let block = document.createElement('div');
    block.className = 'block';
    container.appendChild(block);
}

// zad4

let form = document.createElement('form');
form.className = "form";
let name = document.createElement('input');
name.placeholder = "Имя"
let email = document.createElement('input');
email.placeholder = "Почта";
let submit = document.createElement('input');
submit.value = "Отправить";
submit.type = "submit"

document.getElementById('form').prepend(form)
document.querySelector('form').append(name);
document.querySelector('form').append(email);
document.querySelector('form').append(submit);


