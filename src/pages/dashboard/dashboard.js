import React, { useState, useEffect } from 'react';

function UsersComponent() {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        fetch('/api/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    const addUser = () => {
        fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username })
        })
        .then(response => response.json())
        .then(data => {
            if(data.message === "User added!") {
                setUsers([...users, data.username]);
                setUsername('');  // Clear the input
            }
        });
    }

    return (
        <div>
            <ul>
                {users.map((user, index) => <li key={index}>{user}</li>)}
            </ul>
            <input value={username} onChange={e => setUsername(e.target.value)} />
            <button onClick={addUser}>Add User</button>
        </div>
    );
}

export default UsersComponent;
