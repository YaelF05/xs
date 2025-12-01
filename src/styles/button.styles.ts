import { StyleSheet } from 'react-native';
import { colors } from '@/constants';

export const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary.normal,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  buttonText: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0,
    fontFamily: 'Arimo',
  },
});