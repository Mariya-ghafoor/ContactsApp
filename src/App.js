import React, { useState, useEffect } from "react";
import "./styles.css";

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
    
    <div>
        <input
          className="search"
          type="text"
          placeholder="Search your contacts..."
          value={searchText}
          onChange={handleSearch}
        />
        
      </div>
      <table> 
        
      <thead>
      <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th> 
      </tr>
      </thead>
      <tbody>
      
        {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.address.city}, {user.address.country}
              </td>
            </tr>
        ))}
        
      </tbody>
      </table>
    </div>
  );
}

export default App;
