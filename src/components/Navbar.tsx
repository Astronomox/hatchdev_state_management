import UserProfile from './UserProfile'

type NavbarProps = {
  menuOpen: boolean
  onMenuClick: () => void
}

const bar = 'block h-0.5 w-5 bg-black transition-all duration-300 group-hover:bg-white'

const Navbar = ({ menuOpen, onMenuClick }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-black/10 bg-white/80 px-4 backdrop-blur sm:px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="group grid h-10 w-10 place-items-center border border-black transition-colors duration-300 hover:bg-black"
        >
          <span className="flex flex-col gap-1.5">
            <span className={`${bar}`} />
            <span className={`${bar}`} />
            <span className={`${bar}`} />
          </span>
        </button>
        <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Dashboard</span>
      </div>
      <UserProfile />
    </header>
  )
}

export default Navbar
