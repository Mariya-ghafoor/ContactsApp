import React, { useState, useEffect } from "react";
import "./styles.css";
import logo from './logo.svg'

function App() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  //useEffect hook executes after the component renders. If there are no dependencies it renders only once when component re-renders
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

  // The handleSearch function is called whenever the value of the search input field changes.
  const handleSearch = (event) => {
    const searchText = event.target.value; 
    setSearchText(searchText); //It updates the searchText state with the new value entered by the user.
    
 //It filters the users array based on the searchText using the filter method and case-insensitive comparison of the user's name.
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredUsers(filteredUsers); //The filtered users are stored in the filteredUsers state.
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




