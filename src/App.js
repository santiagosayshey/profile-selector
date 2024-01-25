import React, { useState } from 'react';
import SelectionTable from './components/SelectionTable';

import InfoBox from './components/InfoBox';
import ToolExplanation from './components/ToolExplanation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.png'; // Import your logo

function App() {
  const [selectedQuality, setSelectedQuality] = useState('Transparent');
  const [selectedImmutability, setSelectedImmutability] = useState('Soft');
  const [selectedCompatibility, setSelectedCompatibility] = useState('Legacy');

  return (
    <>
      <nav className="navbar navbar-dark custom-navbar mb-3 navbar-bottom-border">
        <div className="container d-flex justify-content-start align-items-center">
          <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top mr-3" />
          <h2 className="mb-0 ms-3">Profile Selector</h2>
        </div>
      </nav>
      <ToolExplanation />
      <div className="container App mt-5"> {/* Added margin-top */}
        <div className="row justify-content-center">
          <div className="col-md-6">
            <SelectionTable
              selectedQuality={selectedQuality}
              setSelectedQuality={setSelectedQuality}
              selectedImmutability={selectedImmutability}
              setSelectedImmutability={setSelectedImmutability}
              selectedCompatibility={selectedCompatibility}
              setSelectedCompatibility={setSelectedCompatibility}
            />
          </div>
          <div className="col-md-6">
            <InfoBox
              selectedQuality={selectedQuality}
              selectedImmutability={selectedImmutability}
              selectedCompatibility={selectedCompatibility}
            />
          </div>
        </div>
      </div>
      <footer className="bg-body-tertiary text-center text-lg-start">
        <div className="text-center p-3" style={{ backgroundColor: "#14151a" }}>
          &copy; Dictionarry 2024
        </div>
      </footer>
    </>
  );
}

export default App;
