import "./Banner.css";
import banner from "../../images/banner.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import requests from "../../Request";

const Banner = () => {
  const [movies, setMovies] = useState([]);


  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchTrending);
      // genera un numero random igual a la longitud del array reuquest
      const random = Math.floor(Math.random() * request.data.results.length - 1);
      setMovies(request.data.results[random]);
      return request;
    };
    fetchData();
  }, []);

  
  // función para restringir un maximo de letras
  const maxDescription = (string, max) => {
    if (string.length > max) {
      return `${string.substring(0, max - 1)}...`;
    } else {
      return string;
    }
  };
  
  // variables para mejor lectura de codigo  
  const bannerRandom = `${base_url}${movies.backdrop_path}`
  const titleRandom = `${movies.title}`
  const nameRandom = `${movies.name}`
  const overViewRandom = `${movies.overview}`

  return (
    <section className="div-banner">

    {/* si no existe el backdrop_path me devuelve imagen del archivo imagenes */}
      {!movies ?
        <img className="banner" src={banner} alt="banner" />
        :
        <img className="banner" src={bannerRandom} alt="banner" />
      }

      <div className="content">
      {/* si no existe en el array la clave title sera name */}
      {movies.title === undefined ? 
        <h1 className="h1-banner">{nameRandom}</h1>
        :
        <h1 className="h1-banner">{titleRandom}</h1>
      }
        <h6 className="h6-banner">{maxDescription(overViewRandom, 160)}</h6>
        
        <div className="div-buttons">
          <button className="play" type="button">
            <i id="icon-banner" className="bi bi-play-fill"></i>Reproducir
          </button>
          <button className="info" type="button">
            <i id="icon-banner" className="bi bi-info-circle"></i> Más información{" "}
          </button>
        </div>

      </div>
      <div className="darken"></div>
    </section>
  );
};

export default Banner;
