import React, { useState } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { layout } from "../utils/styles";

export default function SettingsScreen() {
    const { theme, isDark, toggleMode } = useTheme();
    
    const [isPending, setIsPending] = useState(false);

    const handleSafeToggle = async () => {
        if (isPending) return;

        setIsPending(true);
        
        try {
            await toggleMode();
        } catch (error) {
            console.error("Error al cambiar el tema:", error);
        } finally {
            setTimeout(() => setIsPending(false), 500);
        }
    };

    return (
        <View style={[
            layout.center, 
            { flex: 1, backgroundColor: theme.background, paddingHorizontal: 20 }
        ]}>
            
            <Text style={{ 
                fontSize: 28, 
                fontWeight: 'bold', 
                color: theme.textPrimary,
                marginBottom: 30 
            }}>
                Configuración
            </Text>
            
            <View style={[
                styles.row, 
                { 
                    backgroundColor: theme.backgroundCard, 
                    borderColor: theme.border,
                    borderWidth: 1,
                    opacity: isPending ? 0.6 : 1 
                }
            ]}>
                <Text style={{ fontSize: 16, color: theme.textPrimary, fontWeight: '600' }}>
                    Modo Oscuro
                </Text>
                
                <Switch 
                    value={isDark} 
                    onValueChange={handleSafeToggle}
                    disabled={isPending}
                    trackColor={{ false: theme.border, true: theme.primaryLight }}
                    thumbColor={isDark ? theme.primary : '#f4f3f4'}
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={{ color: theme.textSecondary, fontSize: 12 }}>
                    Tema: {isDark ? 'Oscuro' : 'Claro'} {isPending && "(Cambiando...)"}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
        borderRadius: 20,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,

        
    }
});
