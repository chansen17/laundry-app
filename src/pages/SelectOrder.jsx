import React, { useEffect, useState, useRef } from 'react'
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { options } from '../data';

// dummy account
mapboxgl.accessToken = 'pk.eyJ1IjoiaXRzYm9iYnl0aGV0ZXN0ZXIiLCJhIjoiY2xkM2hhZzQyMGlreDNxcnlsdWw0cHZnYyJ9.9qGRwrXrtFw_2DIuql5FNA';

export default function SelectOrder() {

    const {state} = useLocation();

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-79.4163000);
    const [lat, setLat] = useState(43.7001100);
    const [zoom, setZoom] = useState(5);

    useEffect(() => {
        if (map.current) return; // initialize map only once
            map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom,
            });
        });

  return (
   <>
   <Navbar />
    <div className="w-full py-24">
        <div className="max-w-[1440px] mx-auto px-5">
            <p className="py-4 text-left text-teal-500 text-lg md:text-xl">Available lockers at</p>
            <div className="w-full rounded-xl h-72 md:h-96 bg-zinc-800 flex flex-col md:flex-row shadow-2xl">
                <div className="flex flex-col justify-between w-1/2 py-6 px-5">   
                   <div>
                        <p className="text-lg md:text-xl text-white">{state ? `# Locker ${state}` : "No locker selected. Please see:"}</p>
                        {!state && <Link to="/selectLocker" className="text-sm md:text-md text-gray-400 underline">See Lockers</Link>}
                        <p className="text-md md:text-lg text-gray-400">63 Colgate Ave.</p>
                   </div>
                    <p className="text-md md:text-lg text-gray-400">Toronto, ON M4M3N6</p>
                </div>
                <div ref={mapContainer} className="w-full md:w-1/2 p-6 h-72 overflow-hidden rounded-r-lg" style={{ height: '100%', width: '100%'}}/> 
            </div>

            <section className="py-12">
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
