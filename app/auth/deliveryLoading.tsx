import { BottleLoadingAnimation } from '@/components';
import { deliveryLoadingStyles } from '@/styles/delivery.loading.styles';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';


export default function DeliveryLoadingScreen() {
  const router = useRouter();

  useEffect(() => {

    const timeout = setTimeout(() => {
      router.replace('/auth/deliverySummary');
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