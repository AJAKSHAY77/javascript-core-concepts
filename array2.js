const marvel = ["thor","ironman","spiderman"]

const dc = ["badman","flash","superman"]

const num =  [1,3,4,5]

// marvel.push(dc)
// console.log(marvel);

// console.log(marvel[3][0]);

const mynew = marvel.concat(dc)
console.log(mynew);

//spread operator

// const allnewhero = [...marvel,...dc,...num]
// console.log(allnewhero);

const anoarray = [1,2,3,4,5,6,[10,12,13,[0,0,0,0]]]

const aj = anoarray.flat(Infinity)
console.log(aj);

// to ask array hai k nii use array.isarray()

console.log(Array.isArray(aj));

// to convert into array and interesting
console.log(Array.from("akshay"));
// learn in future
console.log(Array.from({name:"akshay"}));
console.log(Array.from({name:"akshay"}));

const score = 100
const nscore = 200
const pscore = 300

console.log(Array.of(score,nscore,pscore));









