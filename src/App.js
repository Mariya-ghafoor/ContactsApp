import React, { useState, useEffect } from "react";
import "./styles.css";
import logo from './logo.svg'

function App() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  const handleSearch = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  };

  return (
    <div>
<div className= "container">
    
    <div>
    <img src={logo} alt = "" width="100" height="50" />
    </div>
    <div>
    <h1>Contacts App </h1>
        <input
          className="search"
          type="text"
          placeholder="Search your contacts here..."
          value={searchText}
          onChange={handleSearch}
        />
        
      </div>
      <table> 
        
      <thead>
      <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Website</th> 
      </tr>
      </thead>
      <tbody>
      
        {filteredUsers.map((user) => (

            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                www.{user.website}</td>
            </tr>
        ))}
        
      </tbody>
      </table>
      
    </div>
    
    </div>
    
  );
}

export default App;




