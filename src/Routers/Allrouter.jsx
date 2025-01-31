import React from "react";
import { Routes, Route } from "react-router";
import { Home, Resume, Contact, Projects, Privacy } from "../pages";

const Allrouter = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </main>
  );
};

export default Allrouter;
