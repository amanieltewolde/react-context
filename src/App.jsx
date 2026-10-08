import { useState } from "react";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import MainContent from "./components/layouts/MainContent";
import Sidebar from "./components/layouts/Sidebar";
import TempContext from "./contexts/TempContext";

export default function App() {
  const [temp, setTemp] = useState(20)


  function handleTempTurnDown() {
    setTemp(actual => (actual > 16 ? actual - 1 : actual))
  }

  function handleTempTurnUp() {
    setTemp(actual => (actual < 28 ? actual + 1 : actual))
  }

  function handleStandardTemp() {
    setTemp(20)
  }

  let actualTemp = {
  };

  const coldTemp = temp < 21;
  const hotTemp = temp > 24;
  const comfortTemp = temp >= 21 && temp <= 24;

  if (coldTemp) {
    actualTemp =
    {
      label: 'freddo',
      bgColor: 'bg-info',
    }
  } else if (hotTemp) {
    actualTemp =
    {
      label: 'caldo',
      bgColor: 'bg-danger',
    }
  } else if (comfortTemp) {
    actualTemp =
    {
      label: 'comfort',
      bgColor: 'bg-success',
    }

  }



  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <TempContext value={{
        temp,
        handleTempTurnUp,
        handleTempTurnDown,
        handleStandardTemp,
        actualTemp,
      }}>
        <Sidebar />
        <MainContent />
        <Footer />
      </TempContext>
    </div>
  )
}