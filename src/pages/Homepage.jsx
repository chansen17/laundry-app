import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../components/Navbar';
import HomePickupBlock from '../components/HomePickupBlock';
import HomeGridBlocks from '../components/HomeGridBlocks';

export default function Homepage() {


  return (
    <>
    <Navbar />
    <div className="h-full w-full py-12 md:py-24">
        <HomePickupBlock />
        <HomeGridBlocks />
    </div>
    </>
  )
}
