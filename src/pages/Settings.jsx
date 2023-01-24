import React from 'react'
import Navbar from '../components/Navbar'

export default function Settings() {
  return (
    <>
    <Navbar />
    <div className="w-full h-full py-12 md:py-24">
        <div className="max-w-[1440px] mx-auto px-5">
            <p className="py-4 text-left text-lg md:text-xl text-native-blue">General</p>
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
            <section className="py-4 flex items-center gap-4 md:gap-6 text-native-blue">
                <div>
                    <p className="text-md md:text-lg font-medium">Enable/Disable Biometric Login</p>
                </div>
                <input type="checkbox" className="h-4 w-4 md:h-5 md:w-5" />
            </section>
            {/* NOTIFICATIONS */}
            <section className="py-4 flex items-center gap-4 md:gap-6 text-native-blue">
                <div>
                    <p className="text-md md:text-lg font-medium">Enable Notifications?</p>
                </div>
                <input id="enableNotifications" type="checkbox" className="h-4 w-4 md:h-5 md:w-5" />
            </section>
            <section className="py-4 border-t-2 border-t-gray-100">
                <ul className="w-full space-y-6 text-native-blue text-md md:text-lg font-medium"> 
                    <li className="">Change Password</li>
                    <li className="">Communication Settings</li>
                    <li className="">Location and Payment</li>
                    <ul className="list-disc list-inside text-md md:text-lg font-light">
                        <li>Address</li>
                        <li>Payment</li>
                    </ul>
                </ul>
            </section>
            <section className="mt-10 flex items-center">
                <button className="w-1/2 md:w-1/4 mx-auto py-3 px-2 font-semibold bg-native-blue text-white shadow-lgduration-300">Save Preferences</button>
            </section>  
        </div>
    </div>
    </>
  )
}
