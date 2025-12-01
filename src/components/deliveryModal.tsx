import React from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import { deliveryModalStyles } from '@/styles/delivery.modal.styles';

type DeliveryModalProps = {
  visible: boolean;
  onClose: () => void;
};

export function DeliveryModal({ visible, onClose }: DeliveryModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={deliveryModalStyles.modalOverlay}>
        <View style={deliveryModalStyles.modalContent}>
          <Text style={deliveryModalStyles.modalTitle}>Entrega finalizada</Text>
          
          <Text style={deliveryModalStyles.modalNote}>
            Nota: Debes notificar al plastiamigo que debe mostrar su folio para el canjeo de sus pesos
          </Text>
          
          <Pressable
            style={({ pressed }) => [
              deliveryModalStyles.okButton,
              pressed && deliveryModalStyles.okButtonPressed
            ]}
            onPress={onClose}
          >
            <Text style={deliveryModalStyles.okButtonText}>Ok</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}