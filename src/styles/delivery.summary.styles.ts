import { StyleSheet } from 'react-native';
import { colors } from '@/constants';

/**
 * Estilos para la pantalla de resumen de entrega
 */

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
  
  // Título
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.texts.dark,
    marginBottom: 16,
    marginTop: 8,
  },
  
  // Folio
  folio: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary.normal,
    marginBottom: 24,
  },
  
  // Sección "Entregó"
  deliveredSection: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 32,
  },
  deliveredLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.texts.dark,
  },
  deliveredValue: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.texts.dark,
  },
  
  // Tabla
  table: {
    marginBottom: 32,
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
    paddingVertical: 16,
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
  
  // Total generado
  totalSection: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 16,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.texts.dark,
  },
  totalValue: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary.normal,
  },
  
  // Botón fijo en la parte inferior
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