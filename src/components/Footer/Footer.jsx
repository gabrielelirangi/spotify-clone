import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    
    <footer className="flex md:justify-end">
      {/*contenitore di tutto il footer */}
      <div className=" w-screen  md:h-[353px] flex  flex-col   md:p-2  bg-grigioBg text-grigioTesto md:rounded-b-md">
        {/* contenitore parte1 dell footer */}
        <div className="gap-6 md:gap-0 flex flex-col md:flex-row md:flex-wrap justify-between px-4 md:px-5 py-2">
          {/* azienda community link utili */}
          <div className="flex flex-col gap-6 md:gap-0 md:flex-row">
            <div className="pr-20">
              <h2 className="text-[20px] text-biancoTesto pb-[5px] ">
                Azienda
              </h2>
              <ul className="flex flex-col">
                <Link className="pb-[5px] hover:text-biancoTesto hover:underline">
                  Chi siamo
                </Link>
                <Link className="pb-[5px] hover:text-biancoTesto hover:underline">
                  {" "}
                  Opportunità di lavoro
                </Link>
                <Link className="pb-[5px] hover:text-biancoTesto hover:underline">
                  For the Record
                </Link>
              </ul>
            </div>

            <div className="pr-20">
              <h2 className="text-[20px] text-biancoTesto pb-[5px]">
                Community
              </h2>
              <ul className="flex flex-col">
                <Link className="pb-[5px] hover:text-biancoTesto hover:underline">
                  Per artisti
                </Link>
                <Link className="pb-[5px] hover:text-biancoTesto hover:underline">
                  Sviluppatori
                </Link>
                <Link className="pb-[5px] hover:text-biancoTesto hover:underline">
                  Pubblicità
                </Link>
                <Link className="pb-[5px] hover:text-biancoTesto hover:underline">
                  Investitori
                </Link>
                <Link className="pb-[5px] hover:text-biancoTesto hover:underline">
                  Venditori
                </Link>
              </ul>
            </div>

            <div>
              <h2 className="text-[20px] text-biancoTesto pb-[5px]">Link</h2>
              <ul className="flex flex-col ">
                <Link className="pb-[5px] hover:text-biancoTesto hover:underline">
                  Assistenza
                </Link>
                <Link className="pb-[5px] hover:text-biancoTesto hover:underline">
                  App per cellulare gratuita
                </Link>
                <Link className="pb-[5px] hover:text-biancoTesto hover:underline">
                  Diritti del consumatore
                </Link>
              </ul>
            </div>
          </div>
          {/*icone */}
          <div>
            <ul className="flex">
              <Link className="bg-griginoBg w-[40px] h-[40px] rounded-full mr-[10px] flex items-center justify-center hover:bg-grigioHover">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className=""
                  style={{ color: "#f6f6f6" }}
                />
              </Link>

              <Link className="bg-griginoBg w-[40px] h-[40px] rounded-full  mr-[10px] flex items-center justify-center hover:bg-grigioHover">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className=" "
                  style={{ color: "#f6f6f6" }}
                />
              </Link>
              <Link className="bg-griginoBg w-[40px] h-[40px] rounded-full  mr-[10px] flex items-center justify-center hover:bg-grigioHover">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className=""
                  style={{ color: "#f6f6f6" }}
                />
              </Link>
            </ul>
          </div>
        </div>

        <div className="mb-10 mt-6 md:mt-0">
          <div className="h-[1px] bg-grigioTesto "> </div>
          <div className="flex justify-start  px-5 py-2">
            <div>
              <div className={"space-y-2 md:hidden"}>
                {/* Link */}
                <ul
                  className={
                    "text-sm flex flex-row flex-wrap gap-x-3 gap-y-3  py-6"
                  }
                >
                  <li>
                    <a>Informazioni legali</a>
                  </li>
                  <li>
                    <a>Centro sulla privacy</a>
                  </li>
                  <li>
                    <a>Informativa sulla privacy</a>
                  </li>
                  <li>
                    <a>Impostazioni cookie</a>
                  </li>
                  <li>
                    <a>Info annunci</a>
                  </li>
                  <li>
                    <a>Accessibilità</a>
                  </li>
                  <li>
                    <a>Politica sui cookie</a>
                  </li>
                </ul>
                {/* Bottone lingua */}
                <div className={"px-3 pb-6"}>
                  <button
                    className={
                      "text-biancoTesto flex flex-row gap-1 rounded-full ring-1 ring-biancoTesto px-2 py-1 hover:scale-105 duration-250 ease-in-out"
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
              <p>@2023 Spotify AB</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
