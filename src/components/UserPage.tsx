import { useState } from 'react'

const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)
const PER_PAGE = 5

const pagerButton = 'h-10 border border-black transition-colors duration-200'

const UserPage = () => {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(items.length / PER_PAGE)
  const start = (page - 1) * PER_PAGE
  const visible = items.slice(start, start + PER_PAGE)

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Overview</p>
          <h1 className="mt-2 text-4xl font-bold uppercase tracking-tighter sm:text-5xl">UserPage</h1>
        </div>
        <p className="shrink-0 text-xs uppercase tracking-widest text-neutral-500">
          Page {page} / {totalPages}
        </p>
      </div>

      <ul className="mt-8 divide-y divide-black border border-black bg-white shadow-[8px_8px_0_0_#000]">
        {visible.map((item, i) => (
          <li
            key={item}
            className="group flex items-center justify-between px-6 py-4 transition-colors duration-200 hover:bg-black hover:text-white"
          >
            <span className="flex items-center gap-5">
              <span className="text-xs tabular-nums text-neutral-400 group-hover:text-white/50">
                {String(start + i + 1).padStart(2, '0')}
              </span>
              {item}
            </span>
            <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">&rarr;</span>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex items-center justify-between gap-4">
        <p className="hidden text-xs text-neutral-500 sm:block">
          Showing {start + 1}&ndash;{start + visble.length} of {items.length}
        </p>
        <div className="flex gap-2 text-xs uppercase tracking-widest">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className={`${pagerButton} px-4 hover:bg-black hover:text-white disabled:pointer-events-none disabled:opacity-20`}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`${pagerButton} w-10 ${n === page ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className={`${pagerButton} px-4 hover:bg-black hover:text-white disabled:pointer-events-none disabled:opacity-20`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserPage
