import { useEffect, useState } from "react";
import { mapToPokemon } from "../utils/mapToPokemon";
import { Pokemon } from "../types/pokemon";
import { PokemonDto } from "../types/pokeApi/pokemonDto";

export type usePokemonProps = {
    nombre: string;
}

export default function usePokemon({ nombre }: usePokemonProps) {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPokemon = async () => {
        try {
            setCargando(true);
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`
            );
            if (!response.ok) throw new Error(`Error ${response.status}`);
            const data: PokemonDto = await response.json();
            setPokemon(mapToPokemon(data));
        } catch (e) {
            setError((e as Error).message);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, [nombre]);

    return { pokemon, cargando, error };
}