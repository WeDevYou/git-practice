import { useState } from 'react';
import { Button } from './components/Button/Button';
import { UsersList } from './components/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([]);


  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div className='App'>
      <Button onClick={getData} text='Obtener usuarios' />
      <UsersList users={users} />
    </div>
  );
}

export default App;
