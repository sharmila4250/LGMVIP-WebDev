import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    setUsers(jsonResponse.data);
  };
  return (
    <div className="App">
      <header>
        <img
          class="brand-name"
          src="https://cartoesda.com/wp-content/uploads/2015/10/zippy.png"
          alt="brand-name"
        ></img>
        <button onClick={loadUsers}> Click to Get User's Details</button>
      </header>
      <ul>
        {users.map(({ id, email, first_name, last_name, avatar }) => (
          <li class="list" key={id}>
            <img class="profile" src={avatar} alt="profile"></img>
            <li class="list1">
              Name : {first_name} {last_name}
            </li>
            <li class="list1">Email ID : {email}</li>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
