import React from "react";
import { BotonRedireccionar } from "../components/BotonRedireccionar";

export const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Bienvenido</h1>
        <p className="lead">
          En esta página podrá visualizar personajes de Pokémon y Star Wars
        </p>
        <hr className="my-4" />

        <div className="row center d-flex justify-content-center">
          <BotonRedireccionar page="StarWars" />
          <BotonRedireccionar page="Pokemon" />
        </div>
      </div>
    </div>
  );
};
