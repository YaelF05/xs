import { StyleSheet } from 'react-native';
import { colors } from '@/constants';

/**
 * Estilos exactos para el Button según el diseño
 */

export const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary.normal,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  buttonText: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0,
  },
});