import React, { useState, useEffect, useContext } from 'react';
import ApiKey from '../App.js';

export default function Input(props) {

    const [value, setValue] = useState("")

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          props.func(value);
          console.log('setting input value ' + value)
        }, 1000)
    
        return () => clearTimeout(delayDebounceFn)
      }, [value])

    return (
        <div>
            <input 
            type="text" 
            placeholder={props.placeholder} 
            onChange={(e) => setValue(e.target.value)}
            class="mt-6 w-full md:w-5/6 xl:w-1/2 transition duration-100 ease-in-out appearance-none focus:bg-yellow-300 font-mono bg-gray-300 p-2 px-4 text-gray-700 placeholder-gray-500">
            </input>
        </div>
    )
}
