import React from 'react'
import Navbar from '../components/Navbar'

export default function Settings() {
  return (
    <>
    <Navbar />
    <div className="w-full py-24">
        <div className="max-w-[1440px] mx-auto px-5">
            <p className="py-4 text-left text-lg md:text-xl">General</p>
            <section className="py-6 space-y-10">
                <div className="flex items-center gap-4">
                    <input className="w-full py-2 px-1 border-b-2 border-b-gray-500" type="text" placeholder="First Name" />
                    <input className="w-full py-2 px-1 border-b-2 border-b-gray-500" type="text" placeholder="Last Name" />
                </div>
                <div>
                    <input className="w-full py-2 px-1 border-b-2 border-b-gray-500" type="email" placeholder="Email" />
                </div>
                <div>
                    <input className="w-full py-2 px-1 border-b-2 border-b-gray-500" type="number" placeholder="Phone Number" />
                </div>
            </section>
            <section className="py-4 flex items-center gap-4 md:gap-6">
                <div>
                    <p className="text-lg md:text-xl font-semibold">Enable/Disable Biometric Login</p>
                </div>
                <input type="checkbox" className="h-4 w-4 md:h-5 md:w-5" />
            </section>
            <section className="py-4 border-t-2 border-t-gray-100">
                <ul className="w-full space-y-6"> 
                    <li className="font-semibold text-lg md:text-xl">Change Password</li>
                    <li className="font-semibold text-lg md:text-xl">Communication Settings</li>
                    <li className="font-semibold text-lg md:text-xl">Location and Payment</li>
                    <ul className="list-disc list-inside text-md md:text-lg font-light">
                        <li>Address</li>
                        <li>Payment</li>
                    </ul>
                </ul>
                <ul className="w-full mt-4 border-t-2 border-t-gray-100">
                    <li className="flex items-center gap-4 md:gap-6 mt-4">
                        <p className="font-semibold text-lg md:text-xl">Enable Notifications</p>
                        <button className="py-2 px-4 rounde-sm shadow-lg border-2 bg-gray-100 font-normal hover:bg-gray-200 duration-300">Enable</button>
                    </li>
                </ul>
            </section>
            <section className="mt-10 flex items-center">
                <button className="w-1/2 md:w-1/4 mx-auto py-3 px-2 font-semibold bg-gray-100 border-2 hover:bg-gray-200 duration-300">Save Preferences</button>
            </section>  
        </div>
    </div>
    </>
  )
}
