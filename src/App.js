// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Demo from "./pages/Demo";

// About
import OurStory from "./pages/about/OurStory";
import Leadership from "./pages/about/Leadership";

// Services
import DesignModeling from "./pages/services/DesignModeling";
import EngineeringAnalysis from "./pages/services/EngineeringAnalysis";
import IndustrialProject from "./pages/services/IndustrialProject";
import Consulting from "./pages/services/Consulting";

// Software
import CADSoftware from "./pages/software/CADSoftware";
import CAESoftware from "./pages/software/CAESoftware";
import AutoCAD from "./pages/software/AutoCAD";
import MSCNastran from "./pages/software/MSCNastran";

// Training
import CADTraining from "./pages/training/CADTraining";
import CAETraining from "./pages/training/CAETraining";
import PlacementAssistance from "./pages/training/PlacementAssistance";
import CertificationPrep from "./pages/training/CertificationPrep";

// Industries Overview
import Industries from "./pages/industries/Industries";

// Individual Industry Pages
import Automotive from "./pages/industries/Automotive";
import Aerospace from "./pages/industries/Aerospace";
import ConsumerProducts from "./pages/industries/ConsumerProducts";
import IndustrialMachinery from "./pages/industries/IndustrialMachinery";
import EnergyPower from "./pages/industries/EnergyPower";
import MedicalDevices from "./pages/industries/MedicalDevices";

export default function App() {
  return (
    <BrowserRouter basename="/MechNest">
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/leadership" element={<Leadership />} />

          {/* Contact / Resources / Demo */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/demo" element={<Demo />} />

          {/* Services */}
          <Route path="/services/design-modeling" element={<DesignModeling />} />
          <Route
            path="/services/engineering-analysis"
            element={<EngineeringAnalysis />}
          />
          <Route
            path="/services/industrial-project"
            element={<IndustrialProject />}
          />
          <Route path="/services/consulting" element={<Consulting />} />

          {/* Software */}
          <Route path="/software/cad" element={<CADSoftware />} />
          <Route path="/software/cae" element={<CAESoftware />} />
          <Route path="/software/autocad" element={<AutoCAD />} />
          <Route path="/software/mscnastran" element={<MSCNastran />} />

          {/* Training */}
          <Route path="/training/cad" element={<CADTraining />} />
          <Route path="/training/cae" element={<CAETraining />} />
          <Route path="/training/placement" element={<PlacementAssistance />} />
          <Route path="/training/certification" element={<CertificationPrep />} />

          {/* Industries Overview */}
          <Route path="/industries" element={<Industries />} />

          {/* Individual Industry Pages */}
          <Route path="/industries/automotive" element={<Automotive />} />
          <Route path="/industries/aerospace" element={<Aerospace />} />
          <Route path="/industries/consumer-products" element={<ConsumerProducts />} />
          <Route path="/industries/industrial-machinery" element={<IndustrialMachinery />} />
          <Route path="/industries/energy-power" element={<EnergyPower />} />
          <Route path="/industries/medical-devices" element={<MedicalDevices />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
