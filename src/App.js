import React ,{useState} from 'react';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList';

function App() {

  const [userList, setUserList] = useState([])

  const userDataHandler = (name, age)=>{
    setUserList((previousList)=>{
      return [...previousList, {userName:name, Age:age , id:Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser  AddUserData={userDataHandler}/>
      <UsersList  users={userList}/>
    </div>
  );
}

export default App;
