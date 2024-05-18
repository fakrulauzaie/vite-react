import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCounter, decrementCounter } from '../../actions/generalAction'

function Counter() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementCounter())}
        >
          Increment
        </button>
        <span> {counter} </span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrementCounter())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter;