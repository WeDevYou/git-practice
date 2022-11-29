import React from "react";

export const UsersList = (user) => {
  return (
    <>
      {user.users.map((user, i) => (
        <div key={user.username} onClick={() => console.log(user)}>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Nombre de Usuario</th>
                <th>Email</th>
                <th>Dirección</th>
                <th>Avatar</th>
              </tr>
            </thead>

            <tbody>
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{`${user.address.city} ${user.address.street} ${user.address.suite}`}</td>
                <td>
                  <img
                    alt={user.username + ".logo.svg"}
                    src={`https://avatars.dicebear.com/api/male/${user.username}.svg`}
                    style={{ width: 50, height: 50 }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
};
