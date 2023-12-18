/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import allenamento from "../../images/allenamento.jpg";
import amore from "../../images/amore.jpg";
import anime from "../../images/anime.jpg";
import auto from "../../images/auto.jpg";
import classica from "../../images/classica.jpg";
import country from "../../images/country.jpg";
import elettronica from "../../images/elettronica.jpg";
import indie from "../../images/indie.jpg";
import pop from "../../images/pop.jpg";
import punk from "../../images/punk.jpg";
import soul from "../../images/soul.jpg";
import topgaming from "../../images/top_gaming_1.jpg";
import viaggio from "../../images/viaggio.jpg";
import latina from "../../images/latina.jpg";
import rock from "../../images/rock.jpg";
import jazz from "../../images/jazz.jpg";
import {Link} from "react-router-dom";


function SearchCard() {
    //creo un array che contiene i titoli delle carte
    const titoli = ["allenamento", "amore", "anime", "auto", "classica", "country", "elettronica", "indie", "pop", "punk", "soul", "top gaming", "viaggio", "latina", "rock", "jazz"];
    // creo un array contenente le immagini importate delle card
    const immagini = [allenamento, amore, anime, auto, classica, country, elettronica, indie, pop, punk, soul, topgaming, viaggio, latina, rock, jazz];
    // creo un array contenente i colori dello sfondo delle carte
    const colori = ["bg-fuchsia-500", "bg-green-300", "bg-amber-300", "bg-sky-300", "bg-red-500", "bg-brown-300", "bg-blue-700", "bg-yellow-700", "bg-blue-900", "bg-indigo-600", "bg-green-600", "bg-amber-600", "bg-sky-500", " bg-orange-500", "bg-slate-400", "bg-gray-600", "bg-red-400", "bg-amber-800"];

    const link = ["https://open.spotify.com/genre/0JQ5DAqbMKFAXlCG6QvYQ4", "https://open.spotify.com/genre/0JQ5DAqbMKFAUsdyVjCQuL", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://open.spotify.com/genre/0JQ5DAtOnAEpjOgUKwXyxj"]

    // creo il contenitore dei componenti
    const componenti = [];
    for (let i = 0; i < titoli.length; i++) {
        const titolo = titoli[i];
        const colore = colori[i];
        const immagine = immagini[i]; // questo for mi va a prendere i singoli elementi di ogni array sopra creati
        // console.log(titolo,colore,immagine); //sembra che funzioni il ciclo
        const componente = (
            <Link to={link[i]}
                  key={i}
                  className={`${colore} w-[200px] h-[210px] rounded mb-[10px] relative overflow-hidden`}>

                <div className="text-biancoTesto font-bold text-[20px] p-[10px]">
                    {titolo}
                </div>
                <div className="absolute bottom-[-20px] right-[-15px]">
                    <img src={immagine} alt={"immagine card"} className="w-32 rotate-[45deg]"/>
                </div>
                {/* {console.log(`carta ${i+1} , titolo: ${titolo}, colore: ${colore}, immagine: &{immagine}`)};   */} {/* funzionante */}
            </Link>
        );

        componenti.push(componente)
    }
    return (
        <div className="bg-grigioBg mt-16">
            <h1 className="text-biancoTesto text-[40px] font-bold p-5">
                Sfoglia tutto
            </h1>
            <div className="flex gap-[10px] flex-wrap p-4">{componenti}</div>
        </div>
    );
}

export default SearchCard;