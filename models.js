const transactions = require('./coffee.json');

// ==== What ways do I want to retrieve the data?
// provide a total number of orders and total amount spent
function totalNumber() {
    return transactions.length;
}

function totalAmount() {
    let total = 0;
    for (let t of transactions) {
        total += t.cost
    }
    return parseFloat(total.toFixed(2));
}

// provide list of kinds of orders
const orderTypes = () => {
    const arrayOfTypes = transactions.map(o => o.order);
    const uniqueTypes = [];
    for (let t of arrayOfTypes) {
        // if it is in uniqueTypes, skip it
        if (!uniqueTypes.includes(t)) {
            // if it not in uniqueTypes, add it
            uniqueTypes.push(t);
        }
    }
    return uniqueTypes;
    // return arrayOfTypes.reduce((uniqueTypes, t) => {
    //     if (!uniqueTypes.includes(t)) {
    //         return [
    //             ...uniqueTypes,
    //             t
    //         ];
    //     } else {
    //         return [
    //             ...uniqueTypes
    //         ]
    //     }
    // }, []);
}
// totals for each
const totalAmountForType = (orderType) => {
    const total = ordersByType(orderType)
                    .map(order => order.cost)
                    .reduce((a,b)=> a + b)        
    return total;
}

// provide a list of all orders of a certain kind
function ordersByType(orderType) {
    return transactions.filter(coffee => coffee.order === orderType);
}

module.exports = {
    totalAmountForType,
    ordersByType,
    orderTypes,
    totalAmount,
    totalNumber
}
