import React from 'react'
import Navbar from '../components/Navbar'
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';

let lockers = [
    {
        location: '301'
    },
    {
        location: '302',
    },
    {
        location: '303'
    },
    {
        location: '304',
    },
    {
        location: '305'
    },
    {
        location: '306',
    },
    {
        location: '307'
    },
    {
        location: '308',
    }
]

export default function SelectLocker() {
  return (
    <>
        <Navbar />
        <div className="h-full w-full py-24">
            <div className="max-w-[1440px] mx-auto px-5">
                <p className="py-4 text-left text-teal-500 text-lg md:text-xl">Available lockers at</p>
                <div className="w-full rounded-xl h-72 md:h-96 bg-zinc-800 flex">
                    <div className="flex flex-col justify-between w-1/2 py-6 px-5">   
                        <p className="text-lg md:text-xl text-white">63 Colgate Ave.</p>
                        <p className="text-md md:text-lg text-gray-400">Toronto, ON M4M3N6</p>
                    </div>
                    <div className="w-1/2 p-6">
                        <img className="h-full w-full object-cover" src="https://images.pexels.com/photos/4338273/pexels-photo-4338273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/> 
                    </div>
                </div>
                <section>
                    <p className="py-4">Pick one of the available lockers at the follow locations</p>
                    <ul className="">
                        {lockers?.map((l, i) => (
                            <li key={i} className="my-10">
                                <Link className="flex items-center gap-4" to="/selectOrder" state={l.location}>
                                    <span className="h-10 w-10 rounded-full bg-gray-200 grid place-items-center">
                                        <HiOutlineLocationMarker />
                                    </span>
                                    <span>Location {l.location}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    </>
  )
}
