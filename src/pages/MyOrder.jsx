import React, { useState } from 'react'
import { FaCheck, FaShirtsinbulk, FaTshirt } from 'react-icons/fa';
import { RiTShirtAirLine } from 'react-icons/ri';
import { TbHanger } from 'react-icons/tb';
import { RiShirtLine } from 'react-icons/ri';
import Navbar from '../components/Navbar'

export default function MyOrder() {
 
    
    let orders = [
        {
            curr: [
                {   
                    complete: false,
                    status: 'cleaning',
                    type: 'locker',
                    location: '63 colgate ave.',
                    date: new Date().toDateString()
                },
                {   
                    complete: false,
                    status: 'cleaning',
                    type: 'locker',
                    location: '63 colgate ave.',
                    date: new Date().toDateString()
                },
                {   
                    complete: false,
                    status: 'cleaning',
                    type: 'locker',
                    location: '63 colgate ave.',
                    date: new Date().toDateString()
                },
            ]
        },
        {
            past: [
                {
                    complete: true,
                    status: 'order completed',
                    type: 'kiosk',
                    location: '63 colgate ave',
                    date: new Date().toDateString()
                },
                {
                    complete: true,
                    status: 'order completed',
                    type: 'kiosk',
                    location: '63 colgate ave',
                    date: new Date().toDateString()
                },
                {
                    complete: true,
                    status: 'order completed',
                    type: 'kiosk',
                    location: '63 colgate ave',
                    date: new Date().toDateString()
                },
                {
                    complete: true,
                    status: 'order completed',
                    type: 'kiosk',
                    location: '63 colgate ave',
                    date: new Date().toDateString()
                },
                {
                    complete: true,
                    status: 'order completed',
                    type: 'kiosk',
                    location: '63 colgate ave',
                    date: new Date().toDateString()
                },
            ]
        }
    ]
    
    const [selected, setSelected] = useState("current_orders");
    console.log('current orders:' , orders[0].curr)
    console.log('past orders:' , orders[1].past)
  return (
    <>
    <Navbar />
    <div className="">
        <div className="w-full flex items-center justify-center bg-teal-400">
            <button value="current_orders" onClick={(e) => setSelected(e.target.value)} className={selected === 'current_orders' ? 'text-sm md:text-md w-full py-4 uppercase text-white bg-teal-500 hover:bg-teal-500 border-b-4 border-b-yellow-400 duration-300' : 'text-sm md:text-md w-full py-4 uppercase text-white hover:bg-teal-500 duration-300 border-b-4 border-b-teal-400'}>current orders</button>
            <button value="past_orders" onClick={(e) => setSelected(e.target.value)}className={selected === 'past_orders' ? 'text-sm md:text-md w-full py-4 uppercase text-white bg-teal-500 hover:bg-teal-500 duration-300 border-b-4 border-b-yellow-400' : 'text-sm md:text-md w-full py-4 uppercase text-white hover:bg-teal-500 duration-300 border-b-4 border-b-teal-400'}>past orders</button>
        </div>
        <div className="max-w-[1440px] mx-auto px-5 py-24 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* CURRENT_ORDERS UI */}
            {selected === "current_orders" && orders[0].curr?.map((order,i) => (
                <div key={i} className="w-full h-52 py-6 px-6 md:px-10 flex items-center justify-between gap-6 shadow-2xl shadow-teal-700/20 rounded-lg bg-gray-50">
                    <div className="flex items-center gap-4">
                        <RiTShirtAirLine className="text-teal-500 text-4xl md:text-5xl lg:text-6xl"/>
                        <div className=""> 
                            <h3 className="text-md md:text-lg font-semibold text-cyan-500 uppercase">{order.status}</h3>
                            <ul className="text-md md:text-lg capitalize text-gray-700">
                                <li className="font-medium">{order.type}</li>
                                <li className="font-medium">{order.location}</li>
                                <li className="text-sm md:text-md pt-3 font-light">{order.date}</li>
                            </ul>
                        </div>
                    </div>
                        <div className="h-10 w-10 bg-cyan-500 rounded-full shadow-lg grid place-items-center">
                            <TbHanger className="text-2xl md:text-3xl text-gray-100" />
                        </div>
                </div>
            ))}
            {/* PAST_ORDERS UI */}
            {selected === "past_orders" && orders[1].past?.map((order,i) => (
                <div key={i} className="w-full h-52 py-6 px-6 md:px-10 flex items-center justify-between gap-6 shadow-2xl shadow-teal-700/20 rounded-lg bg-gray-50">
                    <div className="flex items-center gap-4">
                        <RiShirtLine className="text-teal-500 text-4xl md:text-5xl lg:text-6xl"/>
                        <div className=""> 
                            <h3 className="text-md md:text-lg font-semibold text-cyan-500 uppercase">{order.status}</h3>
                            <ul className="text-md md:text-lg capitalize text-gray-700">
                                <li className="font-medium">{order.type}</li>
                                <li className="font-medium">{order.location}</li>
                                <li className="text-sm md:text-md pt-3 font-light">{order.date}</li>
                            </ul>
                        </div>
                    </div>
                        <div className="h-8 w-8 lg:h-10 lg:w-10 bg-green-400 rounded-full shadow-lg grid place-items-center">
                            <FaCheck className="text-xl md:text-2xl text-gray-100" />
                        </div>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}
