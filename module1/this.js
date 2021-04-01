// 1

const figure = {
  width: 100,
  height: 50,
  getSquare: function getSquare(width, height) {
    return this.width * this.height;
  },
};

figure.getSquare();

//2

const product = {
  price: 100,
  discount: "30%",
  getPrice() {
    return this.price;
  },
  getPriceWithDiscount() {
    return this.price * (parseInt(this.discount) / 100);
  },
};

product.getPrice();
product.getPriceWithDiscount();

//3

const figure2 = {
  height: 10,
  heightInc() {
    return ++this.height;
  },
};

figure2.heightInc();

//4

const calculator = {
  meaning: 20,
  double() {
    this.meaning *= 2;
    return this;
  },
  plusOne() {
    this.meaning += 1;
    return this;
  },
  minusOne() {
    this.meaning -= 1;
    return this;
  },
};

calculator.double().plusOne().minusOne();

//5

const basket = {
  price: 300,
  quantity: 8,
  totalPrice() {
    return this.price * this.quantity;
  },
};
basket.totalPrice();

//6

const detail = {
  price: 193,
  quantity: 32,
};
basket.totalPrice.call(detail);

//7
let sizes = { width: 5, height: 10 },
  getSquare = function () {
    return this.width * this.height;
  };

getSquare.call(sizes);

//8
let element = {
  height: 25,

  getHeight: function () {
    return this.height;
  },
};

let getElementHeight = element.getHeight.bind(element);

getElementHeight();


