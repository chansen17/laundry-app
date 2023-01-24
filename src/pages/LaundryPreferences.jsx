import React from 'react'
import Select from 'react-select' 
import Navbar from '../components/Navbar'

let softener = [
  {
    value: 'option one',
    label: 'option one',
  },
  {
    value: 'option two',
    label: 'option two',
  },
  {
    value: 'option three',
    label: 'option three',
  },
];

let airDry = [
  {
    value: 'option one',
    label: 'option one',
  },
  {
    value: 'option two',
    label: 'option two',
  },
  {
    value: 'option three',
    label: 'option three',
  },
];
let tempWash = [
  {
    value: 'cold',
    label: 'cold',
  },
  {
    value: 'warm',
    label: 'warm',
  },
  {
    value: 'hot',
    label: 'hot',
  },
];
let whiteTemp = [
  {
    value: 'light',
    label: 'light',
  },
  {
    value: 'light',
    label: 'medium',
  },
  {
    value: 'strong',
    label: 'strong',
  },
];
let colorTemp = [
  {
    value: 'option one',
    label: 'option one',
  },
  {
    value: 'option two',
    label: 'option two',
  },
  {
    value: 'option three',
    label: 'option three',
  },
];
let bleach = [
  {
    value: 'option one',
    label: 'option one',
  },
  {
    value: 'option two',
    label: 'option two',
  },
  {
    value: 'option three',
    label: 'option three',
  },
];
let detergent = [
  {
    value: 'option one',
    label: 'option one',
  },
  {
    value: 'option two',
    label: 'option two',
  },
  {
    value: 'option three',
    label: 'option three',
  },
];

export default function LaundryPreferences() {
  return (
    <>
    <Navbar />
    <div className="h-full w-full py-12 md:py-24">
        <div className="max-w-[1440px] mx-auto px-5 py-4">
            <p className="text-xl md:text-2xl font-semibold text-native-blue">Set up your preferences</p>
            <div className="mt-8">
              <p className="font-medium pb-2 text-native-blue">Fabric Softener</p>
                <Select options={softener}/>
            </div>
            <div className="mt-8">
              <p className="font-medium pb-2 text-native-blue">Air Dry</p>
                <Select options={airDry}/>
            </div>
            <div className="mt-8">
              <p className="font-medium pb-2 text-native-blue">White Temperature Wash</p>
                <Select options={whiteTemp}/>
            </div>
            <div className="mt-8">
              <p className="font-medium pb-2 text-native-blue">Colour Temperature Wash</p>
                <Select options={colorTemp}/>
            </div>
            <div className="mt-8">
              <p className="font-medium pb-2 text-native-blue">Detergent</p>
                <Select options={detergent}/>
            </div>
            <div className="mt-8">
              <p className="font-medium pb-2 text-native-blue">Bleach</p>
                <Select options={bleach}/>
            </div>
            <section className="mt-10 flex items-center">
                <button className="w-1/2 md:w-1/4 mx-auto py-3 px-2 font-semibold bg-native-blue text-white shadow-lgduration-300">Save Preferences</button>
            </section>  
        </div>
    </div>
    </>
  )
}
