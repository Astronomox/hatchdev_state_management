import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/user/userSlice'

const Login = () => {
  const [name, setName] = React.useState('')
  const [email, setEmial] = React.useState('')
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
    <div className="mt-6 max-w-md border border-black p-6 text-lg font-semibold uppercase tracking-wide">
      Welcome Back, Please Login to Continue

      <div>
        <form className="mt-4 space-y-4 text-sm font-normal" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className="block text-neutral-500" htmlFor="name">Full Name</label>
            <input className="w-full mt-1 px-3 py-2 border border-black focus:outline-none focus:bg-neutral-100" id="name" name="name" value={name} type="text" onChange={(e) => setName(e.target.value)} required placeholder="Enter your full name" />
          </div>
          <div>
            <label className="block text-neutral-500" htmlFor="email">Email</label>
            <input className="w-full mt-1 px-3 py-2 border border-black focus:outline-none focus:bg-neutral-100" id="email" name="email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" />
          </div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login