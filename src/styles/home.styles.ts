import { StyleSheet } from 'react-native';
import { colors } from '@/constants';

/**
 * Estilos para la pantalla de Home
 */

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 16,
    backgroundColor: colors.primary.light, // Azul claro
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primary.normal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  userName: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.texts.dark,
  },
  addButton: {
    backgroundColor: colors.primary.normal,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 6,
    width: 155,
    height: 35,
    alignItems: 'center'
  },
  addButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '800',
    marginTop: -5,
    fontFamily: 'Arimo'
  },
  // Contenido principal
  content: {
    flex: 1,
    backgroundColor: colors.white,
  },
  // Tabs centrados sin línea inferior
  tabs: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 14,
    gap: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    paddingBottom: 0,
  },
  tabActive: {
    // Sin border inferior
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#9CA3AF',
  },
  tabTextActive: {
    fontWeight: '700',
    color: colors.texts.dark,
  },
});