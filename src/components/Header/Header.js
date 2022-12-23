import "./Header.css";
import logo from "../../images/logo.png";
import profile from "../../images/profile.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mostrar, setMostrar] = useState(false);

  // Funcion para volver transparente al navbar
  const ocultarHeader = () => {
    if (window.scrollY > 100) {
      setMostrar(true);
    } else {
      setMostrar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", ocultarHeader);
    return () => document.removeEventListener("scroll", ocultarHeader);
  }, []);

  return (
    <>
      <nav className={mostrar ? "trans-navbar" : "navbar"}>
        <Link to={"/"}>
          <img id="logo" src={logo} alt="logo" />
        </Link>
        <Link to={"/profile"}>
          <img id="perfil" src={profile} alt=""></img>
        </Link>
        </nav>
    </>
  );
};

export default Header;
