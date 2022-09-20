'use strict';

const products = [
    { id: 1, title: 'Бургер', price: 150 },
    { id: 2, title: 'Чизбургер', price: 80 },
    { id: 3, title: 'Чикенбургер', price: 100 },
    { id: 4, title: 'Гамбургер', price: 200 },
    { id: 5, title: 'Фишбургер', price: 150 },
    { id: 6, title: 'Биг Бургер', price: 200 },
    { id: 7, title: 'Биг Чизбургер', price: 100 },
    { id: 8, title: 'Биг Чикенбургер', price: 150 },
    { id: 9, title: 'Биг Гамбургер', price: 250 },
    { id: 10, title: 'Биг Фишбургер', price: 200 },
];

const renderProduct = (item, img ="https://www.flaticon.com/free-sticker/birthday-cake_4213673?related_id=4213673") =>
             `<div class="product-item">
                <img src="${img}" alt="image" class="product-img">
                <h3 class="product-title">${item.title}</h3>
                <p class="product-price">${item.price} руб</p>
                <button class="by-btn">В корзину</button>
            </div>`;

const renderProducts = list => {
    document.querySelector('.mainContainer').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item, item.img)).join(''));
};

renderProducts(products);



/* 
1. Добавьте стили для верхнего меню, товара, списка товаров и кнопки вызова корзины.

2. Добавьте значения по умолчанию для аргументов функции. Как можно упростить или сократить запись функций?

3. *Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?
*/