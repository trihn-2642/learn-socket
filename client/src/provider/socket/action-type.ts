import { Socket } from 'socket.io';
import { SOCKET_CONTEXT } from './type';

type ActionWithPayload<T extends string, P> = {
    type: T;
    payload: P;
};

export type UpdateSocketRequest = ActionWithPayload<SOCKET_CONTEXT.UPDATE_SOCKET, Socket>;

export type UpdateUidRequest = ActionWithPayload<SOCKET_CONTEXT.UPDATE_UID, string>;

export type UpdateUsersRequest = ActionWithPayload<SOCKET_CONTEXT.UPDATE_USERS, string[]>;

export type RemoveUserRequest = ActionWithPayload<SOCKET_CONTEXT.REMOVE_USER, string>;

export type SocketContextAction = UpdateSocketRequest | UpdateUidRequest | UpdateUsersRequest | RemoveUserRequest;
