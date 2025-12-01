import { StyleSheet } from 'react-native';
import { colors } from '@/constants';

export const logoutModalStyles = StyleSheet.create({
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
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.texts.dark,
    marginBottom: 16,
    textAlign: 'left',
    lineHeight: 28,
  },
  modalMessage: {
    fontSize: 22,
    fontWeight: '400',
    color: colors.texts.normal,
    marginBottom: 24,
    textAlign: 'left',
    lineHeight: 22,
  },
  confirmButton: {
    backgroundColor: '#D97878',
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  confirmButtonPressed: {
    opacity: 0.9,
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#00B0E8',
    fontSize: 18,
    fontWeight: '600',
  },
});