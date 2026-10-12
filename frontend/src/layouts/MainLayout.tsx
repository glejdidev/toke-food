
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function MainLayout(){
    return(
        <div className="flex min-h-screen flex-col">
            <Navbar/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default MainLayout;