// import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user)
  return (
    <div className="p-4 flex flex-col items-center gap-2">
      {user.name && user.email ? (
        <>
        
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        </>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  )
}

export default UserProfile