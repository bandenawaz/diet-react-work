const userName = "Azmath";
const greeting = `Hello, ${userName}! Welcome to Alvas Traing Program`;
console.log(greeting);

//Embedding expressions in template literal
const item = "Apple";
const qty = 5;
const pricePerItem = 25;
const totalPrice = `You bought ${qty} ${item}s for ${pricePerItem} and your 
total price is ${qty * pricePerItem}`
console.log(totalPrice);

//Tagged Template Literals
function formatCurrency(strings, amount){
    const formattedAmount = `$${parseFloat(amount).toFixed(2)}`
    return `${strings[0]} ${formattedAmount} `;

}

const price = 45.6789
const message = formatCurrency`The total amount is ${price}`;
console.log(message);
