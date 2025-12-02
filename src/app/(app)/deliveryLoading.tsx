import { BottleLoadingAnimation } from '@/components';
import { deliveryLoadingStyles } from '@/styles/delivery.loading.styles';
import React from 'react';
import { Text, View } from 'react-native';

export default function DeliveryLoadingScreen() {


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