import "./Plans.css";

const Plans = ({children}) => {

  return (
    <>
      <div className="div-row">
        <p className="p-profile">{children}</p>
        <button className="but-profile" type="button">
          Suscribirse
        </button>
      </div>
    </>
  );
};

export default Plans;
