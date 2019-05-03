"use strict";

const itemList = [
  {
    name: "apple",
    price: 1
  },
  {
    name: "goblet",
    price: 2500
  },
  {
    name: "book",
    price: 24
  },
  {
    name: "burger",
    price: 7
  },
  {
    name: "bomb",
    price: 16
  }
];

let shoppingCart = [];

function addItem(itemName, itemPrice) {
  shoppingCart = [...shoppingCart, { name: itemName, price: itemPrice }];
}

function removeItem(itemName) {
  let index = shoppingCart.findIndex(element => element.name === itemName);
  shoppingCart = [...shoppingCart.slice(0, index), ...shoppingCart.slice(index+1)];
}

function editItem(oldItemName, newItemName, newItemPrice) {
  let index = shoppingCart.findIndex(element => element.name === oldItemName);
  shoppingCart = [...shoppingCart.slice(0, index),
    { name: newItemName, price: newItemPrice },
    ...shoppingCart.slice(index + 1)];
}

function printTotal() {
  let total = 0;
  for (let item of shoppingCart) {
    total += item.price + (item.price * .06);
  }
  console.log(`Total: $${total.toFixed(2)}`);
}