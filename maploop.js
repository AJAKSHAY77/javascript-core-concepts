const num = [1,2,3,4,5,6,7,8,9,10]

const add10 = num.map((el)=> el + 10)
//console.log(add10);


const add20 = num.map((val)=>(val*20))
//console.log(add20);

const add30 = num.map((val)=>{
    return val*100
})
//console.log(add30);

//const aj = num.forEach((val1)=> console.log(val1*300))

// map and filter return the values but foreach don not return



//chaining 

const myArray = [1,2,3,4,5,6,7,8,9]
const chaining = myArray.map((el)=>{
    return el * 10
}).map((item)=> item + 1)
.filter((val)=> val > 50)

console.log(chaining);

