import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

let routes = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Select Locker',
        path: '/selectLocker'
    },
    {
        name: 'Select Order',
        path: '/selectOrder'
    },
    {
        name: 'Laundry Preferences',
        path: '/laundryPreference'
    },
    {
        name: 'Help Center',
        path: '/helpCenter'
    },
    {
        name: 'Settings',
        path: '/settings'
    },
    {
        name: 'Rewards',
        path: '/rewards'
    },
    {
        name: 'My Orders',
        path: '/myOrders'
    },
]

export default function Navbar() {
    const [toggled, setNavToggled] = useState(false);
    const [path, setPath] = useState('home');
    const AddPath = (name) => setPath(name);

    const handleNavToggle = () => setNavToggled(!toggled);

  return (
    <>
    <div className="w-full py-6 bg-teal-400 relative">
        <nav className="max-w-[1440px] mx-auto px-10 flex items-center justify-between">
            <div>
                {/* <p className="text-lg md:text-xl text-white">{path}</p> */}
            </div>
            <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2 md:gap-4">
                    {routes.map((r, i) => (
                        <Link onClick={() => AddPath(r.name)} key={i} to={r.path} className="text-white">{r?.name}</Link>
                    ))}
                </div>
            </div>
            <butto onClick={handleNavToggle} className="cursor-pointer py-2 px-2 flex items-center gap-2 md:gap-3 bg-teal-300 rounded-lg shadow-xl hover:shadow-2xl duration-300">
                <span className="text-teal-800 font-semibold">Menu</span>
                <FaBars className="text-lg md:text-xl text-white" />
            </butto>
        </nav>
    </div>
    {toggled && (
        <div className="aniamte animate__animated animate__slideInRight animate__fast fixed h-screen top-0 right-0 w-3/4 md:w-1/2 lg:w-1/4 bg-teal-500 py-12 shadow-2xl shadow-black/50 z-40">
            <button onClick={handleNavToggle} className="absolute top-5 left-5">
                <FaTimes className="text-xl md:text-2xl lg:text-3xl text-white"/>
            </button>
            <div className="w-full flex flex-col items-end space-y-6">
                {routes.map((r, i) => (
                    <Link key={i} to={r.path} className="text-lg md:text-xl lg:text-2xl text-right py-4 px-2 w-full font-semibold text-white border-b border-b-teal-400">{r.name}</Link>
                ))}
            </div>
        </div>
        )}
    </>
  )
}
