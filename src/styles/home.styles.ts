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
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: colors.white,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary.normal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  userName: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.texts.dark,
  },
  addButton: {
    backgroundColor: colors.primary.normal,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 24,
  },
  tab: {
    paddingBottom: 8,
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: colors.texts.dark,
  },
  tabText: {
    fontSize: 17,
    fontWeight: '400',
    color: colors.texts.light,
  },
  tabTextActive: {
    fontWeight: '600',
    color: colors.texts.dark,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  eventTitleContainer: {
    marginBottom: 20,
  },
  eventTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.texts.dark,
    marginBottom: 4,
  },
  eventSubtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.primary.normal,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  column: {
    flex: 1,
    gap: 12,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardLarge: {
    flex: 1,
    minHeight: 220,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.texts.dark,
    marginBottom: 16,
  },
  chartPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    minHeight: 120,
    marginVertical: 8,
  },
  placeholderText: {
    fontSize: 14,
    color: colors.texts.light,
    fontStyle: 'italic',
  },
  metaInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    gap: 4,
  },
  metaValue: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary.normal,
  },
  metaTotal: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.texts.normal,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.texts.dark,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.texts.normal,
    lineHeight: 18,
  },
  co2Container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  co2Number: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2D9F4E', // Verde para CO2
  },
  co2Label: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.texts.normal,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.texts.dark,
    marginBottom: 16,
  },
});