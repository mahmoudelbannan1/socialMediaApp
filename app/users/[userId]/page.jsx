const UserDetails = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const details = await res.json();

  return (
    <>
      <h1>user id page : {params.userId}</h1>
      <p>name: {details.name}</p>
      <p>email: {details.email}</p>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {details.name}</h2>
          <p>{details.email}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add Friend</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
