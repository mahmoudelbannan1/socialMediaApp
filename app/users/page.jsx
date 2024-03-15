import UserTable from "./UserTable";

const Users = async ({ searchParams }) => {
  console.log(searchParams);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center  p-24 m-500">
        <UserTable sortBy={searchParams.order}></UserTable>
      </main>
    </>
  );
};

export default Users;
