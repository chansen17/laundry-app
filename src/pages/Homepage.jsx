import React, { useEffect, useState, useRef } from 'react'

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { BsTruck } from 'react-icons/bs';
import { TbMapSearch } from 'react-icons/tb';
import { GrServers } from 'react-icons/gr';
import Navbar from '../components/Navbar';

// dummy account
mapboxgl.accessToken = 'pk.eyJ1IjoiaXRzYm9iYnl0aGV0ZXN0ZXIiLCJhIjoiY2xkM2hhZzQyMGlreDNxcnlsdWw0cHZnYyJ9.9qGRwrXrtFw_2DIuql5FNA';

export default function Homepage() {
    
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
    <div className="h-full w-full py-24">
        <section className="max-w-[1440px] mx-auto text-center space-y-4 px-5">
            <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-teal-400">Pick up your order at home?</p>
            <div className="w-full h-72 bg-teal-500 rounded-xl relative flex justify-end flex-col items-start shadow-2xl shadow-teal-500/50">
                <div className="absolute top-32 left-1/2 -translate-x-1/2">
                    <BsTruck className="text-5xl md:text-6xl lg:text-7xl text-green-100" />
                </div>  
                <div className="w-full p-3 text-left text-white text-md md:text-lg lg:text-xl border-t-2 border-t-green-100">
                    <p>Home pickup available</p>
                    <p>Press for options</p>
                </div>
            </div>
        </section>
        <section className="w-full py-24">
            <div className="font-bold text-center text-teal-400 py-6">
                <p className="text-2xl md:text-3xl lg:text-4xl">Another Location Type?</p>
                <p className="text-md md:text-lg">Check these out</p>
            </div>
            <div className="max-w-[1440px] mx-auto px-5 grid grid-cols-2 gap-4">
                <div className="relative rounded-xl flex flex-col justify-end items-start bg-gray-100 h-72 shadow-2xl overflow-hidden">
                    <div ref={mapContainer} className="w-full h-full overflow-hidden rounded-t-lg absolute top-0 left-0" style={{ height: '100%', width: '100%'}}/> 
                    <div className="absolute top-28 left-1/2 -translate-x-1/2">
                        <TbMapSearch className="text-4xl md:text-5xl lg:text-6xl text-white" />
                    </div>
                    <div className="p-3">
                        <p className="font-semibold text-lg md:text-xl">Find location on Map</p>
                        <p className="font-light text-md md:text-lg">7 Locations</p>
                    </div>
                </div>
                <div className="relative rounded-xl flex flex-col justify-end items-start bg-amber-300 h-72 shadow-2xl shadow-yellow-500/20">
                    <div className="absolute top-28 left-1/2 -translate-x-1/2">
                        <TbMapSearch className="text-4xl md:text-5xl lg:text-6xl text-white" />
                    </div>
                    <div className="p-3 text-white">
                        <p className="font-semibold text-lg md:text-xl">Enter Your Locker Number</p>
                        <p className="font-light text-md md:text-lg">Find yours</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}
