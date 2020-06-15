import React, { useState } from "react";

function ImgWithLoader(props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {loaded ? null : (
        <img src="https://via.placeholder.com/470x594/FFFFFF/?text=Carregando..." alt=""/>
      )}
      <img
        style={loaded ? {} : { display: "none" }}
        onLoad={() => setLoaded(true)}
        alt={props.alt ? props.alt : ""}
        {...props}
      />
    </>
  );
};

export default ImgWithLoader;