import json from "./json.json";
import {Link} from "react-router-dom";

function FocusCard() {
    const canzoni = json.items;

    return (
        <>
            {/*____________CONTAINER ____________ */}
            <div
                id="container overflow-y-scroll  h-screen"
                className="bg-gradient-to-b from-[#303030] to-[#121212]"
            >
                {/*____________TITLE BOX ____________ */}
                <div className="mt-16 flex justify-between p-4">
                    <h1 className="text-white font-bold md:text-lg lg:text-3xl">
                        Top 10 Songs Spotify
                    </h1>
                    {/*    <h2 className="text-grigioTesto text-sm font-bold cursor-pointer">
          Mostra tutto
        </h2> */}
                </div>
                <div className="flex flex-wrap  ">
                    {/*  MAPPATURA  */}
                    {canzoni.map((item, index) => {
                        console.log("prima del return");
                        return (
                            <div
                                key={index}
                                className="w-[170px] h-[235px] bg-griginoBg hover:bg-[#404040] group duration-300 ease-in-out rounded-lg p-3 flex flex-col gap-1 cursor-pointer m-2 md:my-10 md:mx-8 md:scale-125"
                            >
                                {/*____________CARD BOX ____________ */}
                                <div>
                                    <Link
                                        to={item.external_urls.spotify}
                                        target={"_blank"}
                                        className="w-36 h-36 relative rounded-lg mb-2 shadow-md  shadow-[#20202088]"
                                    >
                                        <img
                                            className="relative rounded-md"
                                            src={item.album.images[0].url}
                                            alt=""
                                        />
                                        <svg
                                            className="absolute top-1 left-2 w-4 "
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="25"
                                            width="24"
                                            viewBox="0 0 496 512"
                                        >
                                            <path
                                                fill="#ffffff"
                                                d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
                                            />
                                        </svg>
                                        <img
                                            id="playImage"
                                            src="src/images/play_button_black.png"
                                            alt=""
                                            className="h-12 absolute bottom-0 right-12 opacity-0 group-hover:opacity-100 group-hover:bottom-12 group-hover:rounded-full group-hover:shadow-md group-hover:shadow-[#0000004e]
                    hover:scale-110 transition-all duration-500"
                                        />
                                        <h1 className="absolute text-md right-2 bottom-1 bg-[#1111117a]  rounded-lg px-2 py-1 text-center font-bold text-white">
                                            {item.artists[0].name}
                                        </h1>
                                    </Link>
                                </div>

                                <h1 className="font-bold  text-biancoTesto">{item.name}</h1>
                                {/* <p className="text-xs text-grigioTesto">
              </p> */}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default FocusCard;