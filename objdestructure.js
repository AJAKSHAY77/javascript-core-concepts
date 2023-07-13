const mydetails = {
   "name":"aksay",
    id:101,
   "email":"aj@"
}
// first way 
console.log(mydetails["name"]);
console.log(mydetails.id);
// second way syntex we use destructure

const{name,id,email} = mydetails
console.log(name,id,email);

const bentex  = {
    chudi:235,
    tops:454,
    set:989,
    settttttttttttttttttttt:10000
}
const{chudi,tops,set,settttttttttttttttttttt:set2}= bentex
console.log(chudi,tops,set,set2);



