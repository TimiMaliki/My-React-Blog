import Header from "./Header";
import Nav from "./Nav";
import About from "./About";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="App">
      <Header title={'Blog'}/>
      <Nav />
      <Outlet />
      <About />
      <Footer />
    </div>
  )
}

export default MainLayout
