import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <>
      <Header />
        <main className="flex flex-col lg:flex-row lg:items-start lg:justify-start items-center justify-center min-h-screen border-gray-200">
          <Sidebar />
          <Outlet />
      </main>
    </>
  );
};

export default Layout;
