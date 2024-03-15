const UserPost = ({ params }) => {
  return (
    <>
      <h1>
        user:{params.userId} one of his posts : {params.postId} page
      </h1>
    </>
  );
};

export default UserPost;
