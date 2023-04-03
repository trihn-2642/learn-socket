import React from 'react';
import { useSocketState } from '../provider/socket/hooks';
import { SocketContextConsumer } from '../provider/socket/context';

function User() {
    const { socket, uid, users } = useSocketState();

    return (
        <>
            <div>
                <h2>Socket IO Information with custom hooks:</h2>
                <p>
                    Your user ID: <strong>{uid}</strong>
                    <br />
                    Users online: <strong>{users.length}</strong>
                    <br />
                    Socket ID: <strong>{socket?.id}</strong>
                    <br />
                </p>
            </div>
            <hr />
            <SocketContextConsumer>
                {({ socketState }) => (
                    <div>
                        <h2>Socket IO Information with consumer:</h2>
                        <p>
                            Your user ID: <strong>{socketState.uid}</strong>
                            <br />
                            Users online: <strong>{socketState.users.length}</strong>
                            <br />
                            Socket ID: <strong>{socketState.socket?.id}</strong>
                            <br />
                        </p>
                    </div>
                )}
            </SocketContextConsumer>
        </>
    );
}

export default User;
