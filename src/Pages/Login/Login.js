import "./Login.css";
import logo from "../../images/logo.png";
import { useRef, useState } from "react";

const Login = () => {
  const [showDiv, setShowDiv] = useState(false);
  
  
  //Funcion que oculta e div al hacer clic fuera de este
  const divRef = useRef(null);

  function handleClick(event) {
    if (!divRef.current.contains(event.target)) {
      return setShowDiv(false);
    }
  }

  return (
    <section className="login" onClick={handleClick}>
      <article className="article-login">
        <div className="header">
          <img id="logo" src={logo} alt="logo"></img>
          <button onClick={()=> setShowDiv(true)} className="button-login">Iniciar sesión</button>
        </div>

      {/* Muestra este div si showDiv es true */}
        {showDiv && (
          <div className="div-sign">
            <div className="register" ref={divRef}>
              <h4 className="h4-sign">Registrarse</h4>
              <input className="input-sign" placeholder=" Email..." type="text" ></input>
              <input className="input-sign" placeholder=" Contraseña..." type="Password" ></input>
              <button className="button-sign">Registrarse</button>
              <p className="p-sign">Nuevo en Netflix? Registrate ahora.</p>
            </div>
          </div>
        )}

      {/* Muestra este div si showDiv es false */}
        {!showDiv && (
          <div className="div-login">
                <h4>Películas ilimitadas, programas de TV y más...</h4>
                <h5>Mira en cualquier lugar. Cancelar en cualquier momento.</h5>
                <h6>Listo para ver, ingrese el correo electrónico para crear o reiniciar su membresía</h6>
              <div className="div-input">
                <input className="input-login" placeholder=" Email..." type="text" ></input>
                <button className="button-login">EMPEZAR</button>
              </div>
          </div>
        )}
      </article>
    </section>
  );
};

export default Login;