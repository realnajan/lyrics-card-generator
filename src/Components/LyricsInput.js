import React, { useEffect, useState } from 'react';

export default function Input(props) {

    const [value, setValue] = useState("")
    const [line, setLine] = useState(0)

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          props.func(value, line);
          console.log('setting input value ' + value)
        }, 1000)
    
        return () => clearTimeout(delayDebounceFn)
      }, [value])

      function input(value, line) {
          setValue(value);
          setLine(line);
          console.log('setting lyrics value ' + value)
      }


    return (
        <div class="flex flex-col w-full md:w-5/6 xl:w-1/2">
            <input 
            type='text'
            class="mt-6 w-full md:w-full transition duration-100 ease-in-out appearance-none focus:bg-yellow-300 font-mono bg-gray-300 p-2 px-4 text-gray-700 placeholder-gray-500"
            placeholder="Lyrics Line 1"
            onChange={(e) => input(e.target.value, 0)}
            >
            </input>
            <input 
            type='text'
            class="w-full md:w-full transition duration-100 ease-in-out appearance-none focus:bg-yellow-200 font-mono bg-gray-200 p-2 px-4 text-gray-700 placeholder-gray-500"
            placeholder="Lyrics Line 2"
            onChange={(e) => input(e.target.value, 1)}
            >
            </input>
            <input 
            type='text'
            class="w-full md:w-full transition duration-100 ease-in-out appearance-none focus:bg-yellow-300 font-mono bg-gray-300 p-2 px-4 text-gray-700 placeholder-gray-500"
            placeholder="Lyrics Line 3"
            onChange={(e) => input(e.target.value, 2)}
            >
            </input>
            <input 
            type='text'
            class="w-full md:w-full transition duration-100 ease-in-out appearance-none focus:bg-yellow-200 font-mono bg-gray-200 p-2 px-4 text-gray-700 placeholder-gray-500"
            placeholder="Lyrics Line 4"
            onChange={(e) => input(e.target.value, 3)}
            >
            </input>
        </div>
    )
}
