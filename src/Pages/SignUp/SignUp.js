import { useState } from "react";
import "./SignUp.css";


// import appFirebase from "../../firebase";
// import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

// const auth = getAuth(appFirebase)



const SignUp = () => {

  const [registro, setRegistro] = useState('Iniciar sesión') 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  const signIn = async (e) => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, email, password)
  //   .then((userAuth) => console.log(setUser, 'desde SIgn'))
  //   .catch((err) => alert(err.message))
  }
  
  const registrarse = () => {
    setRegistro('Registrarse');
  }
  // const register = async (e) => {
  //   registrarse()
  //   if(registro) {
  //     await createUserWithEmailAndPassword(auth, email, password)
  //   }else{
  //     await createUserWithEmailAndPassword(auth, email, password)
  //   }
  // }

  return (
    <div className="register">
      <h4 className="h4-sign">{registro}</h4>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-sign"
        placeholder=" Email..."
        type="email"
        required
        ></input>

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-sign"
        placeholder=" Contraseña..."
        type="Password"
        required
      ></input>

      <button
        onClick={signIn}
        type="submit"
        className="button-sign">{registro}
      </button>
      
      <p className="p-sign">Nuevo en Netflix?
        <span
          className="span-sign"
          onClick={registrarse}
          > Registrate ahora.
        </span>
      </p>
    </div>
  );
};

export default SignUp;
