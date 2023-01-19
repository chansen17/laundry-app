import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';
import HelpCenter from './pages/HelpCenter';
import Homepage from './pages/Homepage';
import LaundryPreferences from './pages/LaundryPreferences';
import MyOrder from './pages/MyOrder';
import Rewards from './pages/Rewards';
import SelectLocker from './pages/SelectLocker';
import SelectOrder from './pages/SelectOrder';
import Settings from './pages/Settings';

export default function App() {

  return (
    <Router className="">
      <ScrollTop />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/selectLocker" element={<SelectLocker />} />
        <Route path="/selectOrder" element={<SelectOrder />} />


        <Route path="/rewards" element={<Rewards />} />
        <Route path="/myOrders" element={<MyOrder />} />
        <Route path="/laundryPreference" element={<LaundryPreferences />} />
        <Route path="/helpCenter" element={<HelpCenter />} />



        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}
