import { useEffect, useState } from "react";
import Aboutme from "./pages/Aboutme/Aboutme";
import Skills from "./pages/Skills/Skills";
import Works from "./pages/Works/Works";
import All from "./pages/All/All";
import Contacts from "./pages/Contacts/Contacts";
import "./scss/main.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import PageMain from "./pages/PageMain/PageMain";

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path="/portfolio/" element={<All/>} />
          <Route path="/portfolio/about" element={<Aboutme />} />
          <Route path="/portfolio/skills" element={<Skills />} />
          <Route path="/portfolio/works" element={<Works />} />
          <Route path="/portfolio/contacts" element={<Contacts />} />
          <Route path="/*" element={<NotFound></NotFound>} /> 
      </Routes>   
      <Footer />
    </>
  );
}

export default App;
// https://api.github.com/users/sunnat111/repos
