import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '@/components';
import { barterSummaryStyles } from '@/styles/barter.summary.styles';
import { colors } from '@/constants';

export default function BarterSummaryScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  

  const folioIngresado = params.folioIngresado as string || '';
  const petKg = parseFloat(params.petKg as string) || 10;
  const pebdKg = parseFloat(params.pebdKg as string) || 10;
  const ppKg = parseFloat(params.ppKg as string) || 10;
  const petValue = parseFloat(params.petValue as string) || 10;
  const pebdValue = parseFloat(params.pebdValue as string) || 10;
  const ppValue = parseFloat(params.ppValue as string) || 10;
  const totalGenerated = 100;
  

  const selectedProductsStr = params.selectedProducts as string || '[]';
  const selectedProducts = JSON.parse(selectedProductsStr);
  

  const totalKg = petKg + pebdKg + ppKg;
  const totalBarter = selectedProducts.reduce((sum: number, product: any) => {
    return sum + (product.quantity * product.price);
  }, 0);
  

  const handleFinish = () => {

    console.log('Canje finalizado:', {
      folio: folioIngresado,
      plastics: { petKg, pebdKg, ppKg },
      products: selectedProducts,
      totalGenerated,
      totalBarter,
    });
    

    router.replace('/auth/homeDeliver');
  };

  return (
    <View style={barterSummaryStyles.container}>
      {/* Header */}
      <View style={barterSummaryStyles.header}>
        <TouchableOpacity 
          onPress={() => router.back()}
          style={barterSummaryStyles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color={colors.texts.dark} />
        </TouchableOpacity>
      </View>

      {/* Contenido */}
      <ScrollView 
        style={barterSummaryStyles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={barterSummaryStyles.scrollContent}
      >
        {/* Título */}
        <Text style={barterSummaryStyles.title}>Resumen del canje</Text>
        
        {/* Folio */}
        <Text style={barterSummaryStyles.folio}>Folio {folioIngresado}</Text>
        
        {/* Información de entrega */}
        <View style={barterSummaryStyles.deliveredSection}>
          <Text style={barterSummaryStyles.deliveredLabel}>Entregó </Text>
          <Text style={barterSummaryStyles.deliveredValue}>{totalKg} KG</Text>
        </View>
        
        {/* Tabla de plásticos */}
        <View style={barterSummaryStyles.plasticTable}>
          {/* Header de la tabla */}
          <View style={barterSummaryStyles.tableHeader}>
            <Text style={barterSummaryStyles.tableHeaderText}>Plástico</Text>
            <Text style={barterSummaryStyles.tableHeaderText}>Kg</Text>
            <Text style={barterSummaryStyles.tableHeaderText}>Valor</Text>
          </View>
          
          {/* Fila PET */}
          <View style={barterSummaryStyles.tableRow}>
            <Text style={barterSummaryStyles.tableCell}>PET</Text>
            <Text style={barterSummaryStyles.tableCell}>{petKg}</Text>
            <Text style={barterSummaryStyles.tableCell}>${petValue}</Text>
          </View>
          
          {/* Fila PEBD */}
          <View style={barterSummaryStyles.tableRow}>
            <Text style={barterSummaryStyles.tableCell}>PEBD</Text>
            <Text style={barterSummaryStyles.tableCell}>{pebdKg}</Text>
            <Text style={barterSummaryStyles.tableCell}>${pebdValue}</Text>
          </View>
          
          {/* Fila PP */}
          <View style={barterSummaryStyles.tableRow}>
            <Text style={barterSummaryStyles.tableCell}>PP</Text>
            <Text style={barterSummaryStyles.tableCell}>{ppKg}</Text>
            <Text style={barterSummaryStyles.tableCell}>${ppValue}</Text>
          </View>
        </View>
        
        {/* Total generado */}
        <View style={barterSummaryStyles.totalGeneratedSection}>
          <Text style={barterSummaryStyles.totalGeneratedLabel}>Total generado: </Text>
          <Text style={barterSummaryStyles.totalGeneratedValue}>${totalGenerated}</Text>
        </View>
        
        {/* Sección de canjeado */}
        <View style={barterSummaryStyles.barterSection}>
          <Text style={barterSummaryStyles.barterTitle}>Canjeado por:</Text>
          
          {/* Tabla de productos */}
          <View style={barterSummaryStyles.productsTable}>
            {/* Header */}
            <View style={barterSummaryStyles.tableHeader}>
              <Text style={barterSummaryStyles.tableHeaderText}>Producto</Text>
              <Text style={barterSummaryStyles.tableHeaderText}>Cantidad</Text>
              <Text style={barterSummaryStyles.tableHeaderText}>Total</Text>
            </View>
            
            {/* Productos seleccionados */}
            {selectedProducts.map((product: any, index: number) => (
              <View key={index} style={barterSummaryStyles.productRow}>
                <Text style={barterSummaryStyles.productCell}>{product.name}</Text>
                <Text style={barterSummaryStyles.productCell}>{product.quantity}</Text>
                <Text style={barterSummaryStyles.productCell}>${product.quantity * product.price}</Text>
              </View>
            ))}
          </View>
        </View>
        
        {/* Total canjeado */}
        <View style={barterSummaryStyles.totalBarterSection}>
          <Text style={barterSummaryStyles.totalBarterLabel}>Total canjeado: </Text>
          <Text style={barterSummaryStyles.totalBarterValue}>${totalBarter}</Text>
        </View>
      </ScrollView>

      {/* Botón fijo en la parte inferior */}
      <View style={barterSummaryStyles.buttonContainer}>
        <Button label="Finalizar" onPress={handleFinish} />
      </View>
    </View>
  );
}