import React from 'react';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
//
import "./styles.scss"

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/Reinaldooo"><AiOutlineGithub size="40px" color="tomato"/></a>
      <a href="https://www.linkedin.com/in/reinaldo-trindade/"><AiFillLinkedin size="40px" color="tomato"/></a>
    </div>
  );
}

export default Footer;
