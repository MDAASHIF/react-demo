
import { Outlet, Link,useLocation } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout = ({ hideHeaderPaths = [] }) => {

  const { pathname } = useLocation();
  return (
    <>
     {!hideHeaderPaths.includes(pathname) && <Header />}
     {!hideHeaderPaths.includes(pathname) && <Sidebar />}
     
      <Outlet />
      
    </>
  )
};

export default Layout;