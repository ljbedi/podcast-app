import React, { useState, useEffect } from 'react';

const User = ()=>{
    const [users, setUsers] = useState ([]);
    useEffect (() =>{
        fetchUsers();
    }, []);
  
    const fetchUsers = () => {
      fetch('http://localhost:9000/api/users')
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((error) => {
          console.error('Error fetching user:', error);
        });
    };
    return (
        <>
          <h2>USers</h2>
          {users.map((user) => (
            <h4> {user.subscribedPodcasts}</h4>
          ))}
        </>
      );
};


export default User