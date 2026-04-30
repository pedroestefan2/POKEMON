import { Text, View } from "react-native";
import { DetallePokemonScreenProps } from "../types/navigation";
import { useTheme } from "../hooks/useTheme";
import { makeStyles, layout } from "../utils/styles";

export default function DetallePokemonScreen({ route }: DetallePokemonScreenProps) {
    const { pokemon } = route.params;
    const {indice} = pokemon;
    const { theme } = useTheme();
    const s = makeStyles(theme);
    return (
        <View style={[s.screen, layout.center]}>
            <Text style={s.textPrimary}>Detalle Pokemon Screen: {indice}</Text>
        </View>
    );
}