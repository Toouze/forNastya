'use strict'

const menuElem = document.querySelectorAll('.menu__elem'),
    pizzaContainer = document.querySelector('.container2'),
    clearBtn = document.querySelector('.material-icons')


    menuElem[0].addEventListener('click', () => {
        if (pizzaContainer.style.display = 'none') {
            pizzaContainer.style.display = 'block'
        }
    })


    clearBtn.addEventListener('click', () => {
        pizzaContainer.style.display = 'none'
    })