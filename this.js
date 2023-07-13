
 // this refers to current context or values
 // what is global object of broweser
 //ans: window object


const user1 = {
    name:'akshay',
    id: 101,
    welcomemessage:function(){
        console.log((`welcome ${this.name} your id is ${this.id}`));
        console.log(this);

       
    }

}

user1.welcomemessage();
user1.name = "aditya"
user1.welcomemessage()


console.log(this);

function chai(){
    const username = "akshay"
   
    console.log(this);
}
chai()

const chais = ()=>{
   console.log(this);
}
chais()
