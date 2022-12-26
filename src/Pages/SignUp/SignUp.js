
import { useState } from "react";
import "./SignUp.css";

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {}

  const register = (e) => {
  }

  return (
    <div className="register">
      <h4 className="h4-sign">Registrarse</h4>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-sign"
        placeholder=" Email..."
        type="email">
      </input>

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-sign"
        placeholder=" Contraseña..."
        type="Password"
      ></input>

      <button
        onClick={signIn}
        type="submit"
        className="button-sign">Registrarse
      </button>
      <p className="p-sign">Nuevo en Netflix?
        <span
          className="span-sign"
          onClick={register}
          > Registrate ahora.
        </span>
      </p>
    </div>
  );
};

export default SignUp;
