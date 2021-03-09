import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./Components/UserList";

const App = () => {
  const [listOfUser, setListOfUser] = useState(); // where to store the returned data

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        // handle success
        setListOfUser(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (listOfUser) {
    return <UserList users={listOfUser} />;
  } else {
    return <h3>Loading data ....</h3>;
  }
};

export default App;
