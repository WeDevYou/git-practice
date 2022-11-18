import { blue } from "@material-ui/core/colors";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await response.json();

    setUsers(usersData);
  };

  return (
    <div className="App">
      <button onClick={getUsers}> Aprietame </button>

      {!users.length ? (
        <div>No hay nada por aquí.</div> //Ternary function
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Nombre de Usuario</th>
                <th>Email</th>
                <th>Avatar</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <img
                      src={`https://avatars.dicebear.com/api/croodles/${user.username}.svg?background=gray`}
                      style={{ width: 50, height: 50 }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          }
        </div>
      )}
    </div>
  );
}

export default App;
