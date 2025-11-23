import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '@/components';
import { registerStyles } from '@/styles/register.styles';
import { colors } from '@/constants';



// Datos mock de los tipos de plásticos disponibles
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
    // TODO: Aquí se implementará la lógica para guardar los datos
    console.log('Plásticos registrados:', plasticQuantities);
    console.log('Total generado: $', calculateTotal());
    // Por ahora solo navegamos de regreso
    router.back();
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