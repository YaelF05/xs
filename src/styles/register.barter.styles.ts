import { StyleSheet } from 'react-native';
import { colors } from '@/constants';

/**
 * Estilos para la pantalla de registro de canje
 */

export const registerBarterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  // Header
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

  // Contenido
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },

  // Título
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary.dark,
    marginBottom: 8,
    marginTop: 8,
  },

  // Subtítulo
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.texts.dark,
    marginBottom: 16,
  },

  // Información de KG y valores
  infoRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: '700',
    marginRight: 4,
  },
  infoLabelPrimary: {
    color: colors.primary.normal,
  },
  infoLabelGreen: {
    color: colors.primary.normal,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.texts.dark,
  },

  // Barra de búsqueda y filtro
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 16,
    marginBottom: 24,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 8,
    borderWidth: 1.3,
    borderColor: colors.texts.dark,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: colors.texts.dark,
    padding: 0,
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1.3,
    borderColor: colors.texts.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Lista de productos
  productsContainer: {
    gap: 16,
  },

  // Producto individual
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.texts.dark,
    marginBottom: 2,
  },
  productCategory: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.texts.normal,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.texts.dark,
  },

  // Contador de producto
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  counterButton: {
    width: 32,
    height: 32,
    borderRadius: 4,
    backgroundColor: colors.primary.normal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterButtonPressed: {
    opacity: 0.8,
  },
  quantity: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary.normal,
    minWidth: 30,
    textAlign: 'center',
  },

  // Botón fijo
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