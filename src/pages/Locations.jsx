import React, { useEffect, useState, useRef } from 'react'

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import { lockers } from '../data';

// dummy account
mapboxgl.accessToken = 'pk.eyJ1IjoiaXRzYm9iYnl0aGV0ZXN0ZXIiLCJhIjoiY2xkM2hhZzQyMGlreDNxcnlsdWw0cHZnYyJ9.9qGRwrXrtFw_2DIuql5FNA';

export default function Locations() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-79.4163000);
    const [lat, setLat] = useState(43.7001100);
    const [zoom, setZoom] = useState(9);

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
      <div className="relative h-screen">
        <div className="w-full opacity-80 hover:opacity-100 focus:opacity-100 active:focus-100 md:max-w-2xl left-1/2 -translate-x-1/2 px-5 py-4 bg-native-blue z-20 absolute top-0 md:top-12 shadow-2xl rounded-md">
          <input type="text" className="py-2 px-3 w-full" placeholder="Search Locations 🔍" />
        </div>
        {/* map */}
        <div ref={mapContainer} className="h-full w-full"></div>
      </div>
    </>
  )
}
