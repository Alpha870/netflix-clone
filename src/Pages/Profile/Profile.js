import "./Profile.css";
import Header from "../../components/Header/Header";
import Plans from "../../components/Plans/Plans";
import { Link } from "react-router-dom";

const Profile = () => {

  return (
    <section className="section-profile" >
      <Header />
      <article className="article-profile">
        <div className="div-profile">
          <h3>Editar Perfil</h3>
          <h5 className="h5-profile">Plans</h5>
          <div className="div-interno">
            <Plans cost={7.99}>Netflix standard</Plans>
            <Plans cost={11.99}>Netflix Basic</Plans>
            <Plans cost={15.99}>Netflix Premium</Plans>
          </div>
            <button className="salir-profile" type="button">
              <Link to={'/login'}>
              Cerrar sesión
              </Link>
            </button>
        </div>
      </article>
    </section>
  );
};

export default Profile;
