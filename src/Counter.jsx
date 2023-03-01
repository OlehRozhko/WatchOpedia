import React, { useState } from 'react'

function Counter() {
  const [countState, setCountState] = useState(() => {
    return { counter: 0, title: "Fun" }
  });

  const incrementCount = () => {
    setCountState(prevState => {
      return { ...prevState, counter: prevState.counter + 1 }
    });
  }

  const decrementCount = () => {
    setCountState(prevState => {
      return { ...prevState, counter: prevState.counter - 1 }
    });
  }
  return (
    <div className='col-12 col-md-4 offset-md-4 border text-white'>
      <span className='h2 pt-4 m-2 text-white-50'>{countState.title} Counter{" "}</span>
      <div>
        <button onClick={incrementCount} className='btn btn-success m-1'>+1</button>
        <button onClick={decrementCount} className='btn btn-danger m-1'>-1</button><br />
      </div>
      <span className='h4'>
        Counter: &nbsp;
        <span className='text-success'>{countState.counter}</span>
      </span>
    </div>
  )
}

export default Counter