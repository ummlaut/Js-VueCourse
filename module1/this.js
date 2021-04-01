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
