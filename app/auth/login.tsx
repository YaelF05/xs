import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, Input, Loading } from '@/components';
import { validateLoginForm } from '@/schemas';
import { login } from '@/services';
import { saveAuthToken, saveUserData } from '@/utils/storage';
import { loginStyles } from '@/styles/login.styles';
import { User } from '@/types';

/**
 * Pantalla de Login para PlastiApp Mobile.
 * Diseño idéntico a la imagen proporcionada.
 */

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    const validationErrors = validateLoginForm(email, password);
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const credentials: User = { email, password };
      const response = await login(credentials);

      await saveAuthToken(response.token);
      await saveUserData(response.user);

      router.replace('/(tabs)');
    } catch (error) {
      console.error('Login error:', error);
      setErrors({
        email: 'Credenciales inválidas. Por favor, verifica tu correo y contraseña.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading text="Iniciando sesión..." />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={loginStyles.container}>
          {/* Logo PlastiApp */}
          <View style={loginStyles.logoContainer}>
            <Image
              source={require('../../assets/images/plastiapp-logo.png')}
              style={loginStyles.logo}
            />
          </View>

          {/* Sección de Bienvenida */}
          <View style={loginStyles.welcomeContainer}>
            <Text style={loginStyles.welcomeTitle}>¡Buenas tardes!</Text>
            <Text style={loginStyles.welcomeSubtitle}>
              Ingresa tus credenciales para iniciar sesión
            </Text>
          </View>

          {/* Formulario */}
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

            <Button label="Iniciar sesión" onPress={handleLogin} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}