import React, { Suspense, useState } from "react";
import { Link } from "react-router";
import UserDetails2 from "../UsersDetails2/UserDetails2";

const UserStyle = {
  border: "2px solid green",
  borderRadius: "20px",
  padding: "10px",
  margin: "10px",
};

const User = ({ user }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { id, name, email, phone } = user;

  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  ).then((res) => res.json());
  return (
    <div style={UserStyle}>
      <h3>Name:{name}</h3>
      <p>Email:{email}</p>
      <p>
        <small>Phone:{phone}</small>
      </p>
      <Link to={`/users/${id}`}>Show Details</Link>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? " Hide Info" : "Show Info"}
      </button>
      {showInfo && (
        <Suspense fallback={<span>Loadin...</span>}>
          <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      )}
    </div>
  );
};

export default User;
