/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import User from './components/User';
import { useSocket } from './hooks/useSocket';
import { useSocketDispatch } from './provider/socket/hooks';
import { removeUser, updateSocket, updateUid, updateUsers } from './provider/socket/actions';
import { Socket } from 'socket.io';

const App: React.FC = () => {
    const socket = useSocket('ws://localhost:9999', {
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        autoConnect: false
    });
    const dispatch = useSocketDispatch();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        socket.connect();
        dispatch(updateSocket(socket as unknown as Socket));
        StartListeners();
        SendHandshake();
    }, []);

    const StartListeners = () => {
        /** Messages */
        socket.on('user_connected', (users: string[]) => {
            console.info('User connected message received');
            dispatch(updateUsers(users));
        });

        /** Messages */
        socket.on('user_disconnected', (uid: string) => {
            console.info('User disconnected message received');
            dispatch(removeUser(uid));
        });

        /** Connection / reconnection listeners */
        socket.io.on('reconnect', (attempt) => {
            console.info('Reconnected on attempt: ' + attempt);
            SendHandshake();
        });

        socket.io.on('reconnect_attempt', (attempt) => {
            console.info('Reconnection Attempt: ' + attempt);
        });

        socket.io.on('reconnect_error', (error) => {
            console.info('Reconnection error: ' + error);
        });

        socket.io.on('reconnect_failed', () => {
            console.info('Reconnection failure.');
            alert('We are unable to connect you to the chat service.  Please make sure your internet connection is stable or try again later.');
        });
    };

    const SendHandshake = async () => {
        console.info('Sending handshake to server ...');

        socket.emit('handshake', async (uid: string, users: string[]) => {
            console.info('User handshake callback message received');
            dispatch(updateUsers(users));
            dispatch(updateUid(uid));
        });

        setLoading(false);
    };

    if (loading) return <p>... loading Socket IO ....</p>;

    return <User />;
};

export default App;
