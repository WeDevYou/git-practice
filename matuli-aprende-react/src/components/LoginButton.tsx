import { useContext } from "react";
import { IMessage, MessageContextType } from "../context/types";
import { MessageContext } from "../context/MessageContext"

type Props = {
    title: string,
    setMessage: (text: string) => void;
}

const LoginButton: React.FC<Props> = ({ title }) => {

    const {message, setMessage} = useContext(MessageContext) as MessageContextType

    const storeMessageInContext = (message: string) => {
        const newMessage: IMessage = {
            text: message
        }

        setMessage(newMessage)
    }

    return (
        <button
            className="btn btn-primary"
            onClick = {() => storeMessageInContext("Connected!")}
        >{title}</button>
    )
}

export default LoginButton;