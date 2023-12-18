/* eslint-disable no-unused-vars */
import SearchCard from "../components/SearchCard/SearchCard";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Search() {
    return (
        <div className="flex bg-black h-screen">
            <Sidebar/>
            <div className="flex flex-col md:w-[77%] md:p-2 mx-auto">
                <div className="flex-1 overflow-y-auto rounded-t-md">
                    {/* Il resto del tuo componente SearchCard o altre cose qui */}
                    <Navbar/>
                    <SearchCard/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default Search;