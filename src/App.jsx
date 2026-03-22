import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";

const PricingPromise = fetch('pricingData.json')
.then(res => res.json())



function App() {
  return (
    <>
  
      <header id="center">
        <Navbar></Navbar>                   
        {/* <DaisyNav></DaisyNav> */}

      </header>
      <main>
      <Suspense fallback={<span className="  loading loading-ball loading-xl"></span>}>
        <PricingOptions PricingPromise={PricingPromise}></PricingOptions>
      </Suspense>
      </main>
      
    </>
  );
}

export default App;
