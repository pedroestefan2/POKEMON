import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PokemonTypeBadge from "./PokemonTypeBadge";
import { Pokemon } from "../types/pokemon";
import { tipoColor } from "../constants/tipoColor";
import { PokedexScreenProps } from "../types/navigation";
import { DETALLE } from "../constants/navigation";
import { useTheme } from "../hooks/useTheme";

export type PokemonListItemProps = {
    pokemon: Pokemon;
}

export default function PokemonListItem({ pokemon }: PokemonListItemProps) {
    const { theme } = useTheme();
    const [expanded, setExpanded] = useState(false);
    const navigation = useNavigation<PokedexScreenProps['navigation']>();

    const { nombre, icon, tipos, indice, peso, altura } = pokemon;
    const primaryColor = tipoColor[tipos[0]] || theme.primary;

    return (
        <View style={styles.container}>

            {/* View exterior: solo gestiona la sombra */}
            <View style={styles.cardShadow}>

                {/* Pressable interior: gestiona el clip de esquinas */}
                <Pressable
                    onPress={() => setExpanded(!expanded)}
                    style={[styles.card, { backgroundColor: theme.backgroundCard }]}
                >
                    <View style={[styles.colorStripe, { backgroundColor: primaryColor }]} />

                    <Image
                        source={{ uri: icon }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <View style={styles.info}>
                        <Text style={styles.index}>#{String(indice).padStart(3, '0')}</Text>
                        <Text style={[styles.name, { color: theme.textPrimary }]}>{nombre}</Text>
                        <View style={styles.badges}>
                            {tipos.map((tipo) => (
                                <PokemonTypeBadge key={tipo} tipo={tipo} />
                            ))}
                        </View>
                    </View>
                </Pressable>

            </View>

            {/* Panel expandible */}
          {/* Panel expandible */}
{expanded && (
    <View style={[
        styles.details,
        { 
            // 1. Aquí aplicamos el color dinámico al fondo
            backgroundColor: primaryColor, 
            borderLeftColor: 'rgba(0,0,0,0.2)' // Un borde sutil para dar contraste
        }
    ]}>
        <View style={styles.statsRow}>
            <View style={styles.statBox}>
                {/* 2. Cambiamos los textos a blanco (o un color claro) para que se lean bien sobre el color del tipo */}
                <Text style={[styles.statLabel, { color: 'rgba(255,255,255,0.8)' }]}>PESO</Text>
                <Text style={[styles.statValue, { color: '#fff' }]}>{peso / 10} kg</Text>
            </View>
            <View style={styles.statBox}>
                <Text style={[styles.statLabel, { color: 'rgba(255,255,255,0.8)' }]}>ALTURA</Text>
                <Text style={[styles.statValue, { color: '#fff' }]}>{altura / 10} m</Text>
            </View>
        </View>
    </View>
)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 6,
    },
    cardShadow: {
        borderRadius: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        zIndex: 2,
    },
    card: {
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 15,
        overflow: 'hidden',
        paddingVertical: 12,
    },
    colorStripe: {
        height: 6,
        alignSelf: 'stretch',
    },
    image: { width: 70, height: 70, margin: 10 },
    info: { flex: 1, paddingVertical: 12, paddingLeft: 8 },
    index: { fontSize: 12, color: '#999', fontWeight: 'bold' },
    name: { fontSize: 19, fontWeight: 'bold', textTransform: 'capitalize' },
    badges: { flexDirection: 'row', gap: 6, marginTop: 8 },
    details: {
        marginTop: -15,
        padding: 20,
        paddingTop: 30,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderLeftWidth: 6,
        zIndex: 1,
    },
    statsRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15 },
    statBox: { alignItems: 'center' },
    statLabel: { fontSize: 10, fontWeight: 'bold' },
    statValue: { fontSize: 16, fontWeight: '600' },
    btn: { padding: 12, borderRadius: 10, alignItems: 'center' },
    btnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 }
});