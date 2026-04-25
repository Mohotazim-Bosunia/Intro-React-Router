import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  // console.log(user);
  const { name, username, website } = user;
  return (
    <div>
      <h2>This is Users Details</h2>
      <h3>Name:{name}</h3>
      <h4>Username:{username}</h4>
      <p>Website:{website}</p>
    </div>
  );
};

export default UserDetails;
