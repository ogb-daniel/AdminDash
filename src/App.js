import {useEffect, useState} from 'react';
import Table from './components/Table';
import ContainerHead from './components/ContainerHead';
import { CANDIDATEID, ENDPOINT } from './constant';



function App() {
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilteredUsers] = useState([]);
  let totalPayAmount = 0;
  async function getUsers(params) {
      const response = await fetch(`${ENDPOINT}/users/${CANDIDATEID}`);
      const data = await response.json();
      setUsers(data.data);
      setFilteredUsers(data.data);
  }

  users.forEach((user)=>{
      if(user.paymentStatus === 'paid'){
          return;
      }else{
          totalPayAmount += user.amountInCents;
      }
  });


  useEffect(() => {
     getUsers();
  }, []);
  return (
    <div className="App">
    <div className='container'>
    <ContainerHead totalPayAmount={totalPayAmount} users={users} setUsers={setFilteredUsers}/>
 
    <Table users={filterUsers} ogUsers={users} setFilteredUsers={setFilteredUsers}/>
    </div>

    </div>
  );
}

export default App;
