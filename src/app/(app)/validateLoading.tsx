import { BottleLoadingAnimation } from '@/components';
import { validateLoadingStyles } from '@/styles/validate.loading.styles';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function ValidateLoadingScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace({
        pathname: '/(app)/registerBarter',
        params: params,
      });
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [router, params]);

  return (
    <View style={validateLoadingStyles.container}>
      <View style={validateLoadingStyles.bottleContainer}>
        <BottleLoadingAnimation />
      </View>

      <Text style={validateLoadingStyles.loadingText}>
        Validando folio...
      </Text>
    </View>
  );
}