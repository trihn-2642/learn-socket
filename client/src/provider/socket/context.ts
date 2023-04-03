import { createContext } from 'react';
import { SocketContextProps } from './type';

export const SocketContext = createContext<SocketContextProps>({
    socketState: {
        socket: undefined,
        uid: '',
        users: []
    },
    socketDispatch: () => {}
});

export const SocketContextConsumer = SocketContext.Consumer;
export const SocketContextProvider = SocketContext.Provider;
