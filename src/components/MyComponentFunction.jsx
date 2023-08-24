import React, { useEffect, useState } from 'react'

const MyComponentFunction = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const addClickHandler = () =>{
        setCount((preCount) => preCount + 1)
    };

    const tick = () => {
        setDate(new Date(),)
        console.log(' Clock Updating ')
    };

    useEffect(() => {
        console.log(' Counter updating ')
        document.title = `Clicked ${count} Times`;
        // tick();
    }, [count])

    useEffect(() => {
        const interval = setInterval( tick, 1000 )

        return () => {
            console.log(' Clear Interval ')
            clearInterval(interval)
        }

    },[])

  return (
    <div>
        <div>
        <p>Time Updating: {date.getSeconds()}</p>
        <p>Time: {date.toLocaleTimeString()}</p>
        <p>
            <button type='button' onClick={addClickHandler}>Click</button>
        </p>
        <span>Counter Updating {count}</span><br />
      </div>
    </div>
  )
}

export default MyComponentFunction