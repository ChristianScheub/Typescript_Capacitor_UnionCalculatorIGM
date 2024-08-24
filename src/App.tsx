import React, { useState } from "react";
import "./App.css";
import SalaryCalculatorContainer from "./components/SalaryCalculatorContainer";
import Navbar from "./views/Navbar/Navbar";
import HomeContainer from "./components/HomeContainer";
import TaxClassContainer from "./components/TaxCalculatorContainer";

const App: React.FC = () => {

  const [activeComponent, setActiveComponent] = useState<string>("home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <HomeContainer />;
      case "salary":
        return <SalaryCalculatorContainer />;
      case "government":
        return <TaxClassContainer />;
      default:
        return <HomeContainer />;
    }
  };


  return (
    <div className="App">
      <header className="App-header">
       {renderComponent()}
        <Navbar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
      </header>
    </div>
  );
};

export default App;
