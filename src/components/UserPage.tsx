// import React from 'react'

const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)

const UserPage = () => {
  return (
    <div>
      <div className="text-2xl font-bold text-black uppercase tracking-wide">UserPage</div>
      <ul className="mt-4 max-w-md border border-black divide-y divide-black">
        {items.map((item) => (
          <li key={item} className="px-4 py-2">{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserPage