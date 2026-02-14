import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { brandDetails } from "./config";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import Massage from "./pages/Massage";
import Spa from "./pages/Spa";
import Footer from "./components/Footer";
import Service from "./pages/Service";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar fixed hai isliye top padding */}
      <Navbar />

      <main className="pt-[90px]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Service />
                <Contact />
                <Appointment />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/massage/:slug" element={<Massage />} />
          <Route path="/spa/:slug" element={<Spa />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </main>

      {/* WhatsApp Floating Button */}
      <a
        href={brandDetails.socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-3xl shadow-lg transition-transform duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
