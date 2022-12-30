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
          <h5 className="h5-profile">Elige tu plan</h5>
          <div className="div-interno">
            <Plans cost={7.99}>Netflix standard</Plans>
            <Plans cost={11.99}>Netflix Basic</Plans>
            <Plans cost={15.99}>Netflix Premium</Plans>
          </div>
              <Link to={'/login'} className="salir-profile" type="button">
                Cerrar sesión
              </Link>
        </div>
      </article>
    </section>
  );
};

export default Profile;
