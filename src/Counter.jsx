import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(100);

    const clickForAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const clickForReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div style={{ border: '2px solid lightblue', marginBottom: '25px', padding: '10px', gap: '5px'}}>
            <h2>Counter: {count}</h2>
            <button onClick={clickForAdd}>Add</button>
            <button onClick={clickForReduce}>Reduce</button>
        </div>
    )
}
