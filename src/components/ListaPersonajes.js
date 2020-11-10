import React from "react";
import PropTypes from "prop-types";

export const ListaPersonajes = ({ personajes, serie }) => {
  return (
    <div>
      <ul className="list-group lista-container">
        <li className="list-group-item list-group-item-secondary">
          Personajes {serie}
        </li>
        <div className="lista-personajes-content lista-personajes">
          {personajes.length > 1 &&
            personajes.map((personaje, i) => {
              return (
                <li className="list-group-item" key={i}>
                  {personaje.name && personaje.name}
                </li>
              );
            })}
        </div>
      </ul>
    </div>
  );
};

ListaPersonajes.propTypes = {
  personajes: PropTypes.array.isRequired,
  serie: PropTypes.string.isRequired,
};
