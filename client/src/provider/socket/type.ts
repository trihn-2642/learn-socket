import { Socket } from 'socket.io';
import { SocketContextAction } from './action-type';

export type SocketContextState = {
    socket?: Socket;
    uid: string;
    users: string[];
};

export type SocketContextProps = {
    socketState: SocketContextState;
    socketDispatch: React.Dispatch<SocketContextAction>;
};

export enum SOCKET_CONTEXT {
    UPDATE_SOCKET = 'UPDATE_SOCKET',
    UPDATE_UID = 'UPDATE_UID',
    UPDATE_USERS = 'UPDATE_USERS',
    REMOVE_USER = 'REMOVE_USER'
}
