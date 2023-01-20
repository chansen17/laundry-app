import React from 'react'
import Navbar from '../components/Navbar'
import { FaMailBulk } from 'react-icons/fa';

export default function HelpCenter() {
  return (
    <>
    <Navbar />
    <div className="py-24">
        <div className="max-w-[1440px] mx-auto px-5 py-4">
            <p className="text-xl md:text-2xl font-semibold text-teal-500">We are here to help.</p>
            <p>If you have any additional questions or concerns feel free to contact the support team.</p>
            <div className="grid grid-cols-2 items-end gap-8 md:gap-10 py-24">
              <div>
                <div className="bg-yellow-400 inline-block rounded-2xl p-3 shadow-xl">
                  <FaMailBulk className="text-2xl md:text-3xl text-white" />
                </div>
                <p className="pt-3 font-medium">Send an email to <br/> <span className="font-light">info@laundry-concierge.com</span></p>
              </div>
              <div>
                <p className="pt-3 font-medium">Cal support at <br/> <span className="font-light">+123456</span></p>
              </div>  
            </div>
        </div>
    </div>
    </>
  )
}
