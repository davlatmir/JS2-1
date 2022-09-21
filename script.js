'use strict';

const products = [
    { id: 1, title: 'Бургер', price: 150, img: "https://chitirchicken.tj/image/cache/catalog/products/bifburger-550x550.jpg" },
    { id: 2, title: 'Чизбургер', price: 80, img: "https://tastyandpoint.com/wp-content/uploads/2021/05/dvojnoj-chizburger-465x465.png" },
    { id: 3, title: 'Чикенбургер', price: 100, img: "https://driveburger.pizza/image/cache/catalog/%D0%91%D1%83%D1%80%D0%B3%D0%B5%D1%80%D1%8B/%D0%A7%D0%B8%D0%BA%D0%B5%D0%BD%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80-500x500.jpg" },
    { id: 4, title: 'Гамбургер', price: 200, img: "https://s1.eda.ru/StaticContent/Photos/120213180745/120213181011/p_O.jpg" },
    { id: 5, title: 'Фишбургер', price: 150, img: "https://tastyandpoint.com/wp-content/uploads/2021/05/file-o-fish-465x465.png" },
    { id: 6, title: 'Биг Бургер', price: 200, img: "https://pizzaexpress44.ru/media/cache/product_popup/images/product/big-byrger-pepperoni.jpg" },
    { id: 7, title: 'Биг Чизбургер', price: 100, img: "https://w7.pngwing.com/pngs/198/471/png-transparent-big-king-whopper-hamburger-cheeseburger-mcdonald-s-big-mac-big-king.png" },
    { id: 8, title: 'Биг Чикенбургер', price: 150, img: "https://cdn.carte.by/assets/2019/09/10/1fd15-ec65228cf494d1eba1ebee0feedf35ad-26e88_src---jpg_710x_83b40_convert.jpg" },
    { id: 9, title: 'Биг Гамбургер', price: 250, img: "https://shef.tj/product-api/picture/42195?type=picture_original" },
    { id: 10, title: 'Биг Фишбургер', price: 200, img: "https://shef.tj/product-api/picture/42195?type=picture_original" },
];

let isBasketPopuped = false

function popupBasket() {
    isBasketPopuped = !isBasketPopuped
    document.getElementById('basket-dialog').style.display = isBasketPopuped ? 'flex' : ''
}

const renderProduct = (item) =>
             `<div class="product-item">
                <img src="${item.img}" alt="image" class="product-img">
                <h3 class="product-title">${item.title}</h3>
                <p class="product-price">${item.price} руб</p>
                <button class="by-btn">В корзину</button>
            </div>`;

const renderProducts = list => {
    document.querySelector('.mainContainer').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
};

renderProducts(products);



/* 
1. Добавьте стили для верхнего меню, товара, списка товаров и кнопки вызова корзины.

2. Добавьте значения по умолчанию для аргументов функции. Как можно упростить или сократить запись функций?

3. *Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?
*/