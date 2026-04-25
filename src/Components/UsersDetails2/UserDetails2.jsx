import React, { use } from "react";

const UserDetails2 = ({ userPromise }) => {
  const user = use(userPromise);
  //   console.log(user);
  const { name, username, website } = user;
  return (
    <div>
      <h3>Name:{name}</h3>
      <h2>UserName:{username}</h2>
      <p>Website:{website}</p>
    </div>
  );
};

export default UserDetails2;
