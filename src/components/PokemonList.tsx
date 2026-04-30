import { FlatList } from "react-native";
import PokemonListItem from "./PokemonListItem"; // El molde de la tarjeta
import usePokemons from "../hooks/usePokemons";   // El hook que trae los datos

export default function PokemonList() {
    // Obtengo el array de datos (el "bucle" se basa en esto)
    const [pokemons] = usePokemons();

    return (
          <FlatList
            data={pokemons}
            renderItem={({ item }) => <PokemonListItem pokemon={item} />}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingVertical: 8 }}
            numColumns={2}  // ← esto es todo lo que cambia aquí
        />
    );
}
