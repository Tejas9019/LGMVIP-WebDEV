import React from 'react';
import { useState } from 'react';
import './App.css';
import UserCards from './UserCards';
import user from'./Users.jpg'

function App() {
  const [isDataFetch, setisDataFetch] = useState(false);
  const [users, setUsers] = useState([]);
  const [isBtnClick, setisBtnClick] = useState(false);

  const fetchUsers = async () => {
    try {
    setisBtnClick(true);
    const response = await fetch('https://reqres.in/api/users');
    const res = await response.json();
        // console.log(res)
        setUsers(res.data);
        setInterval(() => {
          setisDataFetch(true);
        }, 1500);
      }
      catch(e) {
        console.log(e)
      }
  };
  
  return (
     <> 
    <header>
      <span className="logo"><i className="fas fa-users"></i> STUDENTS</span>
      <button onClick={fetchUsers}>Get Users</button>
      </header>
                
      {isBtnClick ? (
        isDataFetch ? (
          <UserCards users={users} />
      ) : (
          <div className="loader"></div> // <Loader/>
             )
   ) : (
           <div>
            <section className="home">
             <div className="content">
              <h3>Welcome To PRESIDENCY UNIVERSITY</h3>
              <p>Click on "GET USERS" button to get the details of the STUDENTS</p>
            </div>
              <div className="image">
               <img src={user} alt="Hero" />
              </div>
             </section>
          </div>
      )}
</>
);
}

export default App; 