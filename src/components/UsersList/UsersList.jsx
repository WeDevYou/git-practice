import React from 'react';

export const UsersList = (props) => {
  if (!props.users.length) return <>Todavia no tenemos usuarios</>;

  return (
    <>
      {props.users.map((user) => (
        <div key={user.username} onClick={() => console.log(user)}>
          <img
            alt={user.username + '.logo.svg'}
            src={`https://avatars.dicebear.com/api/male/${user.username}.svg`}
            style={{ width: 50, height: 50 }}
          />

          <div>{user.username}</div>
          <div>{user.email}</div>
          <div>{user.name}</div>
          <div>{`${user.address.city} ${user.address.street} ${user.address.suite}`}</div>
        </div>
      ))}
    </>
  );
};