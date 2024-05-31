import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../Styles/global.css";
import Transition from "./Transition";
const Layout = () => {
  return (
    <>
        <Header />
        <Transition>
          <main>
            <Outlet />
          </main>
        </Transition>
    </>
  );
};

export default Layout;
