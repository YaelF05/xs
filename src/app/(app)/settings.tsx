import { colors } from '@/constants';
import { authService } from '@/services/auth.service';
import { settingsStyles } from '@/styles/settings.styles';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { LogoutModal } from '@/components';

export default function SettingsScreen() {
  const router = useRouter();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutPress = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = async () => {
    try {
      await authService.logout();
      setShowLogoutModal(false);
      router.replace('/auth/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      setShowLogoutModal(false);
      Alert.alert('Error', 'No se pudo cerrar sesión. Intenta de nuevo.');
    }
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  return (
    <View style={settingsStyles.container}>
      <View style={settingsStyles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={settingsStyles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color={colors.texts.dark} />
        </TouchableOpacity>
      </View>

      <View style={settingsStyles.content}>
        <Text style={settingsStyles.title}>Configuración</Text>

        <TouchableOpacity style={settingsStyles.menuItem}>
          <Text style={settingsStyles.menuItemText}>Cambiar correo electrónico</Text>
          <Ionicons name="chevron-forward" size={24} color={colors.texts.dark} />
        </TouchableOpacity>

        <TouchableOpacity style={settingsStyles.menuItem}>
          <Text style={settingsStyles.menuItemText}>Cambiar contraseña</Text>
          <Ionicons name="chevron-forward" size={24} color={colors.texts.dark} />
        </TouchableOpacity>
      </View>

      <View style={settingsStyles.logoutButtonContainer}>
        <Pressable
          style={({ pressed }) => [
            settingsStyles.logoutButton,
            pressed && settingsStyles.logoutButtonPressed,
          ]}
          onPress={handleLogoutPress}
        >
          <Text style={settingsStyles.logoutButtonText}>Cerrar sesión</Text>
        </Pressable>
      </View>

      <LogoutModal
        visible={showLogoutModal}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />
    </View>
  );
}