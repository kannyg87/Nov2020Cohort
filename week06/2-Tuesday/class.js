// const request = new XMLHttpRequest();
// request.onreadystatechange = function(){
//     if (this.readyState === 4) {
// console.log(this.responseText);
// let data = JSON.parse(this.responseText);
// console.log(data);
// }
// request.open('GET', "https://jsonplaceholder.typicode.com/todos")

// request.send();

// 1 2 3 5 13 fib(n-1) + f(n-2)
let fib = (n)=>{
    if(n<2){
        return n 
    }
    return fib(n-1) + fib(n-2)
}
console.log(fib(20));

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
