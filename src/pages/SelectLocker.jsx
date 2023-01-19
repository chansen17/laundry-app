import React, { useEffect, useState, useRef } from 'react'

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import Navbar from '../components/Navbar'
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import { lockers } from '../data';

// dummy account
mapboxgl.accessToken = 'pk.eyJ1IjoiaXRzYm9iYnl0aGV0ZXN0ZXIiLCJhIjoiY2xkM2hhZzQyMGlreDNxcnlsdWw0cHZnYyJ9.9qGRwrXrtFw_2DIuql5FNA';

export default function SelectLocker() {

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
            <div className="max-w-[1440px] mx-auto px-5">
                <p className="py-4 text-left text-teal-500 text-lg md:text-xl lg:text-2xl font-semibold">Available lockers at</p>
                <div className="w-full rounded-xl h-72 md:h-96 bg-zinc-800 flex flex-col md:flex-row shadow-2xl">
                    <div className="flex flex-col justify-between w-1/2 py-6 px-5">   
                        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">63 Colgate Ave.</p>
                        <p className="text-md md:text-lg text-gray-400">Toronto, ON M4M3N6</p>
                    </div>
                    <div ref={mapContainer} className="w-full md:w-1/2 p-6 h-72 overflow-hidden rounded-r-lg" style={{ height: '100%', width: '100%'}}/>   
                </div>
                <section>
                    <p className="py-12 text-lg md:text-xl font-bold">Pick one of the available lockers at the follow locations</p>
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {lockers?.map((l, i) => (
                            <li key={i} className="my-10">
                                <Link className="flex items-center gap-4" to="/selectOrder" state={l.location}>
                                    <div className="h-10 w-10 rounded-full bg-teal-400 grid place-items-center shadow-lg shadow-teal-500/20">
                                        <HiOutlineLocationMarker className="text-white text-xl md:text-2xl"/>
                                    </div>
                                    <p className="text-md md:text-lg text-gray-800"><span className="font-light">Location</span> <span className="font-medium">{l.location}</span></p>
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
