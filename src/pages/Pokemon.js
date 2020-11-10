import React from "react";
import { GoBackButton } from "../components/GoBackButton";
import { ListaPersonajes } from "../components/ListaPersonajes";
import { useFetch } from "../hooks/useFetch";

export const Pokemon = () => {
  const url = `https://pokeapi.co/api/v2/pokemon/`;

  const { data, loading, error } = useFetch(url);

  const pokemonCharacters = !!data && data.results;
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
            <h2 className="ml-3">Personajes de Pokémon!</h2>
            <ListaPersonajes personajes={pokemonCharacters} serie="pokemon" />
          </div>
        )}
      </>
    );
  }
};
