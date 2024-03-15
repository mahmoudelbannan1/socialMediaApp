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
      <div className="container">
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
        </table>
        <div className="cards flex flex-wrap space-x-4 space-y-4 align-center justify-center">
          {sortedUser.map((user) => (
            <div className="card w-96 bg-base-100 shadow-xl" key={user.id}>
              <div className="card-body">
                <figure>
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <h2 className="card-title justify-center">
                  {" "}
                  <Link href={`users/${user.id}`}> {user.name}</Link>
                </h2>

                <div className="card-actions justify-center">{user.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserTable;
