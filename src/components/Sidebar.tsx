import UserProfile from './UserProfile'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/user/userSlice'
import type { RootState } from '../redux/store'

type SidebarProps = {
  open: boolean
  onClose: () => void
}

const links = ['Dashboard', 'Users', 'Settings']

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <>
      {/* backdrop on small screens */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 md:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-black p-6 text-white transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter">HATCHDEV</span>
          <button onClick={onClose} aria-label="Close menu" className="text-2xl leading-none text-white/60 hover:text-white md:hidden">
            &times;
          </button>
        </div>

        <nav className="mt-12 flex flex-col gap-1">
          {links.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`px-4 py-3 text-xs uppercase tracking-[0.25em] transition-colors duration-200 ${i === 0 ? 'bg-white text-black' : 'text-white/60 hover:bg-white/10 hover:text-white'}`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="mt-auto border-t border-white/15 pt-6">
          <UserProfile dark />
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="mt-6 w-full border border-white/40 py-3 text-xs font-medium uppercase tracking-[0.3em] transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              Logout
            </button>
          )}
        </div>
      </aside>
    </>
  )
}

export default Sidebar
