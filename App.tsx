import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import type { RootStackParamList, TabsParamList, PokedexStackParamList } from './src/types/navigation';
import { SPLASH, MAIN, POKEDEX_TAB, AJUSTES_TAB, HOME_TAB, DETALLE, POKEDEX } from './src/constants/navigation';
import SplashScreen from './src/screens/SplashScreen';
import PokedexScreen from './src/screens/PokedexScreen';
import DetallePokemonScreen from './src/screens/DetallePokemonScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { ThemeProvider, useTheme } from './src/hooks/useTheme';
import HomeScreen from './src/screens/HomeScreen';

const RootStack    = createNativeStackNavigator<RootStackParamList>();
const Tabs         = createBottomTabNavigator<TabsParamList>();
const PokedexStack = createNativeStackNavigator<PokedexStackParamList>();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name={SPLASH} component={SplashScreen} />
          <RootStack.Screen name={MAIN}   component={MainTabs} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

function MainTabs() {
  const { theme } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle:             { backgroundColor: theme.backgroundCard },
        tabBarActiveTintColor:   theme.primary,
        tabBarInactiveTintColor: theme.textSecondary,
        headerShown:             false,
      }}>
      <Tabs.Screen
        name={HOME_TAB}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={POKEDEX_TAB}
        component={PokedexStackNav}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'game-controller' : 'game-controller-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={AJUSTES_TAB}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'settings' : 'settings-outline'} size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

function PokedexStackNav() {
  const { theme } = useTheme();
  return (
    <PokedexStack.Navigator
      screenOptions={{
        headerStyle:            { backgroundColor: theme.background },
        headerTintColor:        theme.textPrimary,
        headerTitleStyle:       { fontWeight: 'bold', color: theme.textPrimary },
        headerShadowVisible:    false,
      }}>
      <PokedexStack.Screen name={POKEDEX} component={PokedexScreen} options={{ title: 'Pokédex '}} />
      <PokedexStack.Screen
        name={DETALLE}
        component={DetallePokemonScreen}
        options={({ route }) => ({ title: route.params.pokemon.nombre })}
      />
    </PokedexStack.Navigator>
  );
}
