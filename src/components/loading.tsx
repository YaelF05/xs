import React from 'react';
import { View, ActivityIndicator, Text, Image } from 'react-native';
import { colors } from '@/constants';
import { loginStyles } from '@/styles/login.styles';


type LoadingProps = {
  text?: string;
};

export function Loading({ text = "Cargando..." }: LoadingProps) {
  return (
    <View style={loginStyles.loadingContainer}>

      <ActivityIndicator size="large" color={colors.primary.normal} />
      <Text style={loginStyles.loadingText}>{text}</Text>
    </View>
  );
}