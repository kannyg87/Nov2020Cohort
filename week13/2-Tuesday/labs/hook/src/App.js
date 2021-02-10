// FUNCITONAL COMPONENTS
// import { useState, useEffect } from "react";
// function App() {
//   const [count, setCount] = useState(0);
//   const [userName, setUserName] = useState(0);
//   const [articles, setArticles] = useState([]);
//   useEffect(() => {
//     // ASYNC CODE CAN GO IN HERE BUT NEEDS TO GO IN A FUNCTION THAT YOU CALL HERE AS WELL
//     console.log("useEffect has fired");
//   }, [count]);
//   // useEffect(() => {}, []);
//   // // componentDidMount mimicking
//   // useEffect(() => {});
//   // // called every time state is updated
//   // useEffect(() => {}, [stateVariableToTrack]);
//   // listen for a change in that state variable, run useEffect
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <h3>This is count: {count}</h3>
//       <button onClick={() => setCount(count + 1)}>Increment 🚀</button>
//       <button onClick={() => setCount(count - 1)}>Decrement 🙀</button>
//     </div>
//   );
// }
// export default App;
// // 1. React Hook useState
// // 2. React Hook useEffect
// // CLASS COMPONENTS
// // import React, { Component } from "react";
// // export default class App extends Component {
// //   this.state({
// //     count: 0,
// //     array: []
// //   })
// //   setCount = ()=> {
// //     this.setState({
// //       count: this.state.count + 1
// //     })
// //   }
// //   render() {
// //     return (
// //       <div>
// //         <h1>Hello World</h1>
// //       </div>
// //     );
// //   }
// // }



import React, {useState, useEffect} from 'react'
// custom file hook
const useCounter = () => {
  const [count, setCount]= useState(0)
  const increment = () =>setCount(count+1);

  return[count, increment]
}

const App =() =>{
  const [count, increment] = useCounter();
  return <button onClick={increment}>{count}</button>
}



// const App = () => {
//   //const initialCount = Number(window.localStorage.getItem('count') || 0);
//   // we made it call back function to call just one time
//   const initialCount = ()=> parseInt(window.localStorage.getItem('count')) || 0;

 
//   // const [count2, setCount2]= useState(0)

  
//   // const handleChange2 = () =>setCount2(count+1);
//   useEffect(()=>{
//     window.localStorage.setItem('count', count)
//   })




  return (
    <div styles={{textAlign:'center', paddingTop:'200px'}}>

<button onClick={handleChange} >{count}</button>


{/* <button onClick={handleChange2} >{count2}</button> */}
    {/* //inline */}
      {/* <button onClick={() =>setCount(count+1)}>{count}</button> */}
    </div>
  )
// }

export default App
