import "./Login.css";
import logo from "../../images/logo.png";
import { useRef, useState } from "react";
import SignUp from "../SignUp/SignUp";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  
  
  //Funcion que oculta e div al hacer clic fuera de este
  const divRef = useRef(null);

  function handleClick(event) {
    if (!divRef.current.contains(event.target)) {
      return setSignIn(false);
    }
  }

  return (
    <section className="login" onClick={handleClick}>
      <article className="article-login">
        <div className="header">
          <img id="logo" src={logo} alt="logo"></img>
          <button onClick={()=> setSignIn(true)} className="button-login">Iniciar sesión</button>
        </div>

      {/* Muestra este div si showDiv es true */}
        {
          signIn ? ( 
          <div className="div-sign">
            <article ref={divRef}>
              <SignUp/>
            </article>
          </div>

          ) : (
          
          <div className="div-login">
              <h4>Películas ilimitadas, programas de TV y más...</h4>
              <h5>Mira en cualquier lugar. Cancelar en cualquier momento.</h5>
              <h6>Listo para ver, ingrese el correo electrónico para crear o reiniciar su membresía</h6>
            <div className="div-input">
              <input className="input-empezar" placeholder=" Email..." type="text" ></input>
              <button className="button-empezar">EMPEZAR</button>
            </div>
          </div>
            )}
      </article>
    </section>
  );
};

export default Login;