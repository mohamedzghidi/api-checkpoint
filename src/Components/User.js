import React from "react";

function User(props) {
  const { suite, street, city, zipcode } = props.address;
  const { name, catchPhrase, bs } = props.company;
  return (
    <div className="card cardStyle">
      <div className="card-body">
        <h5 className="card-title cardTitle">{props.name}</h5>
        <p>
          <span className="title">Username:</span> {props.username}
        </p>
        <p>
          <span className="title">Email:</span> {props.email}
        </p>
        <p>
          <span className="title">Phone:</span> {props.phone}
        </p>
        <p>
          <span className="title">Website:</span> {props.website}
        </p>
        <p>
          <span className="title">Address: </span>
          {`${suite}, ${street}, ${city}, ${zipcode} `}
        </p>
        <p>
          <span className="title">Company:</span> {`${name} (${catchPhrase})`}
        </p>
      </div>
    </div>
  );
}

export default User;
