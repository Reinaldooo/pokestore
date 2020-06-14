import React from 'react';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
//
import "./styles.scss"

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/Reinaldooo"><AiOutlineGithub size="2rem" color="#e3566e"/></a>
      <a href="https://www.linkedin.com/in/reinaldo-trindade/"><AiFillLinkedin size="2rem" color="#e3566e"/></a>
    </div>
  );
}

export default Footer;
