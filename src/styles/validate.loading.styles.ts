import { StyleSheet } from 'react-native';
import { colors } from '@/constants';

/**
 * Estilos para la pantalla de carga de validación de folio
 */

export const validateLoadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottleContainer: {
    marginBottom: 32,
  },
  loadingText: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.secondary.normal,
    textAlign: 'center',
  },
});