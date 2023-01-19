import React from 'react'
import Navbar from '../components/Navbar'

import { BsUpcScan } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';

export default function Rewards() {
  return (
    <>
    <Navbar />
    <div className="py-24">
        <div className="max-w-[1440px] mx-auto px-5">
            <div className="relative">
                <input type="text" placeholder="Enter or scan barcode" className="py-4 px-2 bg-gray-100 w-full border-b-2 border-b-gray-400" />
                <BsUpcScan className="absolute right-5 top-1/2 -translate-y-1/2 text-xl" />
            </div>
            <section className="py-4">
                <p className="font-medium">All your items are descretley logged with a barcode</p>
            </section>
            <section className="py-24 flex items-center justify-center">
                <div className="text-center bg-gray-50 py-12 px-6">
                    <FaShoppingCart className="text-2xl md:text-3xl lg:text-4xl mx-auto mb-4 text-gray-500" />
                    <p className="text-lg md:text-xl font-semibold text-teal-500">It's a bit empty here...</p>
                    <p className="text-md md:text-lg py-3">You don't have items on your closet yet</p>
                    <button className="py-3 px-2 rounded-sm bg-amber-400 text-white font-bold uppercase">place an order now</button>
                </div>
            </section>
        </div>
    </div>
    </>
  )
}
