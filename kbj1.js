// //object singleton //this singleton
// const tinderuser = new Object()
// // console.log(tinderuser);
// //oject normal // no difference
// // console.log(tinderuser);
// const  tinderusernew = {}
// tinderuser.id = 101;
// tinderuser.name = "akshay"
// // console.log(tinderuser);

// const regularuser = new Object()

// regularuser.email = "aj@mail";
// regularuser.name = "akshay";
// regularuser.fullname = {
//    userfullname :{
//     name:"aditya",
//     surname :"jain"
//    }
// }
// console.log(regularuser.fullname.userfullname.name);

let obj1 = {a:1,b:2}
let obj2 = {c:3,d:4}
let obj3 = {e:5,f:6}

 // syntax for combine object
const mixobj = Object.assign({},obj1,obj2,obj3)
// const mixobjmix = Object.assign({},obj1,obj2)

// simpleway
const mix = {...obj1,...obj2,...obj3}
console.log(mix);

const array = [{name:"om",age:23},{email:"om@"},{id:909}]

console.log(array);
console.log(array[0].age);

//to access keys of object
console.log(Object.values(array));
console.log(Object.keys(array));

let home = {
    room1:"tv",
    room2:"tv2",
    room3:"tv3"

}
console.log(Object.keys(home));
console.log(Object.values(home));
console.log(Object.entries(home));
console.log(home.hasOwnProperty("room2"));
console.log(home.hasOwnProperty("room4"));


//learnings
//todo : how to declare singleton object
const user = new Object()
user.name = 'akshay';
user.id = 1011;
console.log(user);

const user1 = {}
user1.name = "jai";
user1.id = 111;
console.log(user1);

// combining object using rest
// object methods
//1) object.keys(ojname)
//2) object.values(objname)
//3)object.entries(objname)
//console.log(home.hasOwnProperty("room4"));






