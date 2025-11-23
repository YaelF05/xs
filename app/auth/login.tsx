import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, Input } from '@/components';
import { validateLoginForm } from '@/schemas';
import { loginStyles } from '@/styles/login.styles';

/**
 * Pantalla de Login para PlastiApp Mobile.
 */

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleLogin = () => {
    // Validar que se hayan ingresado correo y contraseña
    const validationErrors = validateLoginForm(email, password);
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    // Si la validación pasa, navegar a la pantalla de Home (tabs)
    setErrors({});
    router.replace('/auth/home.w');
  };

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

          {/* Formulario - SIN EL BOTÓN */}
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
      
      {/* Botón fijo en la parte inferior */}
      <View style={loginStyles.buttonContainer}>
        <Button label="Iniciar sesión" onPress={handleLogin} />
      </View>
    </KeyboardAvoidingView>
  );
}