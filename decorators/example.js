function addShipping(price, shipping) {
    return price + shipping;
}
addShipping(10, 5);
var account = {
    name: 'heshan',
    balance: 12,
    deposit: function () {
        console.log(this.name);
    }
};
console.log(account.deposit);
