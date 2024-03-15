import React from 'react'

// http://localhost:3000/users/:userId
// http://localhost:3000/users/8768664764


const UserDetails = ({params}) => {
  return (
    <div>UserDetails : {params.userId}</div>
  )
}

export default UserDetails