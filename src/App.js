import './App.css';
import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsers((prevUsersList) => {
      return [...prevUsersList,
      { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
