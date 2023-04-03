import React, { PropsWithChildren } from 'react';
import { SocketContextProvider } from './context';
import { useSocketCore } from './hooks';

const SocketProvider: React.FC<PropsWithChildren> = ({ children }): JSX.Element => {
    const { socketState, socketDispatch } = useSocketCore();

    return <SocketContextProvider value={{ socketState, socketDispatch }}>{children}</SocketContextProvider>;
};

export default SocketProvider;
