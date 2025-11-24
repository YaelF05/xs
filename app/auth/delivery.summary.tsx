import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '@/components';
import { deliverySummaryStyles } from '@/styles/delivery.summary.styles';
import { colors } from '@/constants';

/**
 * Pantalla de resumen de entrega
 * Muestra el folio y el detalle de los plásticos entregados
 */

export default function DeliverySummaryScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // Recuperar los datos pasados desde la pantalla anterior
  const folio = params.folio as string || 'N/A';
  const petKg = parseFloat(params.petKg as string) || 0;
  const pebdKg = parseFloat(params.pebdKg as string) || 0;
  const ppKg = parseFloat(params.ppKg as string) || 0;
  const petValue = parseFloat(params.petValue as string) || 0;
  const pebdValue = parseFloat(params.pebdValue as string) || 0;
  const ppValue = parseFloat(params.ppValue as string) || 0;
  const totalGenerated = parseFloat(params.totalGenerated as string) || 0;
  const totalKg = petKg + pebdKg + ppKg;

  // Función para finalizar y volver al home
  const handleFinish = () => {
    router.replace('/auth/home.w');
  };

  return (
    <View style={deliverySummaryStyles.container}>
      {/* Header con botón de regreso */}
      <View style={deliverySummaryStyles.header}>
        <TouchableOpacity 
          onPress={() => router.back()}
          style={deliverySummaryStyles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color={colors.texts.dark} />
        </TouchableOpacity>
      </View>

      {/* Contenido */}
      <ScrollView 
        style={deliverySummaryStyles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={deliverySummaryStyles.scrollContent}
      >
        {/* Título */}
        <Text style={deliverySummaryStyles.title}>Resumen de entrega</Text>

        {/* Folio */}
        <Text style={deliverySummaryStyles.folio}>{folio}</Text>

        {/* Entregó */}
        <View style={deliverySummaryStyles.deliveredSection}>
          <Text style={deliverySummaryStyles.deliveredLabel}>Entregó </Text>
          <Text style={deliverySummaryStyles.deliveredValue}>{totalKg} KG</Text>
        </View>

        {/* Tabla de plásticos */}
        <View style={deliverySummaryStyles.table}>
          {/* Header de la tabla */}
          <View style={deliverySummaryStyles.tableHeader}>
            <Text style={deliverySummaryStyles.tableHeaderText}>Plástico</Text>
            <Text style={deliverySummaryStyles.tableHeaderText}>Kg</Text>
            <Text style={deliverySummaryStyles.tableHeaderText}>Valor</Text>
          </View>

          {/* Fila PET */}
          <View style={deliverySummaryStyles.tableRow}>
            <Text style={deliverySummaryStyles.tableCell}>PET</Text>
            <Text style={deliverySummaryStyles.tableCell}>{petKg}</Text>
            <Text style={deliverySummaryStyles.tableCell}>$ {petValue}</Text>
          </View>

          {/* Fila PEBD */}
          <View style={deliverySummaryStyles.tableRow}>
            <Text style={deliverySummaryStyles.tableCell}>PEBD</Text>
            <Text style={deliverySummaryStyles.tableCell}>{pebdKg}</Text>
            <Text style={deliverySummaryStyles.tableCell}>$ {pebdValue}</Text>
          </View>

          {/* Fila PP */}
          <View style={deliverySummaryStyles.tableRow}>
            <Text style={deliverySummaryStyles.tableCell}>PP</Text>
            <Text style={deliverySummaryStyles.tableCell}>{ppKg}</Text>
            <Text style={deliverySummaryStyles.tableCell}>$ {ppValue}</Text>
          </View>
        </View>

        {/* Total generado */}
        <View style={deliverySummaryStyles.totalSection}>
          <Text style={deliverySummaryStyles.totalLabel}>Total generado: </Text>
          <Text style={deliverySummaryStyles.totalValue}>${totalGenerated}</Text>
        </View>
      </ScrollView>

      {/* Botón Finalizar fijo en la parte inferior */}
      <View style={deliverySummaryStyles.buttonContainer}>
        <Button label="Finalizar" onPress={handleFinish} />
      </View>
    </View>
  );
}