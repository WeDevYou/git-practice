import { useState } from 'react';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-avataaars-sprites';
import { Button } from './components/Button/Button';

function App() {
  const [users, setUsers] = useState([]);

  const getData = () => {
    getAvatar();
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json));
  };

  const getAvatar = () => {
    return createAvatar(style, {
      seed: 'custom-seed',
      dataUri: true,
      size: 50,
    });
  };

  return (
    <div className='App'>
      <Button onClick={getData} text="Obtener usuarios"/>

      {users.length === 0 ? (
        <div>Todavia no tenemos usuarios</div>
      ) : (
        <div>
          {users.map((user) => (
            <div>
              <div>{<img src={getAvatar()} />}</div>
              <div>{user.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
