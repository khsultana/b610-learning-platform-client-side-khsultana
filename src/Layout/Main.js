import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex container mx-auto mt-4 gap-4">

        <div className="w-full border border-indigo-600 ">
          <Outlet></Outlet>
        </div>

      </div>

      <Footer></Footer>
    </div >

  );
};

export default Main;
