//Regular function
// function add(a, b){
//     return a + b;
// }

//arrow function in es6
const add = (a, b) => a + b;
console.log(add(30,20));

class Cart{
    constructor(){
        this.items = ['apple', 'orange', 'banana'];
    }

    //lets add a function to display items
     showItems(){
        // this.items.forEach(function(item){
        //     console.log(this); //this will print undefined
        this.items.forEach((item) => {
            console.log(this);
       
     });

    }
}
const cart = new Cart();
cart.showItems();

//Implicit returns
const posts = [
    { id: 1, title: 'First Post', likes: 5},
    { id: 2, title: 'Second Post', likes: 8},
    { id: 3, title: 'Third Post', likes: 3},

];

const getPopularPosts = () => posts.filter(
    post => post.likes > 5);
console.log(getPopularPosts());