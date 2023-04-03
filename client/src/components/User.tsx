import React from 'react';
import { useSocketState } from '../provider/socket/hooks';

function User() {
    const { socket, uid, users } = useSocketState();

    return (
        <div>
            <h2>Socket IO Information:</h2>
            <p>
                Your user ID: <strong>{uid}</strong>
                <br />
                Users online: <strong>{users.length}</strong>
                <br />
                Socket ID: <strong>{socket?.id}</strong>
                <br />
            </p>
        </div>
    );
}

export default User;
