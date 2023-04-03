import { Socket } from 'socket.io';
import { SOCKET_CONTEXT } from './type';
import { RemoveUserRequest, UpdateSocketRequest, UpdateUidRequest, UpdateUsersRequest } from './action-type';

const updateSocket = (socket: Socket): UpdateSocketRequest => {
    return {
        type: SOCKET_CONTEXT.UPDATE_SOCKET,
        payload: socket
    };
};

const updateUid = (uid: string): UpdateUidRequest => {
    return {
        type: SOCKET_CONTEXT.UPDATE_UID,
        payload: uid
    };
};

const updateUsers = (users: string[]): UpdateUsersRequest => {
    return {
        type: SOCKET_CONTEXT.UPDATE_USERS,
        payload: users
    };
};

const removeUser = (uid: string): RemoveUserRequest => {
    return {
        type: SOCKET_CONTEXT.REMOVE_USER,
        payload: uid
    };
};

export { updateSocket, updateUid, updateUsers, removeUser };
