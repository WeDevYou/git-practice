import { useState } from 'react';
import { UserList } from './components/List/List';

function App() {
    const [users, setUsers] = useState([]);

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
    };

    return (
        <div className="App">
            <UserList onClick={getData}></UserList>
            {!users.length ? (
                <div>Todavia no tenemos usuarios</div>
            ) : (
                <>
                    {users.map((user) => (
                        <div key={user.username}>
                            <img
                                alt={user.username + '.logo.svg'}
                                src={`https://avatars.dicebear.com/api/male/${user.username}.svg`}
                                style={{ width: 50, height: 50 }}
                            />
                            <div>{user.name}</div>
                            <div>{console.log(user.username)}</div>
                            <div>{console.log(user.email)}</div>
                            <div>{console.log(user.address)}</div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default App;
