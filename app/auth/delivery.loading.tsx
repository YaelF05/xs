import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { BottleLoadingAnimation } from '@/components';
import { deliveryLoadingStyles } from '@/styles/delivery.loading.styles';


export default function DeliveryLoadingScreen() {
  const router = useRouter();

  useEffect(() => {

    const timeout = setTimeout(() => {
      router.replace('/auth/delivery.summary');
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [router]);

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