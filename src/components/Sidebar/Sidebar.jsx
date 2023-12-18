import SpotifyLogo from "../../images/spotify-white-logo.png";
import {Link} from "react-router-dom";

function Sidebar() {
  return (
    
    <aside
      className={"hidden md:block bg-nero text-grigioTesto p-2 pr-0 h-screen"}
    >
      {/* Spotify barra di ricerca */}
      <div className={"bg-grigioBg mb-2 p-6 rounded-md"}>
        <ul className={"flex flex-col space-y-4"}>
          <li>
            <a>
              <img
                src={SpotifyLogo}
                alt={"Spotify Logo"}
                className={"w-[78px]"}
              />
            </a>
          </li>
          <li>
            <Link to={"/"}
              className={
                "flex flex-row space-x-5 hover:text-biancoTesto duration-200 ease-in-out cursor-pointer"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <h3 className={"font-bold "}>Home</h3>
            </Link>
          </li>
          <li>
            <Link to={"/search"}
              className={
                "flex flex-row space-x-5 hover:text-biancoTesto duration-200 ease-in-out cursor-pointer"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <h3 className={"font-bold"}>Cerca</h3>
            </Link>
          </li>
        </ul>
      </div>
      {/* Libreria */}
      <div
        className={
          "hidden md:flex bg-grigioBg p-2 rounded-lg flex-col justify-between h-[calc(100vh-178.583px)] overflow-y-scroll"
        }
      >
        <div>
          {/* Barra */}
          <div
            className={"flex flex-row justify-between gap-1 items-center mx-4 mb-6"}
          >
            <a
              className={
                "flex flex-row space-x-2.5 hover:text-biancoTesto duration-200 ease-in-out cursor-pointer"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 min-w-6 max-h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
              <h3 className={"font-bold"}>La tua libreria</h3>
            </a>
            <button
              className={
                "flex justify-center items-center text-xl rounded-full w-7 h-7  hover:bg-griginoBg"
              }
            >
              {" "}
              {/* TODO da sistemare */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
          {/* Contenuto */}
          <div className={"space-y-6 overflow-x-hidden"}>
            {/* Card crea playlist */}
            <div
              className={"bg-griginoBg text-biancoTesto rounded-md py-4 px-5"}
            >
              <h4 className={"font-bold mb-1"}>Crea la tua prima playlist</h4>
              <p className={"text-sm mb-4"}>È facile, ti aiuteremo</p>
              <button
                className={
                  "font-bold rounded-full bg-biancoTesto text-sm text-nero px-4 py-1 hover:scale-105 duration-250 ease-in-out"
                }
              >
                Crea playlist
              </button>
            </div>
            {/* Card cerca podcast */}
            <div
              className={"bg-griginoBg text-biancoTesto rounded-md py-4 px-5"}
            >
              <h4 className={"font-bold mb-1"}>
                Cerca qualche podcast da seguire
              </h4>
              <p className={"text-sm mb-4"}>
                Ti aggiorneremo sui nuovi episodi
              </p>
              <button
                className={
                  "font-bold rounded-full bg-biancoTesto text-sm text-nero px-4 py-1 hover:scale-105 duration-250 ease-in-out"
                }
              >
                Sfoglia i podcast
              </button>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className={"space-y-2 "}>
          {/* Link */}
          <ul
            className={
              "text-[9px] flex flex-row flex-wrap gap-x-2 gap-y-3 px-3 pt-6"
            }
          >
            <li>
              <a className=" cursor-pointer">Informazioni legali</a>
            </li>
            <li>
              <a className=" cursor-pointer">Centro sulla privacy</a>
            </li>
            <li>
              <a className=" cursor-pointer">Informativa sulla privacy</a>
            </li>
            <li>
              <a className=" cursor-pointer">Impostazioni cookie</a>
            </li>
            <li>
              <a className=" cursor-pointer">Info annunci</a>
            </li>
            <li>
              <a className=" cursor-pointer">Accessibilità</a>
            </li>
          </ul>
          <ul className={"text-[9px] pt-1 px-3 pb-6"}>
            <li>
              <a className={"hover:underline cursor-pointer"}>Politica sui cookie</a>
            </li>
          </ul>
          {/* Bottone lingua */}
          <div className={"px-3 pb-6"}>
            <button
              className={
                "text-biancoTesto flex flex-row gap-1 rounded-full ring-2 ring-griginoBg px-2 py-1 hover:scale-105 hover:ring-biancoTesto duration-250 ease-in-out"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
              </svg>
              Italiano
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
