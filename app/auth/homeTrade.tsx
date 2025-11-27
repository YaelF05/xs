import { homeStyles } from '@/styles/home.styles';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';


export default function HomeScreen() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<'estadisticas' | 'historial'>('estadisticas');

  const handleAddDelivery = () => {
    router.push('/auth/validateFolio');
  };

  return (
    <View style={homeStyles.container}>

      <View style={homeStyles.header}>
        <View style={homeStyles.userSection}>
          <View style={homeStyles.avatar}>
            <Text style={homeStyles.avatarText}>F</Text>
          </View>
          <Text style={homeStyles.userName}>Yael Franco</Text>
        </View>
        <TouchableOpacity
          style={homeStyles.addButton}
          onPress={handleAddDelivery}
        >
          <Text style={homeStyles.addButtonText}>Agregar canje</Text>
        </TouchableOpacity>
      </View>


      <ScrollView
        style={homeStyles.content}
        showsVerticalScrollIndicator={false}
      >

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

      </ScrollView>
    </View>
  );
}
