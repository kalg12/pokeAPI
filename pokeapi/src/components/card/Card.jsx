import React from 'react'

const Card = (props) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">{props.descripcion}</p>
        </div>
      </div>
    </div>
  )
}

export default Card