import logo from "../images/spotify-white-logo.png";
import google from "../images/Google.png";
import facebook from "../images/facebook.png";

function Form() {
  return (
    <div className="h-[100vh] w-[100%] flex flex-col items-center bg-grigioBg text-biancoTesto ">
      
      <div className="h-[70px] w-[100%] flex justify-start items-center">
        <img src={logo} alt={"logo spotify"} className="h-[50px] ml-[40px]" />
      </div>
      {/* logo */}
      <div className="h-[550px]  flex flex-col items-center p-2 justify-center">
        <h1 className="text-[30px] w-[200px] font-bold text-center">
          Iscriviti per iniziare ad ascoltare
        </h1>
        <form className="flex flex-col items-center mt-[30px] ">
          <div className="flex flex-col ">
            <label htmlFor="email">Indirizzo e-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="nome@dominio.com"
              required
              className="p-2 w-60 bg-grigioBg rounded text-grigioTesto border-solid border-2 border-grigioTesto  hover:border-white "/>
          </div>

          <button className="w-60 bg-green-600 m-3 p-2 rounded-full text-black font-bold hover:bg-green-500">
            Avanti
          </button>
          <div className="mt-2 mb-5"> Oppure </div>

          <button className="flex gap-5 p-2 bg-grigioBg w-60 rounded-full border-solid border-2 border-grigioTesto  hover:border-white">
            <img src={google} alt={"immagine google"} className="h-[20px]" />
            Iscriviti con Google
          </button>

          <button className="flex gap-5 p-2 bg-grigioBg w-60 rounded-full mt-2 border-solid border-2 border-grigioTesto  hover:border-white">
            <img src={facebook} alt={"immagine facebook"} className="h-[20px]" /> Iscriviti con Facebook
          </button>
          <div className="h-[1px] bg-grigioTesto w-60 m-5"></div>
          <div className="flex gap-2">
            <p className="text-grigioTesto">Hai già un account?</p>
            <button className="" >Accedi qui</button>
          </div>
        </form>
        
      </div>
        <div className="text-grigioTesto text-[10px] w-60 text-center mt-4">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </div>
    </div>
  );
}

export default Form;
