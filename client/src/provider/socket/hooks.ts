import { useContext, useReducer } from 'react';
import { SocketContextAction } from './action-type';
import { SOCKET_CONTEXT, SocketContextState } from './type';
import { SocketContext } from './context';

export const initialState: SocketContextState = {
    socket: undefined,
    uid: '',
    users: []
};

const reducer = (state: SocketContextState = initialState, action: SocketContextAction) => {
    switch (action.type) {
        case SOCKET_CONTEXT.UPDATE_SOCKET:
            return { ...state, socket: action.payload };
        case SOCKET_CONTEXT.UPDATE_UID:
            return { ...state, uid: action.payload };
        case SOCKET_CONTEXT.UPDATE_USERS:
            return { ...state, users: action.payload };
        case SOCKET_CONTEXT.REMOVE_USER:
            return { ...state, users: state.users.filter((uid) => uid !== action.payload) };
        default:
            return state;
    }
};

export const useSocketCore = () => {
    const [socketState, socketDispatch] = useReducer(reducer, initialState);
    console.log(socketState);

    return {
        socketState,
        socketDispatch
    };
};

export const useSocketState = () => useContext(SocketContext).socketState;
export const useSocketDispatch = () => useContext(SocketContext).socketDispatch;
