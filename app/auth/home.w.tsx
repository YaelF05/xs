import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { homeStyles } from '@/styles/home.styles';

/**
 * Pantalla de Home para PlastiApp Mobile
 * Muestra estadísticas del evento activo
 */

export default function HomeScreen() {
  const [selectedTab, setSelectedTab] = useState<'estadisticas' | 'historial'>('estadisticas');

  return (
    <View style={homeStyles.container}>
      {/* Header con usuario y botón */}
      <View style={homeStyles.header}>
        <View style={homeStyles.userSection}>
          <View style={homeStyles.avatar}>
            <Text style={homeStyles.avatarText}>J</Text>
          </View>
          <Text style={homeStyles.userName}>Jhon Doe</Text>
        </View>
        <TouchableOpacity style={homeStyles.addButton}>
          <Text style={homeStyles.addButtonText}>Agregar entrega</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
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

      <ScrollView 
        style={homeStyles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Título del evento - Placeholder */}
        <View style={homeStyles.eventTitleContainer}>
          <Text style={homeStyles.eventTitle}>Plastitrueque UV</Text>
          <Text style={homeStyles.eventSubtitle}>Finaliza en 5 horas</Text>
        </View>

        {/* Primera fila de cards */}
        <View style={homeStyles.row}>
          {/* Meta al 50% - Placeholder para gráfica */}
          <View style={[homeStyles.card, homeStyles.cardLarge]}>
            <Text style={homeStyles.cardTitle}>Meta al 50%</Text>
            <View style={homeStyles.chartPlaceholder}>
              <Text style={homeStyles.placeholderText}>Gráfica circular</Text>
            </View>
            <View style={homeStyles.metaInfo}>
              <Text style={homeStyles.metaValue}>15,000 KG /</Text>
              <Text style={homeStyles.metaTotal}>30,000 KG</Text>
            </View>
          </View>

          {/* Columna derecha con dos cards pequeñas */}
          <View style={homeStyles.column}>
            <View style={homeStyles.card}>
              <Text style={homeStyles.statNumber}>900</Text>
              <Text style={homeStyles.statLabel}>productos{'\n'}entregados</Text>
            </View>
            <View style={homeStyles.card}>
              <Text style={homeStyles.statNumber}>950</Text>
              <Text style={homeStyles.statLabel}>participantes</Text>
            </View>
          </View>
        </View>

        {/* Card de CO2 */}
        <View style={homeStyles.card}>
          <View style={homeStyles.co2Container}>
            <Text style={homeStyles.co2Number}>20 Kilotones</Text>
            <Text style={homeStyles.co2Label}>de co2 reducidos</Text>
          </View>
        </View>

        {/* Productos solicitados - Placeholder para gráfica */}
        <View style={homeStyles.card}>
          <Text style={homeStyles.sectionTitle}>Productos solicitados</Text>
          <View style={homeStyles.chartPlaceholder}>
            <Text style={homeStyles.placeholderText}>Gráfica de pastel</Text>
          </View>
        </View>

        {/* Categorías solicitadas - Placeholder para gráfica */}
        <View style={homeStyles.card}>
          <Text style={homeStyles.sectionTitle}>Categorías solicitadas</Text>
          <View style={homeStyles.chartPlaceholder}>
            <Text style={homeStyles.placeholderText}>Gráfica de líneas</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}