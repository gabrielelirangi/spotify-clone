import SpotifyLogo from "../../images/spotify-logo.png";
import {useState} from "react";
import {Link} from "react-router-dom";

/* eslint-disable react/no-unknown-property */
function Navbar() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const next = () => {
        window.history.forward();
    }

    const prev = () => {
        window.history.back();
    }

    return (
        <header
            className="fixed z-10 w-full md:w-[calc(78%-35px)] bg-nero flex justify-between items-center h-16 px-4 md:px-6 md:pl-10  md:pr-0 md:bg-[#0f0f0f] md:rounded-t-md overflow-hidden">
            <img src={SpotifyLogo} alt="Spotify-logo" className="md:hidden h-12"/>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-4 ">
                    <button onClick={prev}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="32"
                            width="32"
                            className="hidden md:block bg-black rounded-full p-1"
                            viewBox="0 0 320 512"
                        >
                            <path
                                fill="#868686"
                                d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                            />
                        </svg>
                    </button>
                    <button onClick={next}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="32"
                            width="32"
                            className="hidden md:block bg-black rounded-full p-1"
                            viewBox="0 0 320 512"
                        >
                            <path
                                fill="#868686"
                                d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="hidden md:flex border-2 rounded-3xl px-4 py-1 h-12 bg-[#2a2a2a] hover:bg-[#3a3a3a] hover:border-sm hover:border-[#4a4a4a]  items-center gap-2 border-transparent focus:border-2 focus:border-white ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="#f6f6f6"
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Cosa vuoi ascoltare?"
                        className="h-9 bg-transparent text-white outline-none"
                    />
                </div>
            </div>
            <div className="hidden md:flex gap-7 pr-10 font-bold text-lg">
                <Link to={"/Iscriviti"} className="bg-[#0f0f0f] text-grigioTesto hover:scale-105 hover:text-biancoTesto py-2">
                    Iscriviti
                </Link>
                <button className="bg-white text-black rounded-3xl px-7 py-2 hover:scale-105">
                    Accedi
                </button>
            </div>

            <div className="flex items-center space-x-4 md:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-biancoTesto"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>

                <button
                    className="bg-white text-black rounded-3xl px-7 py-2 hover:scale-105 uppercase font-bold text-lg">
                    Apri l&apos;App
                </button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className=" md:hidden w-8 h-8 cursor-pointer transform transition duration-500 text-[#ffffff]
              hover:scale-110 "
                    onClick={() => setIsNavOpen((prev) => !prev)}
                >
                    <path
                        fill-rule="evenodd"
                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd"
                    />
                </svg>

                <div
                    className={isNavOpen ? "showMenuNav text-biancoTesto ml-0 fixed" : "hideMenuNav"}
                >
                    <div
                        className=" absolute top-0 right-0 px-8 py-8 "
                        onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                    >
                        <svg
                            className="cursor-pointer transform transition duration-500
                hover:scale-110 text-biancoTesto "
                            viewBox="0 0 24 24"
                            height="32"
                            width="32"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </div>
                    <ul className=" mt-10 flex flex-col text-2xl font-bold  space-y-6">
                        <li className="">Accedi</li>
                        <li className="">Iscriviti</li>
                    </ul>
                    <div className=" text-2xl py-6">-</div>
                    <ul className="space-y-1 font-bold ">
                        <li>Premium</li>
                        <li>Assistenza</li>
                        <li>Scarica</li>
                        <li>Privacy</li>
                        <li>Condizioni</li>
                    </ul>
                </div>
            </div>

            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        width: 100%;
        height: 100vh;
        padding: 32px;
        top: 0;
        left: -16px;
        background: black;
        z-index: 20;
        display: flex;
        flex-direction: column;
      }
    `}</style>
        </header>
    );
}

export default Navbar;
