import { Button } from '@/components';
import { colors } from '@/constants';
import { plasticService, PlasticType } from '@/services';
import { registerStyles } from '@/styles/register.styles';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function RegisterScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [plastics, setPlastics] = useState<PlasticType[]>([]);
  const [plasticQuantities, setPlasticQuantities] = useState<Record<number, number>>({});

  useEffect(() => {
    loadPlastics();
  }, []);

  const loadPlastics = async () => {
    try {
      const data = await plasticService.getAllPlastics();
      setPlastics(data);
      const initialQuantities: Record<number, number> = {};
      data.forEach(p => initialQuantities[p.id] = 0);
      setPlasticQuantities(initialQuantities);
    } catch (error) {
      console.error('Error loading plastics:', error);
      Alert.alert('Error', 'No se pudieron cargar los tipos de plástico');
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = () => {
    return plastics.reduce((total, plastic) => {
      const quantity = plasticQuantities[plastic.id] || 0;
      return total + (quantity * plastic.price);
    }, 0);
  };

  const calculatePlasticValue = (plasticId: number, pricePerKg: number) => {
    const quantity = plasticQuantities[plasticId] || 0;
    return quantity * pricePerKg;
  };

  const generateFolio = () => {
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substring(2, 9).toUpperCase();
    return `Folio ${timestamp.slice(-6)}${random.slice(0, 3)}`;
  };

  const incrementQuantity = (plasticId: number) => {
    setPlasticQuantities(prev => ({
      ...prev,
      [plasticId]: (prev[plasticId] || 0) + 1
    }));
  };

  const decrementQuantity = (plasticId: number) => {
    setPlasticQuantities(prev => ({
      ...prev,
      [plasticId]: Math.max(0, (prev[plasticId] || 0) - 1)
    }));
  };

  const handleContinue = () => {
    const hasPlastics = Object.values(plasticQuantities).some(quantity => quantity > 0);

    if (!hasPlastics) {
      Alert.alert('Error', 'Debes registrar al menos un plástico para continuar');
      return;
    }

    const folio = generateFolio();

    const selectedPlastics = plastics.map(p => ({
      id: p.id,
      name: p.name,
      quantity: plasticQuantities[p.id] || 0,
      value: calculatePlasticValue(p.id, p.price),
      pricePerKg: p.price
    }));

    const deliveryData = {
      folio: folio,
      totalGenerated: calculateTotal().toString(),
      plasticsData: JSON.stringify(selectedPlastics)
    };

    router.push({
      pathname: '/(app)/deliverySummary',
      params: deliveryData,
    });
};

  if (loading) {
    return (
      <View style={[registerStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={colors.primary.normal} />
      </View>
    );
  }

  return (
    <View style={registerStyles.container}>
      <View style={registerStyles.header}>
        <TouchableOpacity
          onPress={() => router.replace('/(app)/homeDeliver')}
          style={registerStyles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color={colors.texts.dark} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={registerStyles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={registerStyles.scrollContent}
      >
        <Text style={registerStyles.title}>Agrega una entrega</Text>
        <Text style={registerStyles.subtitle}>
          Ingresa los kilogramos de plástico del plastiamigo
        </Text>

        <Text style={registerStyles.totalGenerated}>
          <Text style={registerStyles.totalAmount}>${calculateTotal()}</Text> generados
        </Text>

        <View style={registerStyles.plasticsContainer}>
          {plastics.map((plastic) => (
            <View key={plastic.id} style={registerStyles.plasticRow}>
              <View style={registerStyles.plasticInfo}>
                <Text style={registerStyles.plasticName}>{plastic.name}</Text>
                <Text style={registerStyles.plasticPrice}>
                  ${plastic.price} por KG
                </Text>
              </View>

              <View style={registerStyles.counterContainer}>
                <Pressable
                  onPress={() => decrementQuantity(plastic.id)}
                  style={({ pressed }) => [
                    registerStyles.counterButton,
                    pressed && registerStyles.counterButtonPressed
                  ]}
                >
                  <Ionicons name="remove" size={20} color={colors.white} />
                </Pressable>

                <Text style={registerStyles.quantity}>
                  {plasticQuantities[plastic.id] || 0}
                </Text>

                <Pressable
                  onPress={() => incrementQuantity(plastic.id)}
                  style={({ pressed }) => [
                    registerStyles.counterButton,
                    pressed && registerStyles.counterButtonPressed
                  ]}
                >
                  <Ionicons name="add" size={20} color={colors.white} />
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={registerStyles.buttonContainer}>
        <Button label="Continuar" onPress={handleContinue} />
      </View>
    </View>
  );
}