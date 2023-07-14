// for of loop 
const myArray = [10,2,3,4,5,6,7,8]
for (const num of myArray) {
    if(num=="akshay"){
        continue
    }
    
    // console.log(num);
    
}

//strings
const greetings = "hello world!"
for (const greet of greetings) {
    if(greet == " "){
        continue

    }
    // console.log(greet);
    
}

// for maps 
const map = new Map()
map.set("name","akshay") 
map.set("name2","aditya")
map.set("name3","om")
// console.log(map);

// now making loop

for (const key of map) {
    //console.log(key);
    
}
 
//2nd method
for(const [key,value] of map){
   // console.log(key,"-:",value);
}
// object bi key value mai hote unske sath bi esa hi hota hoga

// const obj = {
//     "name":"aditya",
//     "email":"akshay",
//       "id":909
// }
//for (const [key,value] of obj) {
    //console.log(key, value);
    


// so in obj with for of error is coming so we use for in
const myobj = {
    jai :"hind",
    jai1 :"ho",
    jai2:"jinendre"
}
for (const key in myobj) {
   //console.log(key,myobj[key]);      
    }

// for in with array
const ajarray = ["js","bs","ll","pp","io"]
for (const key in ajarray) {
    //console.log(key,ajarray[key]);
   
        
    }
for (const iterator of ajarray) {
    // console.log(iterator);
    
}

//conclusion is for of loop is use for array,strings and maps
//for in loop is use for object (key value pair) and also use for array for and it will give key and values also for array

//foreach loop 
const coding = ["oo","ww","uu","hj","we"]

coding.forEach(function(val){
   // console.log(val);
    
});
coding.forEach((item,index,arr)=>{
  //console.log(item,index,arr);
})

const myfun = (index)=>{
    //console.log(index)
}
coding.forEach(myfun)

//["","",""]

// [{},{},{}]

const mycoding = [{
    languagename : "java",
    languageid : 101
},{
    languagename : "cpp",
    languageid : 102
},{
    languagename : "python",
    languageid : 105
}]

// console.log(mycoding);

mycoding.forEach((el)=>{
console.log(el);
})

mycoding.forEach((item)=>{
    console.log(item.languageid);

})

mycoding.forEach((val)=>{
    console.log(val.languagename);

})
