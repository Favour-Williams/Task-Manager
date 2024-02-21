import React from 'react'
import {FaVideo} from 'react-icons/fa';

export default function Header({text}) {
  return (
    <div>
        <h1>{text}</h1>
        <input/>
        <FaVideo/>
        
        <button>+Create Task</button>
      <hr />
    </div>
  )
}
