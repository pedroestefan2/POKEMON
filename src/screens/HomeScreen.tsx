import { Text, View, ImageBackground, StyleSheet } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { layout, makeStyles } from "../utils/styles";

export default function HomeScreen() {
    const { theme } = useTheme();
    const s = makeStyles(theme);

    return (
        // El ImageBackground debe envolver a los demás componentes
        <ImageBackground 
        source={require("../../assets/fondopokemon.png")} 
        resizeMode="stretch" // Fuerza a la imagen a encajar, deformándola
        style={[s.screen, { width: '100%', height: '100%' }]}
    >
        <View style={[layout.center, { flex: 1 }]}>
            <Text style={s.textPrimary}>Home Screen</Text>
        </View>
    </ImageBackground>
    );
}