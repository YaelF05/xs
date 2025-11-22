import { StyleSheet } from 'react-native';
import { colors } from '@/constants';

/**
 * Estilos exactos para el Input según el diseño
 */

export const inputStyles = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
  input: {
    width: '100%',
    height: 40,
    fontSize: 15,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: colors.texts.light,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    color: colors.texts.dark,
  },
  inputFocused: {
    borderColor: colors.primary.normal,
    borderWidth: 1.5,
  },
  inputError: {
    borderColor: '#EF4444',
    borderWidth: 1.5,
  },
  errorText: {
    color: '#EF4444',
    fontSize: 13,
    marginTop: 6,
    marginLeft: 4,
  },
});