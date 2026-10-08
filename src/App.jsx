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




  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <TempContext value={{
        temp,
        handleTempTurnUp,
        handleTempTurnDown,
        handleStandardTemp,
      }}>
        <Sidebar />
        <MainContent />
        <Footer />
      </TempContext>
    </div>
  )
}