import React, { useState } from 'react';
import { BsTruck } from 'react-icons/bs';

const HomePickupBlock = () => {
    const [slide, setSlide] = useState(1);
    return (
        // left as backup
        // <section className="max-w-[1440px] mx-auto text-center space-y-4 px-5 ">
        //     <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-native-blue">Pick up your order at home?</p>
        //     <div className="group w-full h-72 md:h-80 bg-native-blue rounded-xl relative flex justify-end flex-col items-start shadow-2xl shadow-native-blue/50">
        //         <div className="absolute top-32 left-1/2 -translate-x-1/2">
        //             <BsTruck className="text-5xl md:text-6xl lg:text-7xl text-green-100 group-hover:animate-waving-hand" />
        //             <div className="absolute bottom-1 h-1 w-full bg-teal-400 group-hover:animate-bouncin" />
        //         </div>  
        //         <div className="w-full p-3 text-left text-white text-md md:text-lg lg:text-xl">
        //             <p className="font-semibold">Home pickup available</p>
        //             <p className="font-light">Press for options</p>
        //         </div>
        //     </div>
        // </section>
        <section className="max-w-[1440px] mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <div className="w-full h-72 md:h-80 flex items-center bg-native-blue rounded-xl relative shadow-2xl shadow-native-blue/50 overflow-hidden">
                <div className="flex flex-col items-center justify-center px-2 py-4 space-y-6 w-1/6 bg-sky-700 h-full">
                    <button value={1} onClick={(e) => setSlide(e.target.value)} className={slide == 1 ? "animate animate__animated animate__slideInLeft animate__faster h-4 w-4 bg-yellow-200 rounded-full" : "animate animate__animated animate__slideInLeft animate__faster h-4 w-4 bg-white rounded-full"}></button>
                    <button value={2} onClick={(e) => setSlide(e.target.value)} className={slide == 2 ? "animate animate__animated animate__slideInLeft animate__faster h-4 w-4 bg-yellow-200 rounded-full" : "animate animate__animated animate__slideInLeft animate__faster h-4 w-4 bg-white rounded-full"}></button>
                    <button value={3} onClick={(e) => setSlide(e.target.value)} className={slide == 3 ? "animate animate__animated animate__slideInLeft animate__faster h-4 w-4 bg-yellow-200 rounded-full" : "animate animate__animated animate__slideInLeft animate__faster h-4 w-4 bg-white rounded-full"}></button>
                </div>
                <div className="py-4 px-6 flex flex-col items-start justify-center w-full">
                    {slide == 1 && (
                        <div className="aniamate animate__animated animate__fadeInRight animate__fast">
                            <h3 className="text-teal-100 text-xl md:text-2xl lg:text-3xl font-bold whitespace-pre-wrap">Mobile Laundry<br/>is as easy as <span className="text-yellow-200">1, 2, 3</span>!</h3>
                            <p className="text-gray-50 text-lg md:text-xl">First, find a location.</p>
                        </div>
                    )}
                    {slide == 2 && (
                        <div className="aniamate animate__animated animate__fadeInRight animate__fast">
                            <h3 className="text-teal-100 text-xl md:text-2xl lg:text-3xl font-bold whitespace-pre-wrap">Second</h3>
                            <p className="text-gray-50 text-lg md:text-xl">Select your laundry preferences.</p>
                        </div>
                    )}
                    {slide == 3 && (
                        <div className="aniamate animate__animated animate__fadeInRight animate__fast">
                            <h3 className="text-teal-100 text-xl md:text-2xl lg:text-3xl font-bold whitespace-pre-wrap">Third</h3>
                            <p className="text-gray-50 text-lg md:text-xl">We clean, we fold, we drop it off to the same locker! <br/>The most hassle-free laundry you've ever experienced!</p>
                        </div>
                    )}
                </div>
            </div>
            <div>
                {/* <p className="font-bold text-left text-xl md:text-2xl lg:text-3xl text-native-blue pb-4">Pick up your order at home?</p> */}
                <div className="group w-full h-72 md:h-80 bg-sky-700 rounded-xl relative flex justify-end flex-col items-start shadow-2xl shadow-native-blue/50">
                    <div className="absolute top-32 left-1/2 -translate-x-1/2">
                        <BsTruck className="text-5xl md:text-6xl lg:text-7xl text-green-100 group-hover:animate-waving-hand" />
                        <div className="absolute bottom-1 h-1 w-full bg-teal-400 group-hover:animate-bouncin" />
                    </div>  
                    <div className="w-full p-3 text-left text-white text-md md:text-lg lg:text-xl">
                        <p className="font-semibold">Home pickup available</p>
                        <p className="font-light">Press for options</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePickupBlock;
