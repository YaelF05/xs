import { Button, Input, PlastiappLogo } from '@/components';
import { UserRoles } from '@/constants/roles';
import { validateLoginForm } from '@/schemas';
import { authService } from '@/services/auth.service';
import { loginStyles } from '@/styles/login.styles';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, View, useWindowDimensions } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const { height } = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleLogin = async () => {
    const validationErrors = validateLoginForm(email, password);
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      const response = await authService.login(email, password);

      const userRole = response.user.type;

      switch (userRole) {
        case UserRoles.MERCADITO:
          router.replace('/(app)/homeTrade');
          break;
        case UserRoles.PESAJE:
          router.replace('/(app)/homeDeliver');
          break;
        case UserRoles.ADMIN:
          router.replace('/(app)/homeDeliver');
          break;
        default:
          Alert.alert('Error', 'Tipo de usuario no reconocido');
      }
    } catch (error: any) {
      console.error(error);
      Alert.alert('Error', 'Credenciales inválidas o error en el servidor');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={loginStyles.root}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, minHeight: height }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={loginStyles.container}>
          <View style={loginStyles.logoContainer}>
            <PlastiappLogo width={316} height={90} />
          </View>

          <View style={loginStyles.welcomeContainer}>
            <Text style={loginStyles.welcomeTitle}>¡Buenas tardes!</Text>
            <Text style={loginStyles.welcomeSubtitle}>
              Ingresa tus credenciales para iniciar sesión
            </Text>
          </View>

          <View style={loginStyles.form}>
            <Input
              placeholder="Correo electrónico"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              error={errors.email}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Input
              placeholder="Contraseña"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (errors.password) setErrors({ ...errors, password: undefined });
              }}
              error={errors.password}
              secureTextEntry
            />
          </View>
        </View>
      </ScrollView>

      <View style={loginStyles.buttonContainer}>
        <Button label="Iniciar sesión" onPress={handleLogin} />
      </View>
    </KeyboardAvoidingView>
  );
}
