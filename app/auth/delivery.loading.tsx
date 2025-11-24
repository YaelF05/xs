import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { BottleLoadingAnimation } from '@/components';
import { deliveryLoadingStyles } from '@/styles/delivery-loading.styles';

/**
 * Pantalla de carga con animación de botellas
 * Muestra la animación y redirige al home después de 3 segundos
 */

export default function DeliveryLoadingScreen() {
  const router = useRouter();

  useEffect(() => {
    // Después de 3 segundos, navegar de regreso al home
    const timeout = setTimeout(() => {
      router.replace('/auth/delivery.summary');
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <View style={deliveryLoadingStyles.container}>
      {/* Animación de la botella */}
      <View style={deliveryLoadingStyles.bottleContainer}>
        <BottleLoadingAnimation />
      </View>

      {/* Texto de carga */}
      <Text style={deliveryLoadingStyles.loadingText}>
        Generando entrega...
      </Text>
    </View>
  );
}