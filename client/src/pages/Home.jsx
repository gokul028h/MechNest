// src/pages/Home.jsx
import React from "react";
import Hero from "../components/common/Hero";
import About from "../components/home/About";
import Stats from "../components/common/Stats";
import CoreServices from "../components/home/CoreServices";
import SoftwareExpertise from "../components/home/SoftwareExpertise";
import DemoSection from "../components/home/DemoSection";
import BlogSection from "../components/home/BlogSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <CoreServices />
      <SoftwareExpertise />
      <DemoSection />
      <BlogSection />
    </>
  );
}
