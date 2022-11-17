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

  const addAvatar = async (user) => {
    const response = await fetch(
      `https://avatars.dicebear.com/api/male/${user.username}.svg`
    );
    const avatar = await response.text();

    return { ...user, avatar };
  };

  const getAllAvatars = async (data) => {
    let newUsersList = [];

    for await (const response of data.map((user) => addAvatar(user))) {
      newUsersList.push(response);
    }

    setUsers(newUsersList);
  };

  const renderUsers = () => {
    return !users.length ? (
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
    );
  };
	

  return (
    <div className='App'>
      <Button onClick={getData} text='Obtener usuarios' />
      {renderUsers()}
    </div>
  );
}

export default App;
