import React from 'react'
import Navbar from '../components/Navbar'

import { BsUpcScan } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Closet() {
  return (
    <>
    <Navbar />
    <div className="h-full w-full py-12 md:py-24">
        <div className="max-w-[1440px] mx-auto px-5">
            <div className="relative">
                <div id="scanContainer">
                    <input id="scanInput" type="text" placeholder="Enter or scan barcode" className="py-4 px-2 bg-gray-100 w-full border-b-2 border-b-gray-400" />
                    <div id="scanBtn" className="absolute right-5 top-1/2 -translate-y-1/2">
                        <BsUpcScan className="text-xl" />
                    </div>
                </div>
            </div>
            <section className="py-4">
                <p className="font-medium">All your items are descretley logged with a barcode</p>
            </section>
            <section className="py-24 flex items-center justify-center bg-gray-100 shadow-2xl">
                <div className="text-center py-12 px-6">
                    <FaShoppingCart className="text-2xl md:text-3xl lg:text-4xl mx-auto mb-4 text-gray-500" />
                    <p className="text-lg md:text-xl font-semibold text-teal-500">It's a bit empty here...</p>
                    <p className="text-md md:text-lg py-3">You don't have items on your closet yet</p>
                    <Link to="/" className="inline-block py-3 px-2 rounded-sm bg-amber-400 hover:bg-amber-300 text-white font-bold uppercase">place an order now</Link>
                </div>
            </section>
        </div>
    </div>
    </>
  )
}
