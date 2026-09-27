// import React from 'react'
import { useState } from 'react'

const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)
const PER_PAGE = 5

const UserPage = () => {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(items.length / PER_PAGE)
  const visible = items.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <div>
      <div className="text-2xl font-bold text-black uppercase tracking-wide">UserPage</div>
      <ul className="mt-4 max-w-md border border-black divide-y divide-black">
        {visible.map((item) => (
          <li key={item} className="px-4 py-2">{item}</li>
        ))}
      </ul>
      <div className="mt-4 flex gap-2 items-center">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="px-3 py-1 border border-black disabled:opacity-30">Prev</button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <button key={n} onClick={() => setPage(n)} className="px-3 py-1 border border-black">{n}</button>
        ))}
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages} className="px-3 py-1 border border-black disabled:opacity-30">Next</button>
      </div>
    </div>
  )
}

export default UserPage