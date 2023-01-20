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
      <div className="">
        
      </div>
    </>
  )
}
