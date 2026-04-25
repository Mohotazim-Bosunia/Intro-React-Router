import React from "react";
import { Link } from "react-router";

const UserStyle = {
  border: "2px solid green",
  borderRadius: "20px",
  padding: "10px",
  margin: "10px",
};

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div style={UserStyle}>
      <h3>Name:{name}</h3>
      <p>Email:{email}</p>
      <p>
        <small>Phone:{phone}</small>
      </p>
      <Link to={`/users/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
