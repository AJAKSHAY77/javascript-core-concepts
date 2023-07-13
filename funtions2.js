function calculatecartprice(num1){
    return num1

}
console.log(calculatecartprice(2));

// by using here rest operator in functions parameter now user can input many arguments
function calculatecartprice(...num1){
    return num1

}

console.log(calculatecartprice(200,300,400,500));
// for interview with rest operator
function calculatecartprice( val1,val2,a,...num1){
    return num1

}
console.log(calculatecartprice(200,300,400,500,600)); // output = [ 500, 600 ]

// with objects

const obj = {
    name:"akshay",
    price:99
}
function handleobject(anyobj){
    console.log(`username is ${anyobj.name} and price is ${anyobj.price}`);
}
handleobject(obj)

//with array 
const myarray = [10,20,30,40,50]

function takingarray(arr){
    return arr[2]

}
console.log(takingarray(myarray));
