import { colors } from '@/constants';
import { logoutModalStyles } from '@/styles/logout.modal.styles';
import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';

interface LogoutModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const LogoutModal: React.FC<LogoutModalProps> = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={logoutModalStyles.modalOverlay}>
        <View style={logoutModalStyles.modalContent}>
          <Text style={logoutModalStyles.modalTitle}>¿Está seguro que desea cerrar sesión?</Text>
          
          <Text style={logoutModalStyles.modalMessage}>
            Se cerrará tu sesión actual y deberás volver a iniciar sesión para acceder nuevamente.{'\n'}
            ¿Estás seguro de que quieres continuar?
          </Text>

          <Pressable
            style={({ pressed }) => [
              logoutModalStyles.confirmButton,
              pressed && logoutModalStyles.confirmButtonPressed,
            ]}
            onPress={onConfirm}
          >
            <Text style={logoutModalStyles.confirmButtonText}>Sí, continuar</Text>
          </Pressable>

          <Pressable
            style={logoutModalStyles.cancelButton}
            onPress={onCancel}
          >
            <Text style={logoutModalStyles.cancelButtonText}>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};