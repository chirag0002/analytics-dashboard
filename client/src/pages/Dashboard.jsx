import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';

function Dashboard() {
  const [selectedPage, setSelectedPage] = useState('Home');

  return (
    <div className="app">
      <Navbar companyName="Your Company Name" />
      <div className="container">
        <SideBar setSelectedPage={setSelectedPage} />
        <MainContent selectedPage={selectedPage} />
      </div>
    </div>
  );
}

export default Dashboard;
