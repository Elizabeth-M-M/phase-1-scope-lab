// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = "Wewe";
var bestCustomer;
function upperCaseCustomerName() {
    customerName.toUpperCase();
    return customerName;
    }


function setBestCustomer() {
    bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
 console.log(bestCustomer);

function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = "You";
    return leastFavoriteCustomer;
}
// console.log(customerName)
// console.log(upperCaseCustomerName())
// console.log(bestCustomer);
// console.log(setBestCustomer());
// console.log(overwriteBestCustomer() );
console.log(changeLeastFavoriteCustomer());
