import { StyleSheet } from 'react-native';
import { colors } from '@/constants';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    justifyContent: 'center',
    paddingTop: 60,
    marginBottom: 140
  },
  logoContainer: {
    alignItems: 'flex-start',
    marginBottom: 60,
    paddingLeft: 0,
  },
  logo: {
    width: 380,
    height: 95,
    resizeMode: 'contain',
  },
  welcomeContainer: {
    marginBottom: 24,
  },
  welcomeTitle: {
    fontSize: 31,
    fontWeight: '700',
    color: colors.texts.dark,
    marginBottom: 8,
    letterSpacing: 0,
  },
  welcomeSubtitle: {
    fontSize: 18,
    color: colors.texts.normal,
    fontWeight: '400',
    lineHeight: 20,
    marginBottom: 6
  },
  form: {
    width: '100%',
    gap: 26,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingLogo: {
    width: 250,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 17,
    fontWeight: '500',
    color: colors.texts.normal,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 70, 
  },
});