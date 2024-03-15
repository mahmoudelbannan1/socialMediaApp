import UserTable from "./UserTable";

const Users = async ({ searchParams }) => {
  console.log(searchParams);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>order By : {searchParams.order}</h1>
        <UserTable sortBy={searchParams.order}></UserTable>
      </main>
    </>
  );
};

export default Users;
