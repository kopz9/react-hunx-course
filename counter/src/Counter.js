import {useState} from 'react';
import './styles.css' 

function Counter(){

  const [count, setCount] = useState(0);

  const decrement = () => setCount(count - 1);
  
  const increment = () => setCount(count + 1);
  
  const reset = () => setCount(0);
  
  return(
   <>
   <div className="container">
    <h1 className="number">{count}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>Reset</button>
    <button onClick={increment}>+</button>
   </div>
   </>
  )
}

export default Counter;