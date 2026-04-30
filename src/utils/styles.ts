import { StyleSheet } from 'react-native';
import type { Theme } from '../constants/theme';
import { spacing } from '../constants/spacing';

// ─── Sombras reutilizables ────────────────────────────────────────────────────
export const shadows = {
  sm: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  md: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  lg: {
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
  },
} as const;

// ─── Radios de borde ─────────────────────────────────────────────────────────
export const radii = {
  sm:   6,
  md:   12,
  lg:   20,
  full: 999,
} as const;

// ─── Estilos de layout comunes ────────────────────────────────────────────────
export const layout = StyleSheet.create({
  flex1:        { flex: 1 },
  center:       { alignItems: 'center', justifyContent: 'center' },
  row:          { flexDirection: 'row', alignItems: 'center' },
  spaceBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  screenPad:    { paddingHorizontal: spacing.lg, paddingVertical: spacing.md },
});

// ─── Fábrica de estilos temáticos ─────────────────────────────────────────────
// Uso: const s = makeStyles(theme);  luego: <View style={s.card} />
export function makeStyles(theme: Theme) {
  return StyleSheet.create({
    // Pantallas
    screen: {
      flex: 1,
      backgroundColor: theme.background,
    },
    screenPadded: {
      flex: 1,
      backgroundColor: theme.background,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
    },

    // Tarjetas
    card: {
      backgroundColor: theme.backgroundCard,
      borderRadius: radii.md,
      padding: spacing.md,
      ...shadows.md,
    },
    cardSmall: {
      backgroundColor: theme.backgroundCard,
      borderRadius: radii.sm,
      padding: spacing.sm,
      ...shadows.sm,
    },

    // Textos
    textPrimary: {
      color: theme.textPrimary,
    },
    textSecondary: {
      color: theme.textSecondary,
    },

    // Separador
    divider: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: theme.border,
      marginVertical: spacing.sm,
    },

    // Input
    input: {
      backgroundColor: theme.backgroundInput,
      borderRadius: radii.sm,
      borderWidth: 1,
      borderColor: theme.border,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      color: theme.textPrimary,
      fontSize: 14,
    },
  });
}
