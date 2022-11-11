import React, { useContext } from 'react'
import { MessageContext } from '../context/MessageContext'
import { MessageContextType } from '../context/types' 

const LoginMessage = () => {
    
    const {message} = useContext(MessageContext) as MessageContextType;

    return (
        <div>
            <h1>{message.text}</h1>
        </div>
    )
    }

    export default LoginMessage
