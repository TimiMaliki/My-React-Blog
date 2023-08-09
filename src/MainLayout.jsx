import Header from "./Header";
import Nav from "./Nav";
import About from "./About";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


const MainLayout = ({ search, setSearch }) => {
    return (
        <div className="App">
         
            <Nav search={search} setSearch={setSearch} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;
