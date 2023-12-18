import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import FocusCard from "../components/FocusCard/FocusCard.jsx";

function Home() {
    return (
        <div className="flex bg-black h-screen">
            <Sidebar/>
            <div className="flex flex-col md:w-[77%] md:p-2">
                <div className="flex-1 overflow-y-auto mr-2 rounded-t-md">
                    {/* Il resto del tuo componente SearchCard o altre cose qui */}
                    <Navbar/>
                    <FocusCard/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default Home;