import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

function MainLayout() {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
}

export default MainLayout;