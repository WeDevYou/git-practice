import React, { createContext, ReactNode, useState } from "react";
import { IMessage, MessageContextType } from "./types";

const initialMessage: IMessage = {
    text: "Not connected... :("
}

export const MessageContext = createContext({});

interface Props {
    children: ReactNode
}

export const MessageContextProvider = ({ children }: Props) => {

    const [message, setMessage] = useState<IMessage>(initialMessage)

    return (
        <MessageContext.Provider value={{message, setMessage}}>
            {children}
        </MessageContext.Provider>
    )
}

 