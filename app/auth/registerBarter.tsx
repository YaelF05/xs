import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Pressable, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '@/components';
import { registerBarterStyles } from '@/styles/register.barter.styles';
import { colors } from '@/constants';

// Productos de ejemplo (reemplazar con datos reales de API)
const MOCK_PRODUCTS = [
  { id: 1, name: 'Shampoo', category: 'Aseo personal', price: 20 },
  { id: 2, name: 'Chocomilk', category: 'Alimento', price: 28 },
  { id: 3, name: 'Galletas', category: 'Alimento', price: 15 },
  { id: 4, name: 'Jabón', category: 'Aseo personal', price: 12 },
  { id: 5, name: 'Pasta dental', category: 'Aseo personal', price: 25 },
];

export default function RegisterBarterScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const petKg = parseFloat(params.petKg as string) || 0;
  const pebdKg = parseFloat(params.pebdKg as string) || 0;
  const ppKg = parseFloat(params.ppKg as string) || 0;
  const totalGenerated = parseFloat(params.totalGenerated as string) || 0;

  
  const totalKg = petKg + pebdKg + ppKg;
  

  const [searchQuery, setSearchQuery] = useState('');
  const [productQuantities, setProductQuantities] = useState<Record<number, number>>({});
  

  const calculateSpent = () => {
    return MOCK_PRODUCTS.reduce((total, product) => {
      const quantity = productQuantities[product.id] || 0;
      return total + (quantity * product.price);
    }, 0);
  };
  

  const calculateRemaining = () => {
    return totalGenerated - calculateSpent();
  };
  

  const incrementQuantity = (productId: number) => {
    const product = MOCK_PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    const currentQuantity = productQuantities[productId] || 0;
    const newTotal = calculateSpent() + product.price;
    
    
    if (newTotal > totalGenerated) {
      Alert.alert(
        'Límite excedido',
        `No puedes agregar más productos. Tu límite es $${totalGenerated} y ya has gastado $${calculateSpent()}.`,
        [{ text: 'OK' }]
      );
      return;
    }
    
    setProductQuantities(prev => ({
      ...prev,
      [productId]: currentQuantity + 1
    }));
  };
  

  const decrementQuantity = (productId: number) => {
    setProductQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) - 1)
    }));
  };
  

  const filteredProducts = MOCK_PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  const handleContinue = () => {

    const hasProducts = Object.values(productQuantities).some(qty => qty > 0);
    
    if (!hasProducts) {
      Alert.alert(
        'Sin productos',
        'Debes seleccionar al menos un producto para continuar.',
        [{ text: 'OK' }]
      );
      return;
    }
    
    const selectedProducts = MOCK_PRODUCTS
      .filter(product => (productQuantities[product.id] || 0) > 0)
      .map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: productQuantities[product.id],
      }));
    

    const summaryData = {
      ...params, 
      selectedProducts: JSON.stringify(selectedProducts),
      totalBarter: calculateSpent().toString(),
    };
    

    router.push({
      pathname: '/auth/barterSummary',
      params: summaryData,
    });
  };

  return (
    <View style={registerBarterStyles.container}>
      {/* Header */}
      <View style={registerBarterStyles.header}>
        <TouchableOpacity 
          onPress={() => router.back()}
          style={registerBarterStyles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color={colors.texts.dark} />
        </TouchableOpacity>
      </View>

      {/* Contenido */}
      <ScrollView 
        style={registerBarterStyles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={registerBarterStyles.scrollContent}
      >
        {/* Título - Folio */}
        <Text style={registerBarterStyles.title}>Folio 1</Text>
        
        {/* Subtítulo */}
        <Text style={registerBarterStyles.subtitle}>
          Selecciona los productos seleccionados por el plastiamigo
        </Text>
        
        {/* Información de KG entregados */}
        <View style={registerBarterStyles.infoRow}>
          <Text style={[registerBarterStyles.infoLabel, registerBarterStyles.infoLabelPrimary]}>
            {totalKg}KG
          </Text>
          <Text style={registerBarterStyles.infoValue}> entregados</Text>
        </View>
        
        {/* Información de valores */}
        <View style={registerBarterStyles.infoRow}>
          <Text style={[registerBarterStyles.infoLabel, registerBarterStyles.infoLabelGreen]}>
            ${calculateSpent()}
          </Text>
          <Text style={registerBarterStyles.infoValue}> generados  </Text>
          <Text style={[registerBarterStyles.infoLabel, registerBarterStyles.infoLabelGreen]}>
            ${calculateRemaining()}
          </Text>
          <Text style={registerBarterStyles.infoValue}> restantes</Text>
        </View>
        
        {/* Barra de búsqueda y filtro */}
        <View style={registerBarterStyles.searchContainer}>
          {/* Input de búsqueda */}
          <View style={registerBarterStyles.searchInputContainer}>
            <Ionicons 
              name="search" 
              size={20} 
              color={colors.texts.normal} 
              style={registerBarterStyles.searchIcon}
            />
            <TextInput
              style={registerBarterStyles.searchInput}
              placeholder="Buscar producto..."
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          
          {/* Botón de filtro */}
          <TouchableOpacity 
            style={registerBarterStyles.filterButton}
            onPress={() => {
              // Aquí puedes agregar lógica de filtros
              console.log('Abrir filtros');
            }}
          >
            <Ionicons name="filter" size={20} color={colors.texts.dark} />
          </TouchableOpacity>
        </View>
        
        {/* Lista de productos */}
        <View style={registerBarterStyles.productsContainer}>
          {filteredProducts.map((product) => (
            <View key={product.id} style={registerBarterStyles.productRow}>
              {/* Información del producto */}
              <View style={registerBarterStyles.productInfo}>
                <Text style={registerBarterStyles.productName}>{product.name}</Text>
                <Text style={registerBarterStyles.productCategory}>{product.category}</Text>
                <Text style={registerBarterStyles.productPrice}>${product.price}</Text>
              </View>
              
              {/* Contador */}
              <View style={registerBarterStyles.counterContainer}>
                {/* Botón de decrementar */}
                <Pressable
                  onPress={() => decrementQuantity(product.id)}
                  style={({ pressed }) => [
                    registerBarterStyles.counterButton,
                    pressed && registerBarterStyles.counterButtonPressed
                  ]}
                >
                  <Ionicons name="remove" size={20} color={colors.white} />
                </Pressable>
                
                {/* Cantidad */}
                <Text style={registerBarterStyles.quantity}>
                  {productQuantities[product.id] || 0}
                </Text>
                
                {/* Botón de incrementar */}
                <Pressable
                  onPress={() => incrementQuantity(product.id)}
                  style={({ pressed }) => [
                    registerBarterStyles.counterButton,
                    pressed && registerBarterStyles.counterButtonPressed
                  ]}
                >
                  <Ionicons name="add" size={20} color={colors.white} />
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Botón fijo en la parte inferior */}
      <View style={registerBarterStyles.buttonContainer}>
        <Button label="Continuar" onPress={handleContinue} />
      </View>
    </View>
  );
}