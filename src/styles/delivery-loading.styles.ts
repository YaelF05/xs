import { StyleSheet } from 'react-native';
import { colors } from '@/constants';

/**
 * Estilos para la pantalla de carga de entrega
 */

export const deliveryLoadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bottleContainer: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.secondary.normal,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
});