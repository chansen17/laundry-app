import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { TbTags } from 'react-icons/tb';

export default function Rewards() {
    const [userShareCode, setUserShareCode] = useState('ML0033517');

    
    const copyFunc = (val) => {
        toast("Share code copied ✅");
        navigator.clipboard.writeText(val);
    }

  return (
    <>
    <Navbar />
    <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
    <div className="h-full w-full py-12 md:py-24">
        <div className="max-w-[1440px] mx-auto px-5">
            <section className="pb-24 flex items-center justify-center">
                <div className="w-full text-center bg-gray-100 py-12 px-6 shadow-2xl">
                    <TbTags className="text-5xl md:text-6xl lg:text-8xl mx-auto mb-4 text-teal-500" />
                    <p className="text-lmd md:text-lg font-medium text-teal-500">Invite friends and get free credits</p>
                    <p className="max-w-xl mx-auto text-md md:text-lg py-3">Share your code to get your friends discount</p>
                    <Link to="/" className="inline-block py-3 px-2 rounded-md bg-amber-400 text-white font-bold uppercase hover:bg-amber-300 duration-300">place an order now</Link>
                </div>
            </section>
            <section className="py-4">
                <p className="font-medium text-gray-700">Share your customer code</p>
            </section>
            {/* SHARE */}
            <div className="relative">
                <div id="shareContainer" placeholder="Enter or scan barcode" className="py-4 px-2 bg-gray-50 w-full outline-0 border-2 border-teal-400">
                    <span id="shareCode" onClick={() => copyFunc(userShareCode)} className="text-teal-500 font-semibold">ML0033517</span>
                </div>
                <div id="shareBtn" className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer">
                    <span className="font-medium text-yellow-400 uppercase">Share</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
