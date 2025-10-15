// src/components/Layout.jsx
import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
