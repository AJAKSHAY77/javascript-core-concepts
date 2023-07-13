// singleton made by declaring obj by constructor
// const obj  = new akshay()
//Object.create

// object by literals

// declaring symbol 

const mykey = Symbol("key1")
//obj

const obj1 = {
name:'akshay',
"email":"ajakshay@gmail.com",
isloggedin: ["monday","tuesday"],
[mykey]:"jai ho",
"location":"jabalpur"

}
console.log(obj1.name);
console.log(obj1["name"]);

console.log(obj1["email"]);
console.log(obj1.email);

console.log(obj1[mykey]);
console.log(obj1.mykey);
console.log(obj1[mykey]);

// obj and aymbol for interview

const declare_symbol = Symbol("akshay")

// console.log(typeof declare_symbol);

const obj2 = {
    'name': 'akshay_jain',
    'email':'aj@',
   [ declare_symbol]:"myvlaues"
}

console.log(obj2.name);
console.log(obj2['email']);
console.log(obj2[declare_symbol]);

// obj1.email = "chat@mail"
// console.log(obj1["email"]);

Object.freeze(obj1)
obj1.email = "laptop@"
console.log(obj1["email"]);
console.log(obj1);

obj2.greeting = function(){
    console.log("hello");
}

console.log(obj2);
console.log(obj2.greeting());

// learning 

// declare symbol
//ojject.freeze()






