const coding = ["oo","ww","uu","hj","we"]
const values = coding.forEach(el => {
    return el
    
});
//console.log(values);

// conc :- for each loop do not written anyvlues that by developer made filter which returs the values
// conc :- for each ,map,filter ,reduce interates on values not in index like for loop.
const mynum = [1,2,3,4,5,6,7,8,9,10]
const valuess = mynum.filter((num)=>{
    return num >4
})
//console.log(valuess);

//filter with database;

const books = [
    {
      name: "The Great Gatsby",
      genre: "Fiction",
      publishDate: "April 10, 1925"
    },
    {
      name: "To Kill a Mockingbird",
      genre: "Fiction",
      publishDate: "July 11, 1960"
    },
    {
      name: "1984",
      genre: "Fiction",
      publishDate: "June 8, 1949"
    },
    {
      name: "Pride and Prejudice",
      genre: "Romance",
      publishDate: "January 28, 1813"
    },
    {
      name: "The Catcher in the Rye",
      genre: "Fiction",
      publishDate: "July 16, 1951"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      genre: "Fantasy",
      publishDate: "June 26, 1997"
    },
    {
      name: "The Hobbit",
      genre: "Fantasy",
      publishDate: "September 21, 1937"
    },
    {
      name: "The Lord of the Rings",
      genre: "Fantasy",
      publishDate: "July 29, 1954"
    },
    {
      name: "The Hunger Games",
      genre: "Dystopian",
      publishDate: "September 14, 2008"
    },
    {
      name: "The Alchemist",
      genre: "Fiction",
      publishDate: "1988"
    }
  ];

  const userbooks = books.filter((e)=> e.genre === "Fiction")
//   console.log(userbooks);

  const date = books.filter((el)=>{
    return el.publishDate === "1988"
  })
  //console.log(date);
  
const aj = books.filter(function(item){
    return  item.name === "The Alchemist"
    
})
//console.log(aj);


const filter = books.filter((val)=>{
    return val.publishDate >= "1970" && val.genre === "Fiction"
})
console.log(filter);