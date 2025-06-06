import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

const App = () => {
  return (
    <div className="bg-[#050414]">

       {/* <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} /> */}

      <div className="absolute inset-0 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Work />
        {/* <Education /> */}
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;
