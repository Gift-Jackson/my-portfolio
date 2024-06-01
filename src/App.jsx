import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Components/Global/Layout";
import About from "./Pages/About";
import { AnimatePresence } from "framer-motion";
import Contacts from "./Pages/Contacts";
import Projects from "./Pages/Projects";
import { Toaster } from "react-hot-toast";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Toaster position="top-center"/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<h1>404 - Page not ready yet!</h1>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
