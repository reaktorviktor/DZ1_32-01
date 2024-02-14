import React, { useState } from 'react';
const counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    const decrement = () => {
        setCount(prevCount => Math.max(prevCount - 1, 0));
    }
    const clear = () => {
        setCount(0)
    }
    const addten = () => {
        setCount(prevCount => prevCount + 10);
    }
    const addmore = () => {
        setCount(prevCount => prevCount + 100);
    }
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={clear}>Clear</button>
            <button onClick={addten}>+10</button>
            <button onClick={addmore}>+100</button>
        </div>
    )
}
export default counter;