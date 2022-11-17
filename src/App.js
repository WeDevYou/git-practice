import { blue } from '@material-ui/core/colors';
import { useEffect, useState } from 'react';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/croodles';



  function App() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const usersData = await response.json();

        setUsers(usersData);
  };

  return (
    <div className='App'>
      <button onClick={getUsers}> Aprietame </button>

      {!users.length ? (
      <div>No hay nada por aquí.</div> //Ternary function
    ) : (
      <div>
        {users.map((user) => (
          <div key={user.username} >
            <img src={`https://avatars.dicebear.com/api/croodles/${user.username}.svg?background=gray`} style={{ width: 50, height: 50 }}/>
            <div>{user.name}</div>
          </div>
        ))}
      </div>
    )}

    </div>
  );
}


export default App;