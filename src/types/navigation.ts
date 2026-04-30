import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SPLASH, MAIN, POKEDEX_TAB, AJUSTES_TAB, HOME_TAB, DETALLE, POKEDEX } from '../constants/navigation';
import { Pokemon } from './pokemon';

// Root Stack: Splash → aplicación principal
export type RootStackParamList = {
  [SPLASH]: undefined;
  [MAIN]:   undefined;
};

// Bottom Tabs: Pokédex + Ajustes
export type TabsParamList = {
  [HOME_TAB]: undefined;
  [POKEDEX_TAB]: undefined;
  [AJUSTES_TAB]: undefined;
};

// Pokédex Stack (dentro del tab Pokédex)
export type PokedexStackParamList = {
  [POKEDEX]: undefined;
  [DETALLE]: { pokemon : Pokemon};
};

// Props de cada pantalla
export type SplashScreenProps =
  NativeStackScreenProps<RootStackParamList, typeof SPLASH>;
export type PokedexScreenProps =
  NativeStackScreenProps<PokedexStackParamList, typeof POKEDEX>;
export type DetallePokemonScreenProps =
  NativeStackScreenProps<PokedexStackParamList, typeof DETALLE>;