const UserDetails = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const details = await res.json();

  return (
    <>
      <h1 className=" font-bold">user id : {params.userId}</h1>
      <div className="flex justify-center m-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> {details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Phone: {details.phone}</p>
            <div className="card-actions justify-center ">
              <button className="btn btn-primary">Add Friend</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
