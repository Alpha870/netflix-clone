import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="div-icons">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-instagram"></i>
        <a href='https://github.com/Alpha870'><i id="github" className="bi bi-github"></i></a>
        <i className="bi bi-twitter"></i>
      </div>
        <p>Esta página es con fines académicos para ver más webs hechas por mi visitar el link de github</p>
    </div>
  );
}

export default Footer;
