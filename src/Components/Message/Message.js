import React from 'react'
import "./Message.css";
const Message = (props) => {
    const btnHandler = ()  =>{
        props.fn(true);
    }
  return (
    <div className='message_main'>
      <div className='message_body'>
        <h1>{props.msg}</h1>
        <button onClick={btnHandler}>OK</button>
      </div>
    </div>
  )
}

export default Message
