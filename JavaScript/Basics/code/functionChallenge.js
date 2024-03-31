function createCalculateTotal(subTotal, tax, discount) {
    return subTotal + tax - discount  //297
}

var order1 = createCalculateTotal(150, 15, 50)
var order2 = createCalculateTotal(270, 27, 100)
var order3 = createCalculateTotal(375, 37.5, 150)

console.log(order1, "===>> order 1")
console.log(order2, "===>> order 2")
console.log(order3, "===>> order 3")

var totalOrders = order1 + order2 + order3

console.log(totalOrders, "===>> total Orders")