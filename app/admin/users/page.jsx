import React from "react";
import UserTable from "./UserTable";

// http://localhost:3000/users
const UsersPage = ({ searchParams }) => {
  return (
    <div className="flex justify-center align-center m-10  w-full">
      <UserTable sortBy={searchParams.orderBy}></UserTable>
    </div>
  );
};

export default UsersPage;
