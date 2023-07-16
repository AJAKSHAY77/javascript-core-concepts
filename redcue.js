const array = [1,2,3]

// const number = array.reduce((acc,currval)=>{
//   console.log(`acc:${acc} and the current value is${currval}`);
//   return acc + currval
// },0)
// console.log(number);


//! this is also a rigth suntax , 0 #arrowfunction

// const number = array.reduce((acc,curr)=> acc + curr,0)
// console.log(number);

const number = array.reduce((acc,curr)=> (acc + curr),0)
//console.log(number);

 const num = [10,20,30,40,60]
 const result = num.reduce((acc,val)=>{
    return acc * val

 },1)
 //console.log(result);

 // exaple of Shopping_Cart

 const Courses_Bill = [{name:"pwskills",price :1000},
                  {name:"web dev",price :2000},
                 {name:"DSA",price :4000}  ]

  const shopping_cart = Courses_Bill.reduce((acc,curr)=>{
    return acc + curr.price
  },0) 
  
  console.log(shopping_cart);