import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

let options = [
    {
        option: 'Wash and Fold - Seperate from dry clean (48hrs -> Mon - Fri)',
    },
    {
        option: 'Dry Clean - separate from wash and fold (3 days -> Mon - Fri)',
    },
    {
        option: 'Alterations and Repair (specify in notes, 5 - 10 days)',
    },
    {
        option: 'Shoe Shine (7 days -> Mon - Fri)',
    },
    {
        option: 'Shirts, Laundered, Pressed and Hung (3 days -> Mon - Fri)',
    },
    {
        option: 'Shoe Repair (Specify in notes, 10 days))',
    }
]

export default function SelectOrder() {

    const {state} = useLocation();
    console.log(state);


  return (
   <>
   <Navbar />
    <div className="w-full py-24">
        <div className="max-w-[1440px] mx-auto px-5">
            <p className="py-4 text-left text-teal-500 text-lg md:text-xl">Available lockers at</p>
            <div className="w-full rounded-xl h-72 md:h-96 bg-zinc-800 flex">
                <div className="flex flex-col justify-between w-1/2 py-6 px-5">   
                   <div>
                        <p className="text-lg md:text-xl text-white">{state ? `# Locker ${state}` : "No locker selected. Please see:"}</p>
                        {!state && <Link to="/selectLocker" className="text-sm md:text-md text-gray-400 underline">See Lockers</Link>}
                        <p className="text-md md:text-lg text-gray-400">63 Colgate Ave.</p>
                   </div>
                    <p className="text-md md:text-lg text-gray-400">Toronto, ON M4M3N6</p>
                </div>
                <div className="w-1/2 p-6">
                    <img className="h-full w-full object-cover" src="https://images.pexels.com/photos/4338273/pexels-photo-4338273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/> 
                </div>
            </div>

            <section className="py-6">
                <p className="text-lg md:text-xl font-bold">What's in your order?</p>
                <ul className="py-4">
                    {options.map((o, i) => (
                        <li key={i} className="my-6 py-3 w-full flex items-center justify-between border-b">
                            {o.option}
                            <input type="checkbox" value={o.selected} checked={o.selected} />
                        </li>
                    ))}
                </ul>
                <div className="w-full flex items-center gap-2 border-b pb-4">
                    <input type="text" placeholder="Please enter your promo code" className="w-3/4 py-3 px-2 bg-gray-50 border border-gray-300 outline-0" />
                    <button className="w-1/4 py-3 px-2 bg-gray-100 border border-gray-300 hover:bg-gray-200 duration-200 capitalize">Apply</button>
                </div>
                <div className="w-full mt-4 flex items-center gap-2 border-b pb-4">
                    <input type="textarea" placeholder="Please enter any notes you may have for us .." className="w-full py-3 px-2 bg-gray-50 border border-gray-300 outline-0" />
                </div>
            </section>
            <section className="py-10 flex items-center">
                <button className="w-1/2 md:w-1/4 mx-auto py-3 px-2 border bg-gray-50 font-semibold hover:bg-gray-200 duration-200">Place Order</button>
            </section>
        </div>
    </div>
   </>
  )
}
