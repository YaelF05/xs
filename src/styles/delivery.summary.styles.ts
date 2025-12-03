import { colors } from '@/constants';
import { StyleSheet } from 'react-native';


export const deliverySummaryStyles = StyleSheet.create({
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
  scrollContent: {
    paddingBottom: 100,
  },


  title: {
    fontSize: 31,
    fontWeight: '700',
    color: colors.texts.dark,
    marginBottom: 16,
    marginTop: 8,
  },

  folio: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.primary.dark,
    marginBottom: 24,
  },


  deliveredSection: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 32,
  },
  deliveredLabel: {
    fontSize: 22,
    fontWeight: '400',
    color: colors.texts.dark,
  },
  deliveredValue: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.primary.normal,
  },


  table: {
    marginBottom: 32,
  },
  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginBottom: 8,
  },
  tableHeaderText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.texts.dark,
    flex: 1,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  tableCell: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.texts.dark,
    flex: 1,
  },


  totalSection: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 16,
  },
  totalLabel: {
    fontSize: 22,
    fontWeight: '400',
    color: colors.texts.dark,
  },
  totalValue: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.primary.normal,
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
    borderTopWidth: 1,
    borderTopColor: colors.white,
  },
});