import { useState } from "react"

export default function Counter (){
    const [count, setCount] = useState(100);
    return(
        <div style={{border: '2px solid lightblue', marginBottom:'25px', padding: '10px'}}>
            <h2>Counter: {count}</h2>
            <button>Add</button>
        </div>
    )
}
