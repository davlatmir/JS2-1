'use strict';

var basket = [],
priceTotal = 0

var products = [];

const API = 'https://raw.githubusercontent.com/davlatmir/JS2-1/hw_js2_1'

function loadJson() {
    return fetch(`${API}/data.json`)
        .then(result => result.json())
        .catch(error => console.log('error', error))
}


loadJson().then(data => {
    console.log(data);
    products = data
    renderProducts(products);
}).catch(err => {
    
})

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
