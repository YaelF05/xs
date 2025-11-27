import { Button } from '@/components';
import { colors } from '@/constants';
import { registerStyles } from '@/styles/register.styles';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';


const PLASTIC_TYPES = [
  { id: 'PET', name: 'PET', pricePerKg: 8 },
  { id: 'PEBD', name: 'PEBD', pricePerKg: 6 },
  { id: 'PP', name: 'PP', pricePerKg: 4 },
];

export default function RegisterScreen() {
  const router = useRouter();

  // Estado para almacenar los kilogramos de cada tipo de plástico
  const [plasticQuantities, setPlasticQuantities] = useState<Record<string, number>>({
    PET: 0,
    PEBD: 0,
    PP: 0,
  });

  // Calcular el total generado
  const calculateTotal = () => {
    return PLASTIC_TYPES.reduce((total, plastic) => {
      const quantity = plasticQuantities[plastic.id] || 0;
      return total + (quantity * plastic.pricePerKg);
    }, 0);
  };

  // Calcular el valor por tipo de plástico
  const calculatePlasticValue = (plasticId: string, pricePerKg: number) => {
    const quantity = plasticQuantities[plasticId] || 0;
    return quantity * pricePerKg;
  };

  // Generar folio único
  const generateFolio = () => {
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substring(2, 9).toUpperCase();
    return `Folio ${timestamp.slice(-6)}${random.slice(0, 3)}`;
  };

  // Incrementar cantidad
  const incrementQuantity = (plasticId: string) => {
    setPlasticQuantities(prev => ({
      ...prev,
      [plasticId]: (prev[plasticId] || 0) + 1
    }));
  };

  // Decrementar cantidad
  const decrementQuantity = (plasticId: string) => {
    setPlasticQuantities(prev => ({
      ...prev,
      [plasticId]: Math.max(0, (prev[plasticId] || 0) - 1)
    }));
  };

  // Manejar el botón de continuar
  const handleContinue = () => {
    // Generar el folio
    const folio = generateFolio();

    // Preparar los datos para pasar
    const deliveryData = {
      folio: folio,
      petKg: plasticQuantities.PET.toString(),
      pebdKg: plasticQuantities.PEBD.toString(),
      ppKg: plasticQuantities.PP.toString(),
      petValue: calculatePlasticValue('PET', 8).toString(),
      pebdValue: calculatePlasticValue('PEBD', 6).toString(),
      ppValue: calculatePlasticValue('PP', 4).toString(),
      totalGenerated: calculateTotal().toString(),
    };

    // Navegar a la pantalla de carga pasando los datos
    router.push({
      pathname: '/auth/deliveryLoading',
      params: deliveryData,
    });
  };

  return (
    <View style={registerStyles.container}>
      {/* Header */}
      <View style={registerStyles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={registerStyles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color={colors.texts.dark} />
        </TouchableOpacity>
      </View>

      {/* Contenido */}
      <ScrollView
        style={registerStyles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={registerStyles.scrollContent}
      >
        {/* Título y subtítulo */}
        <Text style={registerStyles.title}>Agrega una entrega</Text>
        <Text style={registerStyles.subtitle}>
          Ingresa los kilogramos de plástico del plastiamigo
        </Text>

        {/* Total generado */}
        <Text style={registerStyles.totalGenerated}>
          <Text style={registerStyles.totalAmount}>${calculateTotal()}</Text> generados
        </Text>

        {/* Lista de tipos de plástico */}
        <View style={registerStyles.plasticsContainer}>
          {PLASTIC_TYPES.map((plastic) => (
            <View key={plastic.id} style={registerStyles.plasticRow}>
              <View style={registerStyles.plasticInfo}>
                <Text style={registerStyles.plasticName}>{plastic.name}</Text>
                <Text style={registerStyles.plasticPrice}>
                  ${plastic.pricePerKg} por KG
                </Text>
              </View>

              <View style={registerStyles.counterContainer}>
                {/* Botón de decrementar */}
                <Pressable
                  onPress={() => decrementQuantity(plastic.id)}
                  style={({ pressed }) => [
                    registerStyles.counterButton,
                    pressed && registerStyles.counterButtonPressed
                  ]}
                >
                  <Ionicons name="remove" size={20} color={colors.white} />
                </Pressable>

                {/* Cantidad */}
                <Text style={registerStyles.quantity}>
                  {plasticQuantities[plastic.id] || 0}
                </Text>

                {/* Botón de incrementar */}
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

      {/* Botón fijo en la parte inferior */}
      <View style={registerStyles.buttonContainer}>
        <Button label="Continuar" onPress={handleContinue} />
      </View>
    </View>
  );
}