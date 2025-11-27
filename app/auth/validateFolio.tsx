import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '@/components';
import { validateFolioStyles } from '@/styles/validate.folio.styles';
import { colors } from '@/constants';

export default function ValidateFolioScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const [folio, setFolio] = useState('');
  const [error, setError] = useState('');

  const handleValidate = () => {
    // Validar que se haya ingresado un folio
    if (!folio.trim()) {
      setError('Por favor ingresa un número de folio');
      Alert.alert('Campo requerido', 'Por favor ingresa un número de folio para continuar');
      return;
    }
    
    // Limpiar error si existe
    setError('');
    
    // Agregar el folio a los parámetros
    const dataWithFolio = {
      ...params,
      folioIngresado: folio.trim(),
    };
    
    // Navegar a la pantalla de carga de validación
    router.push({
      pathname: '/auth/validateLoading',
      params: dataWithFolio,
    });
  };

  return (
    <View style={validateFolioStyles.container}>
      {/* Header */}
      <View style={validateFolioStyles.header}>
        <TouchableOpacity 
          onPress={() => router.back()}
          style={validateFolioStyles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color={colors.texts.dark} />
        </TouchableOpacity>
      </View>

      {/* Contenido */}
      <View style={validateFolioStyles.content}>
        {/* Título */}
        <Text style={validateFolioStyles.title}>Folio</Text>
        
        {/* Subtítulo */}
        <Text style={validateFolioStyles.subtitle}>
          Validaremos el folio con el ingresado en el área de pesaje para asignar la cantidad correcta de pesos
        </Text>

        {/* Input de folio */}
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
            if (error) setError(''); // Limpiar error al escribir
          }}
          autoCapitalize="none"
          autoCorrect={false}
        />
        
        {/* Mostrar mensaje de error si existe */}
        {error ? (
          <Text style={{ color: '#EF4444', fontSize: 13, marginTop: 6, marginLeft: 4 }}>
            {error}
          </Text>
        ) : null}
      </View>

      {/* Botón fijo en la parte inferior */}
      <View style={validateFolioStyles.buttonContainer}>
        <Button label="Validar" onPress={handleValidate} />
      </View>
    </View>
  );
}