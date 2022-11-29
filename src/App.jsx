import { useEffect, useState } from "react";
import { Button } from "./components/Button/Button";
import { UsersList } from "./components/UsersList/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await response.json();

    setUsers(usersData);
  };

  return (
    <div className="App">
      <Button onClick={getUsers} text="Obtener usuarios" />
      <UsersList users={users} />
    </div>
  );
}

export default App;