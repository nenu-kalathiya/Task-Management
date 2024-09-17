import './App.css';
import Login from './Component/Login';
import TaskList from './Task/TaskList';
import Registration from './Component/Registration'
import { useState } from 'react';


function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const registerUser = (username, password) => {
    const userExists = users.some(user => user.username === username);
    if (userExists) {
      alert("Username already exists!");
    } else {
      setUsers([...users, { username, password }]);
      alert("Registration successful!");
    }
  };

  const loginUser = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setCurrentUser(user);
    } else {
      alert("Invalid username or password");
    }
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };
  return (
    <div className='App form '>

      {!currentUser ? (
        <>
          <Registration registerUser={registerUser} />
          <Login loginUser={loginUser} />
        </>
      ) : (
        <TaskList currentUser={currentUser} logoutUser={logoutUser} />
      )}



    </div>
  );
}

export default App;