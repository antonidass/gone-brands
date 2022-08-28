import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { CompanyProvider } from "./context/company/CompanyContext";
import Company from "./pages/Company";
import { BadgeProvider } from "./context/badge/BadgeContext";

export default function App() {
  return (
    <CompanyProvider>
      <BadgeProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen w-screen">
            <Navbar />
            <main className="flex-1 mx-auto sm:mx-10 px-3 pb-12 ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/company/:id" element={<Company />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </BadgeProvider>
    </CompanyProvider>
  );
}
