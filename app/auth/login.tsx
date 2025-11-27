import { Button, Input } from '@/components';
import { validateLoginForm } from '@/schemas';
import { loginStyles } from '@/styles/login.styles';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';



export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleLogin = () => {

    const validationErrors = validateLoginForm(email, password);
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }


    setErrors({});
    router.replace('/auth/homeDeliver');
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
          <View style={loginStyles.logoContainer}>
            <Image
              source={require('../../assets/images/plastiapp-logo.png')}
              style={loginStyles.logo}
            />
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