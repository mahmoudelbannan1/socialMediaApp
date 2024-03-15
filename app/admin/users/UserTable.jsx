import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";
import { BsTrashFill } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { TiEye } from "react-icons/ti";

const UserTable = async ({ sortBy }) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
    // {cache:'no-store'}
    // {next:{revalidate:10}}
  );
  const users = await res.json();
  const sortedUsers = sort(users).asc(
    sortBy === "email" ? (user) => user.email : (user) => user.name
  );
  return (
    <div>
      UserTable , {sortBy}
      <table>
        <thead>
          <tr>
            <th>
              <Link href="/admin/users?orderBy=name">Name</Link>
            </th>
            <th>
              <Link href="/admin/users?orderBy=email">Email</Link>
            </th>
            <th>
              <Link href="/admin/users">Action</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <div className="flex space-x-2 ">
                  <BsTrashFill style={{ color: "red" }} />
                  <CiEdit style={{ color: "blue" }} />
                  <TiEye style={{ color: "green" }} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
