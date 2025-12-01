import { StyleSheet } from 'react-native';
import { colors } from '@/constants';

export const barterSummaryStyles = StyleSheet.create({
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
    fontSize: 28,
    fontWeight: '700',
    color: colors.texts.dark,
    marginBottom: 8,
    marginTop: 8,
  },

  folio: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.primary.dark,
    marginBottom: 24,
  },

  deliveredSection: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 24,
  },
  deliveredLabel: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.texts.dark,
  },
  deliveredValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary.normal,
  },

  plasticTable: {
    marginBottom: 24,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginBottom: 8,
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.texts.dark,
    flex: 1,
    textAlign: 'left',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  tableCell: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.texts.dark,
    flex: 1,
    textAlign: 'left',
  },

  totalGeneratedSection: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 32,
  },
  totalGeneratedLabel: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.texts.dark,
  },
  totalGeneratedValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary.normal,
  },

  barterSection: {
    marginBottom: 24,
  },
  barterTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.texts.dark,
    marginBottom: 16,
  },

  productsTable: {
    marginBottom: 24,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  productCell: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.texts.dark,
    flex: 1,
    textAlign: 'left',
  },
  
  totalBarterSection: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 8,
  },
  totalBarterLabel: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.texts.dark,
  },
  totalBarterValue: {
    fontSize: 18,
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
    borderTopColor: '#F3F4F6',
  },
});