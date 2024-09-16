const todo = ["Buy groceries", "Complete Assignments", 
"Prepare for placements"]; //Structuring of Array

//lets use destructuring to extract individual elements
const [firstTask, secondTask, thirdTask] = todo;
console.log(firstTask);
console.log(secondTask);
console.log(thirdTask);

//Object Destructuring
const product = {name: "Laptop", price:35000, brand: "Apple"};
const {name, price, brand } = product;
console.log(name);
console.log(price);
console.log(brand);

//Destructuring with default values
const user = {uname: "Azmat", age :8 };
const {uname, age, email = "No email provided"} = user;
console.log(uname);
console.log(age);
console.log(email);


//Destructuring Nested Objects and Array
const response = {
    status: 200,
    data: {
        user:{
            usrName: "Azmat",
            address: {
                city: "Bijapur",
                country : "India",
            }
        }
    }
};

const { data: {user: {usrName, address: {city, country}}}} = response;
console.log(usrName);
console.log(city);
console.log(country);