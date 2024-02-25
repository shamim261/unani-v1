import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonRounded({to, children}) {
  return (
    <div>
      <Link to={to} className="">
            <button className="text-black bg-transparent border-2 border-[#D2D2D2] rounded-full px-10 py-4  font-semibold">
                {children}
            </button>
        </Link>
    </div>
  )
}
