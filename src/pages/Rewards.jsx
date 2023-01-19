import React from 'react'
import Navbar from '../components/Navbar'

import { AiOutlineTags } from 'react-icons/ai';

export default function Rewards() {
  return (
    <>
    <Navbar />
    <div className="py-24">
        <div className="max-w-[1440px] mx-auto px-5">
            <section className="py-24 flex items-center justify-center">
                <div className="text-center bg-gray-50 py-12 px-6">
                    <AiOutlineTags className="text-5xl md:text-6xl lg:text-8xl mx-auto mb-4 text-teal-500" />
                    <p className="text-lmd md:text-lg font-medium text-teal-500">Invite friends and get free credits</p>
                    <p className="text-md md:text-lg py-3">Share your code to give your friends $30.00 off their first three orders and get $10.00 credit for every friend who tries Laundry Concierge Inc..</p>
                    <button className="py-3 px-2 rounded-md bg-amber-400 text-white font-bold uppercase hover:bg-amber-300 duration-300">place an order now</button>
                </div>
            </section>
            <section className="py-4">
                <p className="font-medium text-gray-700">Share your customer code</p>
            </section>
            {/* SHARE */}
            <div className="relative">
                <div id="shareContainer" placeholder="Enter or scan barcode" className="py-4 px-2 bg-gray-50 w-full outline-0 border-2 border-teal-400">
                    <span className="text-teal-500 font-semibold">CR12085588</span>
                </div>
                <div id="shareIcon" onClick={() => alert('shared')} className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer">
                    <span className="font-medium text-yellow-400 uppercase">Share</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
