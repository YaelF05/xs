import { StyleSheet } from 'react-native';
import { colors } from '@/constants';

export const deliveryModalStyles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    alignItems: 'flex-start',
  },
  modalTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.texts.dark,
    marginBottom: 16,
    textAlign: 'right',
  },
  modalNote: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.texts.normal,
    marginBottom: 24,
    textAlign: 'left',
    lineHeight: 22,
  },
  okButton: {
    backgroundColor: colors.primary.normal,
    width: '100%',
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  okButtonPressed: {
    opacity: 0.9,
  },
  okButtonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
});