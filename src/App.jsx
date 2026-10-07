import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import MainContent from "./components/layouts/MainContent";
import Sidebar from "./components/layouts/Sidebar";
import TempContext from "./contexts/TempContext";

export default function App() {
  return (
    <div className="d-flex flex-column ">
      <Header />
      <TempContext>
        <Sidebar />
        <MainContent />
        <Footer />
      </TempContext>
    </div>
  )
}