import { useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from './redux/store'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import UserPage from './components/UserPage'

const App = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)
  const [menuOpen, setMenuOpen] = useState(() => window.innerWidth >= 768)

  return (
    <div className="min-h-screen bg-neutral-100 text-black">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className={`transition-[padding] duration-300 ${menuOpen ? 'md:pl-72' : ''}`}>
        <Navbar menuOpen={menuOpen} onMenuClick={() => setMenuOpen(!menuOpen)} />
        <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
          {isLoggedIn ? <UserPage /> : <Login />}
        </main>
      </div>
    </div>
  )
}

export default App
