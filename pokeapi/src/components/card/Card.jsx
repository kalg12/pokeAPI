import React from 'react'

const Card = ({arregloPokemon}) => {
  return (
    {arregloPokemon.map(pokemon => {
      return (
      <div className="col">
      <div className="card h-100">
        <img src={arregloPokemon.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{arregloPokemon.nombre}</h5>
        </div>
      </div>
    </div>
      )
    }
    )
  }
  )
}

export default Card