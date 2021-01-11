const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


//using forEach print each object of companies array
//using a for loop print each object of companies array 
// companies.forEach(function(obj){
//     console.log(obj.name, obj.start);
// })

//map through the companies array and change the end date to 2020

// var newArr = companies.map(function(obj){
//     return obj.end =2020;
// })
// console.log(newArr);

// var dates = companies.filter(function(obj){
//     return obj.start> 1980;
// })



// var result = ages.some(function(age){
//     return age>60;
// })
// console.log(result);

// ages.forEach(function(age)
// {
//     let birth = 2020-age;
//         console.log(birth);
// });


// Filter out all ages greater than 35 
// var ageFilter = ages.filter((age)=> age<=35)


/// map through ages array and return a new ages array where 5 is added to each element.
// var newAges = ages.map(function(age){
//     return age+3;
// });

// var newAges = ages.map(arrVAl => arrVAl +5)











