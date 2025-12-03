import { Button } from '@/components';
import { BarterModal } from '@/components/barterModal';
import { colors } from '@/constants';
import { authService } from '@/services/auth.service';
import { barterSummaryStyles } from '@/styles/barter.summary.styles';
import { UserRoles } from '@/types/user';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function BarterSummaryScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState(false);
  const [userRole, setUserRole] = useState<UserRoles | null>(null);

  const selectedProductsStr = params.selectedProducts as string || '[]';
  const selectedProducts = JSON.parse(selectedProductsStr);

  useEffect(() => {
    loadUserRole();
  }, []);

  const loadUserRole = async () => {
    const role = await authService.getUserRole();
    setUserRole(role);
  };

  const handleFinish = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    if (userRole === UserRoles.ADMIN) {
      router.replace('/(app)/homeAdmin');
    } else {
      router.replace('/(app)/homeTrade');
    }
  };

  return (
    <View style={barterSummaryStyles.container}>
      <View style={barterSummaryStyles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={barterSummaryStyles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color={colors.texts.dark} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={barterSummaryStyles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={barterSummaryStyles.scrollContent}
      >
        <Text style={barterSummaryStyles.title}>Resumen del canje</Text>

        <Text style={barterSummaryStyles.folio}>Folio 1</Text>

        <View style={barterSummaryStyles.deliveredSection}>
          <Text style={barterSummaryStyles.deliveredLabel}>Entregó </Text>
          <Text style={barterSummaryStyles.deliveredValue}>2 KG</Text>
        </View>

        <View style={barterSummaryStyles.plasticTable}>
          <View style={barterSummaryStyles.tableHeader}>
            <Text style={barterSummaryStyles.tableHeaderText}>Plástico</Text>
            <Text style={barterSummaryStyles.tableHeaderText}>Kg</Text>
            <Text style={barterSummaryStyles.tableHeaderText}>Valor</Text>
          </View>

          <View style={barterSummaryStyles.tableRow}>
            <Text style={barterSummaryStyles.tableCell}>PET</Text>
            <Text style={barterSummaryStyles.tableCell}>2</Text>
            <Text style={barterSummaryStyles.tableCell}>$16</Text>
          </View>

          <View style={barterSummaryStyles.tableRow}>
            <Text style={barterSummaryStyles.tableCell}>PEBD</Text>
            <Text style={barterSummaryStyles.tableCell}>0</Text>
            <Text style={barterSummaryStyles.tableCell}>$0</Text>
          </View>

          <View style={barterSummaryStyles.tableRow}>
            <Text style={barterSummaryStyles.tableCell}>PP</Text>
            <Text style={barterSummaryStyles.tableCell}>0</Text>
            <Text style={barterSummaryStyles.tableCell}>$0</Text>
          </View>
        </View>

        <View style={barterSummaryStyles.totalGeneratedSection}>
          <Text style={barterSummaryStyles.totalGeneratedLabel}>Total generado: </Text>
          <Text style={barterSummaryStyles.totalGeneratedValue}>$16</Text>
        </View>

        <View style={barterSummaryStyles.barterSection}>
          <Text style={barterSummaryStyles.barterTitle}>Canjeado por:</Text>

          <View style={barterSummaryStyles.productsTable}>
            <View style={barterSummaryStyles.tableHeader}>
              <Text style={barterSummaryStyles.tableHeaderText}>Producto</Text>
              <Text style={barterSummaryStyles.tableHeaderText}>Cantidad</Text>
              <Text style={barterSummaryStyles.tableHeaderText}>Total</Text>
            </View>

            {selectedProducts.map((product: any, index: number) => (
              <View key={index} style={barterSummaryStyles.productRow}>
                <Text style={barterSummaryStyles.productCell}>{product.name}</Text>
                <Text style={barterSummaryStyles.productCell}>{product.quantity}</Text>
                <Text style={barterSummaryStyles.productCell}>${product.quantity * product.price}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={barterSummaryStyles.totalBarterSection}>
          <Text style={barterSummaryStyles.totalBarterLabel}>Total canjeado: </Text>
          <Text style={barterSummaryStyles.totalBarterValue}>$16</Text>
        </View>
      </ScrollView>

      <View style={barterSummaryStyles.buttonContainer}>
        <Button label="Finalizar" onPress={handleFinish} />
      </View>

      <BarterModal
        visible={modalVisible}
        onClose={handleCloseModal}
      />
    </View>
  );
}