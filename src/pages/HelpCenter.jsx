import React from 'react'
import Navbar from '../components/Navbar'
import { TbMail, TbPhone } from 'react-icons/tb';

export default function HelpCenter() {
  return (
    <>
    <Navbar />
    <div className="h-full w-full py-12 md:py-24">
        <div className="max-w-[1440px] mx-auto px-5 py-4">
            <p className="text-xl md:text-2xl font-semibold text-native-blue">We are here to help.</p>
            <p className="border-b-2 border-b-gray-100 pb-4">If you have any additional questions or concerns feel free to contact the support team.</p>
            <div className="grid grid-cols-2 items-end gap-8 md:gap-10 py-24">
              <div>
                <div className="bg-yellow-400 inline-block rounded-2xl p-3 shadow-xl">
                  <TbMail className="text-2xl md:text-3xl text-white" />
                </div>
                <p className="pt-3 font-bold">Send an email to <br/> <span className="font-light">info@mobile-laundry.com</span></p>
              </div>
              <div>
              <div className="bg-native-blue inline-block rounded-2xl p-3 shadow-xl">
                <TbPhone className="text-2xl md:text-3xl text-white" />
                </div>
                <p className="pt-3 font-bold">Call support at <br/> <span className="font-light">+123456</span></p>
              </div>  
            </div>
        </div>
    </div>
    </>
  )
}
