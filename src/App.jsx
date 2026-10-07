import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import MainContent from "./components/layouts/MainContent";
import Sidebar from "./components/layouts/Sidebar";

export default function App() {
  return (
    <div className="d-flex flex-column ">
      <Header />
      <MainContent />
      <Sidebar />
      <Footer />
    </div>
  )
}