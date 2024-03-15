import { sort } from "fast-sort";
import Link from "next/link";

const UserTable = async ({ sortBy }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const ourUsers = await res.json();
  const sortedUser = sort(ourUsers).asc((u) =>
    sortBy == "name" ? u.name : u.email
  );

  return (
    <>
      <div>sort by : {sortBy} </div>
      <table>
        <thead>
          <tr>
            <th>
              <Link href="users?order=name">name</Link>
            </th>
            <th>
              <Link href="users?order=email">email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUser.map((user) => (
            <tr key={user.id}>
              <td>
                <Link href={`users/${user.id}`}> {user.name}</Link>
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
