import { useEffect, useState } from "react";
import { PokemonDto } from "../types/pokeApi/pokemonDto";
import { mapToPokemons } from "../utils/mapToPokemon";
import { Pokemon } from "../types/pokemon";
import { GetPokemonsResponse } from "../types/pokeApi/getPokemonsResponse";
import { GetPokemonResponse } from "../types/pokeApi/getPokemonResponse";

export type usePokemonsProps = {
    page: number;
    pageSize: number;
}

export const DEFAULT_USE_POKEMONS_PROPS: usePokemonsProps = {
    page: 1,
    pageSize: 20,
}

export default function usePokemons({ page, pageSize }: usePokemonsProps = DEFAULT_USE_POKEMONS_PROPS) {
    const limit = pageSize;
    const offset = (page - 1) * pageSize;
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    
    const fetchPokemons = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            const data: GetPokemonsResponse = await response.json();

            const pokemonsWithDetails: PokemonDto[] = await Promise.all(
                data.results.map(async (pokemon) => {
                    const detailsResponse = await fetch(pokemon.url);
                    const detailsData: GetPokemonResponse = await detailsResponse.json();
                    return detailsData;
                })
            );

            setPokemons(mapToPokemons(pokemonsWithDetails));
        } catch (error) {
            throw new Error(`Error fetching pokemons: ${error}`);
        }
    }

    useEffect(() => {
        fetchPokemons();
    }, [page, pageSize]);

    return [pokemons];
}


// ESTA CLASE DESCARGA LOS DATOS DE LA API  (peticionf etch...)