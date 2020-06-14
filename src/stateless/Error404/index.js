import React from "react";
import { Link } from "react-router-dom";

function Error404({ text }) {
  return (
    <div className="error">
      <div>
        <p>Ops, esta página não existe!</p>
        <p>
          Clique <Link to="/">aqui</Link> para voltar!
        </p>
      </div>
    </div>
  );
}

export default Error404;