import React from "react";
import { GoBackButton } from "../components/GoBackButton";
import { ListaPersonajes } from "../components/ListaPersonajes";
import { useFetch } from "../hooks/useFetch";

export const Starwars = () => {
  const url = `https://swapi.dev/api/people/`;

  const { data, loading, error } = useFetch(url);

  const starWarsCharacters = !!data && data.results;

  if (error) {
    throw new Error(error);
  } else {
    return (
      <>
        {loading ? (
          <div className="alert alert-primary p-4" role="alert">
            Cargando...
          </div>
        ) : (
          <div>
            <GoBackButton />
            <h2 className="ml-3">Personajes de StarWars!</h2>
            <ListaPersonajes personajes={starWarsCharacters} serie="StarWars" />
          </div>
        )}
      </>
    );
  }
};
