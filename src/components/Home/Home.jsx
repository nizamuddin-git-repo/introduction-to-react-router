
import { Outlet } from "react-router-dom";
import Footer from "../Header/Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;