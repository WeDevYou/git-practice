import { useState } from 'react';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/croodles';


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
      size: 100,
    });
  };

  return (
    <div className='App'>
      <h1>        
       { <button onClick={getData}>"Haceme click Omar"</button> }
      </h1>      

      { users.length == 0 ? (
        <div>No hay nada por aquí.</div>
      ) 
      :
      (
        <div>
          {users.map((user) => (
            <div>
              <div>{<img src={getAvatar()} />}</div>
              <div>{user.name}</div>
            </div>
          ))}
        </div>
      ) }
    </div>
  );
}

export default App;