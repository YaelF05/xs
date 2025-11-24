import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { homeStyles } from '@/styles/home.styles';

/**
 * Pantalla de Home para PlastiApp Mobile
 * Muestra estadísticas del evento activo
 */

export default function HomeScreen() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<'estadisticas' | 'historial'>('estadisticas');

  // Función para navegar a la pantalla de registro
  const handleAddDelivery = () => {
    router.push('/auth/register.deliver');
  };

  return (
    <View style={homeStyles.container}>
      {/* Header con fondo azul - solo perfil y botón */}
      <View style={homeStyles.header}>
        <View style={homeStyles.userSection}>
          <View style={homeStyles.avatar}>
            <Text style={homeStyles.avatarText}>J</Text>
          </View>
          <Text style={homeStyles.userName}>Jhon Doe</Text>
        </View>
        <TouchableOpacity 
          style={homeStyles.addButton}
          onPress={handleAddDelivery}
        >
          <Text style={homeStyles.addButtonText}>Agregar entrega</Text>
        </TouchableOpacity>
      </View>

      {/* Contenido principal con tabs y gráficas */}
      <ScrollView 
        style={homeStyles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Tabs dentro del contenido */}
        <View style={homeStyles.tabs}>
          <TouchableOpacity
            style={[homeStyles.tab, selectedTab === 'estadisticas' && homeStyles.tabActive]}
            onPress={() => setSelectedTab('estadisticas')}
          >
            <Text style={[homeStyles.tabText, selectedTab === 'estadisticas' && homeStyles.tabTextActive]}>
              Estadísticas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[homeStyles.tab, selectedTab === 'historial' && homeStyles.tabActive]}
            onPress={() => setSelectedTab('historial')}
          >
            <Text style={[homeStyles.tabText, selectedTab === 'historial' && homeStyles.tabTextActive]}>
              Historial
            </Text>
          </TouchableOpacity>
        </View>

        {/* AQUÍ DEBERÍAN IR LAS GRÁFICAS Y CONTENIDO DINÁMICO */}
      </ScrollView>
    </View>
  );
}