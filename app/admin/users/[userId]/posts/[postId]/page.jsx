import React from 'react'

// http://localhost:3000/users/:userId/posts/:postId

const UserPost = ({params}) => {
  return (
    <div>userId: {params.userId} , UserPost : {params.postId}</div>
  )
}

export default UserPost