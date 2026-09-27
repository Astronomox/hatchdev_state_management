import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

type UserProfileProps = {
  dark?: boolean
}

const UserProfile = ({ dark = false }: UserProfileProps) => {
  const user = useSelector((state: RootState) => state.user)
  const initials = user.name
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  const muted = dark ? 'text-white/50' : 'text-neutral-500'

  return (
    <div className="flex min-w-0 items-center gap-3">
      <div
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold ${dark ? 'bg-white text-black' : 'bg-black text-white'}`}
      >
        {initials || '?'}
      </div>
      <div className={`min-w-0 ${dark ? '' : 'hidden sm:block'}`}>
        {user.name && user.email ? (
          <>
            <p className="truncate text-sm font-medium">{user.name}</p>
            <p className={`truncate text-xs ${muted}`}>{user.email}</p>
          </>
        ) : (
          <p className={`text-sm ${muted}`}>No user logged in</p>
        )}
      </div>
    </div>
  )
}

export default UserProfile
