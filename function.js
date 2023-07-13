function add(a,b){
return a+b

}
const result = add(2,4)
console.log(result);

function name(username){
  if(!username){
    console.log("invalid input");
   
  }
  else{
    return `${username} is logged in`
  }
 
}
// console.log(name("akshay"));
// console.log(name(""));
// console.log(name());

function name(username ="sam"){
  if(!username){
    console.log("invalid input");
   
  }
  else{
    return `${username} is logged in`
  }
 
}
console.log(name());
console.log(name("aksay"));

  
