import { useState } from "react";
import Navbar from "../components/Navbar";
import Converter from "../components/Converter";
import History from "../components/History";
import Footer from "../components/Footer";


function Home() {


  return (
   <div className="grid-container col-12">
        <Navbar />
        <Converter />
        <History />
        <Footer />
    </div>
  );
}

export default Home;