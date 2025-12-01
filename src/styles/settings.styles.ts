import { StyleSheet } from 'react-native';
import { colors } from '@/constants';

export const settingsStyles = StyleSheet.create({
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
    paddingTop: 8,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: colors.texts.dark,
    marginBottom: 32,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.texts.dark,
  },
  logoutButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
  },
  logoutButton: {
    backgroundColor: '#D97878',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButtonPressed: {
    opacity: 0.9,
  },
  logoutButtonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
});