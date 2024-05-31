import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../Styles/global.css";
import Transition from "./Transition";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
        <Header />
        <Transition>
          <main>
            <Outlet />
          </main>
      </Transition>
      <Footer/>
    </>
  );
};

export default Layout;
