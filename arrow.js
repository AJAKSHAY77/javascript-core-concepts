
// when we give curly brase in arr.fun then return state. is necessary
const chai = (a,b)=>{
  return a+b
}
console.log(chai(2,4));

// 2nd method no need to write return and to give curly brase
const chai2 = (a,b)=> a+b
console.log(chai2(3,5));

//3rd method
const chai3 = (a,b)=> (a+b)
console.log(chai3(8,8));

// for ojects 
const chai4 = ()=>{
    return ({
        name:"akshay",
        id:101
    }
        
    ) 
        
}
console.log(chai4());


const chai5 = ()=>({name:"aditya",id:101})
console.log(chai5());


// wirte syntex for arrow is for everthing is 
 const aj = (a,b)=>(a+b)
 console.log(aj(2,4));

 const array = [10,20,30,40,50]

array.forEach((a)=>{
    console.log(a);

})
array.forEach((a,b)=> (console.log(a,b)))
array.forEach((a,b)=> {console.log(a,b)})  


const jai = ()=>("jaihindbharat")
console.log(jai());

const hello = ()=> ("bhaiya")
console.log(hello());
const hello2 = () => ("hellobhaiya")
console.log(hello2());

const chaii = ()=> "bhaiya"
console.log(chai());

const chaiii2 = ()=> ("bhaiya2")
console.log(chai2());

const chaiu3 = ()=> { return "bhaiya3"}
console.log(chai3());


