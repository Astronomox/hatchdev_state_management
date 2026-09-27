// import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import UserPage from './components/UserPage'

const App = () => {
  return (
    <div className="grid grid-cols-5 min-h-screen bg-white text-blak">
      <Sidebar />
      <Navbar />
      <div className="col-span-3 p-4">
        <UserPage />
        <Login /> 
      </div>
    </div>
  )
}

export default App