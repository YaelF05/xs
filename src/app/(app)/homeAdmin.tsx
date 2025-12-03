import { authService } from '@/services/auth.service';
import { homeAdminStyles } from '@/styles/home.admin.styles';
import { homeStyles } from '@/styles/home.styles';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Modal, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function HomeAdminScreen() {
    const router = useRouter();
    const [selectedTab, setSelectedTab] = useState<'estadisticas' | 'historial'>('estadisticas');
    const [userName, setUserName] = useState<string>('');
    const [showAddOptions, setShowAddOptions] = useState(false);

    useEffect(() => {
        const loadUser = async () => {
            const name = await authService.getUserName();
            if (name) setUserName(name);
        };
        loadUser();
    }, []);

    const handleOptionSelect = (route: string) => {
        setShowAddOptions(false);
        if (route === 'canje') {
            router.push('/(app)/validateFolio');
        } else if (route === 'entrega') {
            router.push('/(app)/registerDeliver');
        }
    };

    const handleProfilePress = () => {
        router.push('/(app)/settings');
    };

    return (
        <View style={homeStyles.container}>
            <View style={homeStyles.header}>
                <TouchableOpacity
                    style={homeStyles.userSection}
                    onPress={handleProfilePress}
                    activeOpacity={0.7}
                >
                    <View style={homeStyles.avatar}>
                        <Text style={homeStyles.avatarText}>{userName ? userName.charAt(0).toUpperCase() : 'A'}</Text>
                    </View>
                    <Text style={homeStyles.userName}>{userName ? userName.split(' ')[0] : 'Administrador'}</Text>
                </TouchableOpacity>

                <View>
                    <TouchableOpacity
                        style={homeStyles.addButton}
                        onPress={() => setShowAddOptions(true)}
                    >
                        <Text style={homeStyles.addButtonText}>Agregar</Text>
                    </TouchableOpacity>
                </View>
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

                <View style={{ padding: 20 }}>
                    {selectedTab === 'estadisticas' ? (
                        <View />
                    ) : (
                        <View />
                    )}
                </View>
            </ScrollView>

            <Modal
                transparent={true}
                visible={showAddOptions}
                animationType="fade"
                onRequestClose={() => setShowAddOptions(false)}
            >
                <Pressable style={homeAdminStyles.modalOverlay} onPress={() => setShowAddOptions(false)}>
                    <View style={homeAdminStyles.optionsContainer}>
                        <TouchableOpacity
                            style={homeAdminStyles.optionButton}
                            onPress={() => handleOptionSelect('entrega')}
                        >
                            <Text style={homeAdminStyles.optionText}>Agregar entrega</Text>
                        </TouchableOpacity>
                        <View style={homeAdminStyles.separator} />
                        <TouchableOpacity
                            style={homeAdminStyles.optionButton}
                            onPress={() => handleOptionSelect('canje')}
                        >
                            <Text style={homeAdminStyles.optionText}>Agregar canje</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
}
