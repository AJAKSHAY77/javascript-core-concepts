const signal = "green";

switch (signal){
    case "red":
       console.log("stop");
     break;
    case "orange":
       console.log("ready");
     break;
    case "green":
       console.log("go");
     break;

    default:
    console.log("dont move");
        break;
}

const mynumber = 4

switch (mynumber) {
    case 1:
        console.log("my number");
        
        break;
    case 4:
        console.log("my number 4");
        
        break;

    default:
        console.log("not my numbe");
        break;
}


// how to check array is empty

const array = [1,2]
if(array.length === 0 ){
    console.log(`empty string`);
}
else{
    console.log("not empty");
}

// cheack object is empty or noot 

const obj = {}
if(Object.keys(obj).length === 0){
    console.log("empty");
}

// nullish coalescing operator (??) : null and undefined

// tertiary operator

// condition ? true : false

const height = 100
height >= 120? console.log("height is large") : console.log("height is small");
    





