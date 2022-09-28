'use strict';

var basket = [],
priceTotal = 0

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

class Product {
    constructor(id, title, price, img, containerClass) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = img;
        this.quantity = 1;
        this.dom = null;
        this.containerClass = containerClass
        this.render()
    }

    getTemplate() {
        return `
         <div class="whole-cart-item ">
             <div>
                 <img class="mini-cardImg" src="${this.img}">
             </div>
             <div style="padding: 0px 12px;">
                 <div class="itemName">${this.title}</div>
                 <div class="quantity">Quantity: ${this.quantity}</div>
                 <div class="price">Price: ${this.price}</div>
                 <button  class="removeButton">remove</button>
             </div>
         </div>
         `;
    }

    render() {
        var container = document.querySelector(this.containerClass);
        if (container) {

            container.insertAdjacentHTML("beforeend", this.getTemplate());
            this.dom = container.lastElementChild
            if (this.dom) {
                this.dom.self = this;
                var removeButton = this.dom.querySelector('.removeButton')
                if (removeButton) removeButton.onclick = () => this.decrement()
            }

        }
        totalCartPrice()
        
    }

    update() {
        if (this.dom) {
            var price = this.dom.querySelector(".price"),
                quantity = this.dom.querySelector(".quantity");
            if (price && quantity) {
                price.innerText = `Price: ${this.price}руб (${this.price * this.quantity}руб)`;
                quantity.innerText = `Quantity: ${this.quantity}`;
                console.log(priceTotal)
            }
        }
        totalCartPrice()
    }

    increment() {
        this.quantity += 1;
        priceTotal += this.price
        this.update();
        console.log(this)
        
    }

    decrement() {
        this.quantity -= 1
        priceTotal -= this.price

        if (this.quantity > 0) {
        } else {
            this.dom.remove()
            var productIndex = basket.findIndex(arrItem => arrItem.id == this.id);
            if (productIndex > -1) {
                basket.splice(productIndex, 1)
            }
        }
        this.update();
        
        
    }

}



let isBasketPopuped = false
function popupBasket() {
    isBasketPopuped = !isBasketPopuped
    document.getElementById('basket-dialog').style.display = isBasketPopuped ? 'flex' : ''
  
}



function addToBasket(id) {
    var product = products.find(element => element.id == id)
    if (product) {

        var productIndex = basket.findIndex(element => element.id == id)
        if (productIndex > -1) {
            basket[productIndex].increment()
        } else {
            basket.push(new Product(product.id, product.title, product.price, product.img, '.basket-dialog-content'))
        }
    }

}






// priceTotal-а нишон тияд и количество товаров в корзине


function totalCartPrice() {
    let totalPrice = document.getElementById('goods-list__total'); 
    let sum = 0;
    basket.forEach (element => { 
        sum += element.price * element.quantity
    });
    totalPrice.innerText = `Итого  ${sum} рублей`;
}

totalCartPrice()
/*
function updateUI () {
    dom.innerText = priceTotal
}

*/







const renderProduct = (item) =>
             `<div class="product-item data-id="1">
                <img src="${item.img}" alt="image" class="product-img">
                <h3 class="product-title">${item.title}</h3>
                <p class="product-price">${item.price} руб</p>
                <button class="by-btn" onclick="addToBasket(${item.id})">В корзину</button>
            </div>`;

const renderProducts = list => {
    document.querySelector('.mainContainer').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
};
renderProducts(products);