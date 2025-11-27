import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { BottleLoadingAnimation } from '@/components';
import { validateLoadingStyles } from '@/styles/validate.loading.styles';

export default function ValidateLoadingScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  useEffect(() => {
    // Simular validación del folio (3 segundos)
    const timeout = setTimeout(() => {
      // Navegar a la pantalla de registro de canje pasando todos los datos
      router.replace({
        pathname: '/auth/registerBarter',
        params: params,
      });
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [router, params]);

  return (
    <View style={validateLoadingStyles.container}>
      {/* Animación de botella */}
      <View style={validateLoadingStyles.bottleContainer}>
        <BottleLoadingAnimation />
      </View>

      {/* Texto de carga */}
      <Text style={validateLoadingStyles.loadingText}>
        Validando folio...
      </Text>
    </View>
  );
}