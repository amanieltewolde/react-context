import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import MainContent from "./components/layouts/MainContent";
import Sidebar from "./components/layouts/Sidebar";
import TempContextProvider from "./contexts/TempContext";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <TempContextProvider >
        <Sidebar />
        <MainContent />
        <Footer />
      </TempContextProvider>
    </div>
  )
}