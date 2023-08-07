import Header from "./Header";
import Nav from "./Nav";
import About from "./About";
import Footer from "./Footer";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Header title={"Blog"} />
      <Nav search={search} setSearch={setSearch} />
      <Outlet />
      <About />
      <Footer />
    </div>
  );
};

export default MainLayout;
