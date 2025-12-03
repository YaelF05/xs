import { Button } from '@/components';
import { colors } from '@/constants';
import { authService } from '@/services/auth.service';
import { validateFolioStyles } from '@/styles/validate.folio.styles';
import { UserRoles } from '@/types/user';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ValidateFolioScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [folio, setFolio] = useState('');
  const [error, setError] = useState('');
  const [userRole, setUserRole] = useState<UserRoles | null>(null);

  useEffect(() => {
    loadUserRole();
  }, []);

  const loadUserRole = async () => {
    const role = await authService.getUserRole();
    setUserRole(role);
  };

  const handleValidate = () => {
    if (!folio.trim()) {
      setError('Por favor ingresa un número de folio');
      Alert.alert('Campo requerido', 'Por favor ingresa un número de folio para continuar');
      return;
    }

    setError('');

    const dataWithFolio = {
      ...params,
      folioIngresado: folio.trim(),
    };

    router.push({
      pathname: '/(app)/validateLoading',
      params: dataWithFolio,
    });
  };

  const handleBack = () => {
    if (userRole === UserRoles.ADMIN) {
      router.replace('/(app)/homeAdmin');
    } else {
      router.replace('/(app)/homeTrade');
    }
  };

  return (
    <View style={validateFolioStyles.container}>
      <View style={validateFolioStyles.header}>
        <TouchableOpacity
          onPress={handleBack}
          style={validateFolioStyles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color={colors.texts.dark} />
        </TouchableOpacity>
      </View>

      <View style={validateFolioStyles.content}>
        <Text style={validateFolioStyles.title}>Folio</Text>

        <Text style={validateFolioStyles.subtitle}>
          Validaremos el folio con el ingresado en el área de pesaje para asignar la cantidad correcta de pesos
        </Text>

        <TextInput
          style={[
            validateFolioStyles.input,
            error ? { borderColor: '#EF4444', borderWidth: 1.5 } : {}
          ]}
          placeholder="Ingresar número de folio"
          placeholderTextColor="#9CA3AF"
          value={folio}
          onChangeText={(text) => {
            setFolio(text);
            if (error) setError('');
          }}
          autoCapitalize="none"
          autoCorrect={false}
        />

        {error ? (
          <Text style={{ color: '#EF4444', fontSize: 13, marginTop: 6, marginLeft: 4 }}>
            {error}
          </Text>
        ) : null}
      </View>

      <View style={validateFolioStyles.buttonContainer}>
        <Button label="Validar" onPress={handleValidate} />
      </View>
    </View>
  );
}