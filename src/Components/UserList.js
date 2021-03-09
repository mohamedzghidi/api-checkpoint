import React from "react";
import User from "./User";

function UserList(props) {
  return (
    <div className="card-deck cardDeck">
      {props.users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
}

export default UserList;
