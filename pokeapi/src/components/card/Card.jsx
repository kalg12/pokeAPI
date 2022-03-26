import React, { useEffect } from "react";

const Card = ({ arregloPokemon }) => {

  useEffect(() => {
  }, [arregloPokemon]);

  return (
    <>
      <div className="container">
        {arregloPokemon.map((x) => {
          return (
            <div className="card" style={{ width: "1000 px" }}>
              <img src={x.imagen} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">{x.nombre}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;