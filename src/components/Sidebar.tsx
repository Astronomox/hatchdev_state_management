// import React from 'react'
import UserProfile from './UserProfile'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/user/userSlice'

const Sidebar = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <div className="h-screen bg-black text-white p-4 col-span-2 row-span-2">
      <UserProfile />
      <button onClick={handleLogout} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md">
        Logout
      </button>
    </div>
  )
}

export default Sidebar