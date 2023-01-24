import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiTShirtAirLine } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className="text-gray-600">
            <div className="max-w-[1440px] px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <RiTShirtAirLine className="text-2xl md:text-3xl" />
                <span className="ml-3 text-native-blue text-xl">Mobile Laundry</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4">
                    <a className="" href=""><FaFacebook className="text-xl md:text-2xl" /></a>
                    <a className="" href=""><FaInstagram className="text-xl md:text-2xl" /></a>
                    <a className="" href=""><FaTwitter className="text-xl md:text-2xl" /></a>
                    <a className="" href=""><FaLinkedin className="text-xl md:text-2xl" /></a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
