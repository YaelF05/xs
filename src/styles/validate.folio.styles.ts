import { StyleSheet } from 'react-native';
import { colors } from '@/constants';

export const validateFolioStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 12,
    backgroundColor: colors.white,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: colors.texts.dark,
    marginBottom: 8,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.texts.normal,
    marginBottom: 32,
    lineHeight: 24,
  },
  
  input: {
    width: '100%',
    height: 40,
    fontSize: 15,
    borderRadius: 8,
    borderWidth: 1.3,
    borderColor: colors.texts.dark,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    color: colors.texts.dark,
    marginBottom: 0,
  },
  
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
  },
});