import { useEffect, useState } from 'react';
import { Button } from './components/Button/Button';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    getAllAvatars(data);
  };

  const getAllAvatars = async (data) => {
    let newUsersList = [];

    for (let i = 0; i < data.length; i++) {
      const response = await fetch(
        `https://avatars.dicebear.com/api/male/${data[i].username}.svg`
      );
      const avatar = await response.text();
      newUsersList.push({ ...data[i], avatar });
    }

    setUsers(newUsersList);
  };

  return (
    <div className='App'>
      <Button onClick={getData} text='Obtener usuarios' />

      {users.length === 0 ? (
        <div>Todavia no tenemos usuarios</div>
      ) : (
        <div>
          {users.map((user) => (
            <div>
              <div
                dangerouslySetInnerHTML={{ __html: user.avatar }}
                style={{ width: 50, height: 50 }}
              />
              <div>{user.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
