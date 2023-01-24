import React from 'react';
import { TbMapSearch } from 'react-icons/tb';
import { GiLockers } from 'react-icons/gi';

import MapPreview from '../assets/nyc-preview.jpg';
import { Link } from 'react-router-dom';

const HomeGridBlocks = () => {
    return (
        <section className="w-full py-24">
            <div className="font-bold text-center text-native-blue py-6">
                <p className="text-2xl md:text-3xl lg:text-4xl">Another Location Type?</p>
                <p className="text-md md:text-lg">Check these out</p>
            </div>
            <div className="max-w-[1440px] mx-auto px-5 grid grid-cols-2 gap-4">
                <Link to="/locations">
                    <div className="relative rounded-xl flex flex-col justify-end items-start bg-gradient-to-t from-native-blue h-72 shadow-2xl overflow-hidden">
                        <img src={MapPreview} className="absolute top-0 left-0 h-full -z-10 w-full object-cover" />
                        <div className="absolute top-28 left-1/2 -translate-x-1/2">
                            <TbMapSearch className="text-4xl md:text-5xl lg:text-6xl text-white" />
                        </div>
                        <div className="p-3 z-10 text-white">
                            <p className="font-semibold text-lg md:text-xl">Find location on Map</p>
                            <p className="font-light text-md md:text-lg">7 Locations</p>
                        </div>
                    </div>
                </Link>
                <Link to="/selectLocker">
                    <div className="relative rounded-xl flex flex-col justify-end items-start bg-amber-300 h-72 shadow-2xl shadow-yellow-500/20">
                        <div className="absolute top-28 left-1/2 -translate-x-1/2">
                            <GiLockers className="text-4xl md:text-5xl lg:text-6xl text-native-blue" />
                        </div>
                        <div className="p-3 text-native-blue">
                            <p className="font-semibold text-lg md:text-xl">Enter Your Locker Number</p>
                            <p className="font-light text-md md:text-lg">Find yours now</p>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}

export default HomeGridBlocks;
