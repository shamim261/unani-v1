import { AddRounded, RemoveRounded } from '@mui/icons-material';
import React, { useState } from 'react';

export default function Accordion({ title, icon, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='bg-white p-2 my-2'>
       <div className="mb-4">
            <div className="flex">
                {/* Accordion header */}
                <div className='text-customBlack'>{icon}</div>

                {/* <WalletSharp
                    fontSize="small"
                    className={`mt-2 text-slate-400 ${isOpen ? 'text-black' : 'text-slate-400'}`}
                /> */}
                <button
                    className="w-full flex items-center justify-between p-1  rounded-md focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span
                        className='text-xl font-semibold text-customBlack '
                    >
                        {title}
                    </span>

                    {isOpen ? (
                        <RemoveRounded fontSize="small" className="text-slate-500" />
                    ) : (
                        <AddRounded fontSize="small" className="text-slate-500" />
                    )}
                </button>
            </div>
            {/* Accordion content */}
            <div
                className={`pl-2 transition-all overflow-hidden ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                }  rounded-md `}
            >
          {children}
          
            </div>
            {/* <div className={`p-2 ${isOpen ? 'block' : 'hidden'}  rounded-md`}>
                <ul className="pl-4">
                    <li>Product List</li>
                    <li>Product</li>
                    <li>Category</li>
                    <li>Shopping Cart</li>
                    <li>Checkout</li>
                </ul>
            </div> */}
        </div>
    </div>
  )
}
