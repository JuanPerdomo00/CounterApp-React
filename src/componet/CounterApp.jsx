import PropTypes from 'prop-types';
import { useState } from "react"


export function CounterApp({value}){

    const [ count, setCount ] = useState(value)


    return(
        <>
           <h1>Count</h1>
           <span>{count}</span>
           <br />
           <button onClick={() =>  setCount(count >= value ? count + 1 : count)}>+1</button>
           <button onClick={() =>  setCount(count > value ? count - 1 : count) }>-1</button>
           <button onClick={() =>  setCount(value)}>reset</button>
        </>
       
    )
};





CounterApp.propTypes = {
    value : PropTypes.number.isRequired
};