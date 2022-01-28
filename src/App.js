import { useState } from 'react';
import classes from './App.module.css';
import UserForm from './components/Users/UserForm';
import UserList from './components/Users/UserList';
import Card from './components/UI/Card';

function App() {

  const [users, setUsers] = useState([]);

  const addUser = user => {
    setUsers(prevUsers => [user, ...prevUsers]);
  };

  return (
    <div className={classes.App} >
      <Card>
        <UserForm addUser={addUser}></UserForm>
      </Card>
      <Card>
        <UserList users={users}></UserList>
      </Card>
    </div >
  );
}

export default App;
