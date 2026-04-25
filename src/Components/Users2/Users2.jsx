import React, { use } from "react";

const Users2 = ({ usersPromise }) => {
  const users2 = use(usersPromise);
  console.log("This is users2", users2);
  return (
    <div>
      <h2>This is Users2</h2>
    </div>
  );
};

export default Users2;
