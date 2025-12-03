import React from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import { barterModalStyles } from '@/styles/barter.modal.styles';

type BarterModalProps = {
  visible: boolean;
  onClose: () => void;
};

export function BarterModal({ visible, onClose }: BarterModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={barterModalStyles.modalOverlay}>
        <View style={barterModalStyles.modalContent}>
          <Text style={barterModalStyles.modalTitle}>Canje exitoso</Text>
          
          <Text style={barterModalStyles.modalMessage}>
            El canje se ha realizado correctamente
          </Text>
          
          <Pressable
            style={({ pressed }) => [
              barterModalStyles.okButton,
              pressed && barterModalStyles.okButtonPressed
            ]}
            onPress={onClose}
          >
            <Text style={barterModalStyles.okButtonText}>Ok</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}