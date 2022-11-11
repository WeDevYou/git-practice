export interface IMessage {
    text: string
}

export type MessageContextType = {
    message: IMessage;
    setMessage: (message: IMessage) => void;
}