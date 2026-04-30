import { useEffect } from "react";
import { Text, View } from "react-native";
import { SplashScreenProps } from "../types/navigation";
import { MAIN } from "../constants/navigation";
import { useTheme } from "../hooks/useTheme";
import { makeStyles, layout } from "../utils/styles";

export default function SplashScreen({ navigation }: SplashScreenProps) {
    const { theme } = useTheme();
    const s = makeStyles(theme);

    useEffect(() => {
        const timer = setTimeout(() => navigation.navigate(MAIN), 2000);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={[s.screen, layout.center]}>
            <Text style={s.textPrimary}>Splash Screen</Text>
        </View>
    );
}