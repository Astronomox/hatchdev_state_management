import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/user/userSlice'

const Login = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name && email) {
      // Perform login logic here
      console.log('Logging in with:', { name, email })
      dispatch(setUser({ name, email }))
    }
  }


  return (
    <div className="mx-auto max-w-md bg-white border border-black p-8 sm:p-10 shadow-[8px_8px_0_0_#000]">
      <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Welcome back</p>
      <h1 className="mt-2 text-3xl font-bold uppercase tracking-tighter">Please login to continue</h1>

      <div>
        <form className="mt-10 space-y-8 text-sm" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className="block text-[10px] uppercase tracking-[0.3em] text-neutral-500" htmlFor="name">Full Name</label>
            <input className="w-full mt-2 py-2 bg-transparent border-0 border-b border-black focus:outline-none focus:border-b-2 placeholder:text-neutral-400" id="name" name="name" value={name} type="text" onChange={(e) => setName(e.target.value)} required placeholder="Enter your full name" />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-[0.3em] text-neutral-500" htmlFor="email">Email</label>
            <input className="w-full mt-2 py-2 bg-transparent border-0 border-b border-black focus:outline-none focus:border-b-2 placeholder:text-neutral-400" id="email" name="email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" />
          </div>
          <button className="w-full bg-black text-white border border-black hover:bg-white hover:text-black text-xs font-medium uppercase tracking-[0.3em] py-4 transition-colors duration-300" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login