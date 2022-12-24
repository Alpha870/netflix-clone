import "./Banner.css";
import banner from "../../images/banner.jpg";

const Banner = () => {

  const maxDescription = (string, max) => {
    if (string.length > max) {
      return `${string.substring(0, max - 1)}...`;
    } else {
      return string;
    }
  };

  return (
    <section className="div-banner">
      <img className="banner" src={banner} alt="banner" />
        <div className="content">
          <h1>Movie title</h1>
          <h6>
            {maxDescription('Movie description', 14)}
          </h6>
          <button className="play" type="button">
            <i className="bi bi-play-fill"></i>Reproducir
          </button>
          <button className="info" type="button">
            <i className="bi bi-info-circle"></i> Más información{" "}
          </button>
        </div>
      <div className="darken"></div>
    </section>
  );
};

export default Banner;
