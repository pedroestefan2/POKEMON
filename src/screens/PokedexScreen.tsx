import React from "react";
import { View } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { makeStyles } from "../utils/styles";
import { PokedexScreenProps } from "../types/navigation";
import PokemonList from "../components/PokemonList";

export default function PokedexScreen({ navigation }: PokedexScreenProps) {
    const { theme } = useTheme();
    const s = makeStyles(theme);

    return (
        <View style={[s.screen, { backgroundColor: theme.background }]}>
            <PokemonList /> 
        </View>
    );
}

/// Es la pantalla principal de la Pokédex.
/// Solo se encarga de poner el fondo (claro u oscuro) y de llamar a la lista.