import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NarrayaPage from "./components/narraya/NarrayaPage";
import NarrayaVirtualPage from "./components/narraya/NarrayaVirtualPage";
import ShareVirtualPage from "./components/ShareVirtualPage";
import GrandSezhaVirtualPage from "./components/GrandSezhaVirtualPage";
import SedahPage from "./components/sedah/SedahPage";
import SedahGreenResidenceLanding from "./components/sedah/SedahGreenResidenceLanding";
import SedahResidencePage from "./components/SedahResidencePage";
import SedahVirtualPage from "./components/SedahVirtualPage";
import CalculatorPage from "./components/CalculatorPage";
import NarrayaCalculator from "./components/narraya/NarrayaCalculator";
import SedahCalculator from "./components/calculators/SedahCalculator";
import GrandSezhaCalculator from "./components/calculators/GrandSezhaCalculator";
import FreelancePage from "./components/FreelancePage";
import CSHandlingPage from "./components/CSHandlingPage";
import TutorialPage from "./components/TutorialPage";
import ToolsPage from "./components/ToolsPage";
import JSONProjectPage from "./components/JSONProjectPage";
import Lp2026Page from "./components/lp2026/Lp2026Page";
import LegacyHomePage from "./components/LegacyHomePage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Lp2026Page />} />
          <Route path="/lp2026" element={<Lp2026Page />} />
          <Route path="/home-classic" element={<LegacyHomePage />} />
          <Route path="/narraya" element={<NarrayaPage />} />
          <Route path="/narraya-virtual" element={<NarrayaVirtualPage />} />
          <Route path="/sharevirtual" element={<ShareVirtualPage />} />
          <Route path="/gs-virtual" element={<GrandSezhaVirtualPage />} />
          <Route path="/sedah-virtual" element={<SedahVirtualPage />} />
          <Route path="/sedah" element={<SedahPage />} />
          <Route path="/sedah-green-residence" element={<SedahGreenResidenceLanding />} />
          <Route path="/sedahresidence" element={<SedahResidencePage />} />
          <Route path="/kalkulator" element={<CalculatorPage />} />
          <Route path="/kalkulator/narraya" element={<NarrayaCalculator />} />
          <Route path="/kalkulator/sedah" element={<SedahCalculator />} />
          <Route path="/kalkulator/grandsezha" element={<GrandSezhaCalculator />} />
          <Route path="/freelance" element={<FreelancePage />} />
          <Route path="/cshandling" element={<CSHandlingPage />} />
          <Route path="/tutorial" element={<TutorialPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/jsonproject" element={<JSONProjectPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
