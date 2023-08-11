import { Component } from "react"
import { useState } from "react";

// class Counter extends Component { 
//     constructor() { 
//         super();
//         this.state = { 
//             counter: 0,
//         }; 
//     }
//     increment(){
//         this.setState({
//             counter: this.state.counter + 1,
//         });
//     }

//     render() {
//         return (
//             <div>
//               <h3>Count value is: {this.state.counter} </h3>
//               <button onClick={() =>this.increment()}>Increment</button>
//             </div>

//         )
//     }
// }


function Counter() {
    const[counter, setCounter] = useState(1);
    const handleIncrement = () => {
        setCounter(counter +1 ) 
    }
    return (
        <div>
        <h1>{counter}</h1>
        <button onClick = {handleIncrement} >Increment</button>
        </div>
    )
}
export default Counter;