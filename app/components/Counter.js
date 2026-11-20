'use client';

import { useState } from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(0);

    function addToCount() {
        let newCount = count + props.amount;

        if (newCount > 10) {
            newCount = 0;
        }

        setCount(newCount);
    }

    return (
        <div>
            <button onClick={addToCount} style={{ backgroundColor: props.color }}>
                Add {props.amount}
            </button>
            <p>Count: {count}</p>
        </div>
    );
}
