import React,{useState } from "react";
import { Button } from './components/Button/Button';

export default function App() {
  const [users, setUsers] = useState();
  const [error, setError] = useState();

  const handleClick = async () => {
   
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
        
      getAllAvatar(data);
    } catch (error) {
        setError("We couldn't make the request to get the user");
    }
  }

    const getAllAvatar = async (data) => {
      let newUsersList = [];
      try {
        for (let i = 0; i < data.length; i++) {
          const response = await fetch(
            "https://avatars.dicebear.com/api/male/${data[i].username}.svg?background=%230000ff"
          );
          const avatar = await response.text();
          newUsersList.push({ ...data[i], avatar });
        }

        setUsers(newUsersList);
      } catch (error) {
        setError("We couldn't make the request to get the user");
      }
    }
 
    return (
      <div className='App'>
        <Button onClick={handleClick} text='Users' />
  
        {!users?.length ? (
          <div>{"Users Unavailable" || error}</div>
        ) : (
          <div>
            {users?.map((user) => (
              <div>
                <div
                  dangerouslySetInnerHTML={{ __html: user.avatar }}
                  style={{ width: 100, height: 100 }}
                />
                <div>{user.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
 
