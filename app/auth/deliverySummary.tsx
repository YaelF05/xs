import { Button, DeliveryModal } from '@/components';
import { colors } from '@/constants';
import { deliverySummaryStyles } from '@/styles/delivery.summary.styles';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function DeliverySummaryScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState(false);


  //const folio = params.folio as string || '1';
  //const petKg = parseFloat(params.petKg as string) || 0;
  const pebdKg = parseFloat(params.pebdKg as string) || 0;
  const ppKg = parseFloat(params.ppKg as string) || 0;
  //const petValue = parseFloat(params.petValue as string) || 0;
  const pebdValue = parseFloat(params.pebdValue as string) || 0;
  const ppValue = parseFloat(params.ppValue as string) || 0;
  //const totalGenerated = parseFloat(params.totalGenerated as string) || 0;
  //const totalKg = petKg + pebdKg + ppKg;


  const handleFinish = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    router.replace('/auth/homeDeliver');
  };

  return (
    <View style={deliverySummaryStyles.container}>

      <View style={deliverySummaryStyles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={deliverySummaryStyles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color={colors.texts.dark} />
        </TouchableOpacity>
      </View>


      <ScrollView
        style={deliverySummaryStyles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={deliverySummaryStyles.scrollContent}
      >

        <Text style={deliverySummaryStyles.title}>Resumen de entrega</Text>


        <Text style={deliverySummaryStyles.folio}>Folio 1</Text>


        <View style={deliverySummaryStyles.deliveredSection}>
          <Text style={deliverySummaryStyles.deliveredLabel}>Entregó </Text>
          <Text style={deliverySummaryStyles.deliveredValue}>2 KG</Text>
        </View>


        <View style={deliverySummaryStyles.table}>

          <View style={deliverySummaryStyles.tableHeader}>
            <Text style={deliverySummaryStyles.tableHeaderText}>Plástico</Text>
            <Text style={deliverySummaryStyles.tableHeaderText}>Kg</Text>
            <Text style={deliverySummaryStyles.tableHeaderText}>Valor</Text>
          </View>


          <View style={deliverySummaryStyles.tableRow}>
            <Text style={deliverySummaryStyles.tableCell}>PET</Text>
            <Text style={deliverySummaryStyles.tableCell}>2</Text>
            <Text style={deliverySummaryStyles.tableCell}>$ 16</Text>
          </View>


          <View style={deliverySummaryStyles.tableRow}>
            <Text style={deliverySummaryStyles.tableCell}>PEBD</Text>
            <Text style={deliverySummaryStyles.tableCell}>{pebdKg}</Text>
            <Text style={deliverySummaryStyles.tableCell}>$ {pebdValue}</Text>
          </View>

          <View style={deliverySummaryStyles.tableRow}>
            <Text style={deliverySummaryStyles.tableCell}>PP</Text>
            <Text style={deliverySummaryStyles.tableCell}>{ppKg}</Text>
            <Text style={deliverySummaryStyles.tableCell}>$ {ppValue}</Text>
          </View>
        </View>


        <View style={deliverySummaryStyles.totalSection}>
          <Text style={deliverySummaryStyles.totalLabel}>Total generado: </Text>
          <Text style={deliverySummaryStyles.totalValue}>$16</Text>
        </View>
      </ScrollView>


      <View style={deliverySummaryStyles.buttonContainer}>
        <Button label="Finalizar" onPress={handleFinish} />
      </View>

      <DeliveryModal visible={modalVisible} onClose={handleCloseModal} />
    </View>
  );
}