import "./Login.css";
import logo from "../../images/logo.png";
import { useEffect, useState } from "react";

const Login = () => {


  return (
    <section className="login">
      <article className="article-login">
      <div className="header">
        <img id="logo" src={logo} alt="logo"></img>
        <button className="button-login">Iniciar sesión</button>
      </div>
        <div className="div-interno">
              <h4>Películas ilimitadas, programas de TV y más...</h4>
              <h5>Mira en cualquier lugar. Cancelar en cualquier momento.</h5>
              <h6>Listo para ver, ingrese el correo electrónico para crear o reiniciar su membresía</h6>
            <div className="div-input">
              <input className="input-login" placeholder=" Email..." type="text" ></input>
              <button className="button-login">EMPEZAR</button>
            </div>
        </div>
      </article>
    </section>
  );
};

export default Login;
