import React, { useEffect } from "react";

const Card = ({ arregloPokemon }) => {

  useEffect(() => {
  }, [arregloPokemon]);

  return (
    <>
      <div className="container">
        {arregloPokemon.map((pokemon, index) => {
          return (
            <div className="card" key={index}>
              <div className="card-image">
                <img src={pokemon.imagen} alt="pokemon" />
              </div>
              <div className="card-content">
                <span className="card-title">{pokemon.nombre}</span>
              </div>
            </div>
          );
        }
        )}
      </div>
    </>
  );
};

export default Card;