import { BottleLoadingAnimation, Button, DeliveryModal } from '@/components';
import { colors } from '@/constants';
import { plasticService } from '@/services';
import { authService } from '@/services/auth.service';
import { deliveryLoadingStyles } from '@/styles/delivery.loading.styles';
import { deliverySummaryStyles } from '@/styles/delivery.summary.styles';
import { UserRoles } from '@/types/user';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface SelectedPlastic {
  id: number;
  name: string;
  quantity: number;
  value: number;
  pricePerKg: number;
}

export default function DeliverySummaryScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mergedPlastics, setMergedPlastics] = useState<SelectedPlastic[]>([]);
  const [totalGenerated, setTotalGenerated] = useState<string>('0');
  const [userRole, setUserRole] = useState<UserRoles | null>(null);

  const folio = params.folio as string;
  const passedPlastics: SelectedPlastic[] = params.plasticsData ? JSON.parse(params.plasticsData as string) : [];

  useEffect(() => {
    loadFreshData();
    loadUserRole();
  }, []);

  const loadUserRole = async () => {
    const role = await authService.getUserRole();
    setUserRole(role);
  };

  const loadFreshData = async () => {
    try {
      const apiPlastics = await plasticService.getAllPlastics();

      const merged = apiPlastics.map(apiPlastic => {
        const passed = passedPlastics.find(p => p.id === apiPlastic.id);
        const quantity = passed ? passed.quantity : 0;

        return {
          id: apiPlastic.id,
          name: apiPlastic.name,
          quantity: quantity,
          value: quantity * apiPlastic.price,
          pricePerKg: apiPlastic.price
        };
      });

      setMergedPlastics(merged);

      const newTotal = merged.reduce((acc, curr) => acc + curr.value, 0);
      setTotalGenerated(newTotal.toString());

    } catch (error) {
      console.error('Error refreshing data:', error);
      Alert.alert('Error', 'No se pudieron actualizar los datos de la entrega');

      setMergedPlastics(passedPlastics);
      setTotalGenerated(params.totalGenerated as string);
    } finally {
      setLoading(false);
    }
  };

  const totalKg = mergedPlastics.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleFinish = async () => {
    try {
      // Extract number from "Folio X"
      const folioNumber = parseInt(folio.replace('Folio ', ''), 10);
      if (!isNaN(folioNumber)) {
        await AsyncStorage.setItem('last_folio_number', folioNumber.toString());
      }
    } catch (e) {
      console.error("Failed to save folio", e);
    }
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    if (userRole === UserRoles.ADMIN) {
      router.replace('/(app)/homeAdmin');
    } else {
      router.replace('/(app)/homeDeliver');
    }
  };

  if (loading) {
    return (
      <View style={deliveryLoadingStyles.container}>
        <View style={deliveryLoadingStyles.bottleContainer}>
          <BottleLoadingAnimation />
        </View>
        <Text style={deliveryLoadingStyles.loadingText}>
          Generando entrega...
        </Text>
      </View>
    );
  }

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

        <Text style={deliverySummaryStyles.folio}>{folio}</Text>

        <View style={deliverySummaryStyles.deliveredSection}>
          <Text style={deliverySummaryStyles.deliveredLabel}>Entregó </Text>
          <Text style={deliverySummaryStyles.deliveredValue}>{totalKg} KG</Text>
        </View>

        <View style={deliverySummaryStyles.table}>
          <View style={deliverySummaryStyles.tableHeader}>
            <Text style={[deliverySummaryStyles.tableHeaderText, { textAlign: 'left' }]}>Plástico</Text>
            <Text style={[deliverySummaryStyles.tableHeaderText, { textAlign: 'center' }]}>Kg</Text>
            <Text style={[deliverySummaryStyles.tableHeaderText, { textAlign: 'right' }]}>Valor</Text>
          </View>

          {mergedPlastics.map((plastic) => (
            <View key={plastic.id} style={deliverySummaryStyles.tableRow}>
              <Text style={[deliverySummaryStyles.tableCell, { textAlign: 'left' }]}>{plastic.name}</Text>
              <Text style={[deliverySummaryStyles.tableCell, { textAlign: 'center' }]}>{plastic.quantity}</Text>
              <Text style={[deliverySummaryStyles.tableCell, { textAlign: 'right' }]}>$ {plastic.value}</Text>
            </View>
          ))}
        </View>

        <View style={deliverySummaryStyles.totalSection}>
          <Text style={deliverySummaryStyles.totalLabel}>Total generado: </Text>
          <Text style={deliverySummaryStyles.totalValue}>${totalGenerated}</Text>
        </View>
      </ScrollView>

      <View style={deliverySummaryStyles.buttonContainer}>
        <Button label="Finalizar" onPress={handleFinish} />
      </View>

      <DeliveryModal visible={modalVisible} onClose={handleCloseModal} />
    </View>
  );
}