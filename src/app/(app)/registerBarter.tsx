import { Button } from '@/components';
import { colors } from '@/constants';
import { registerBarterStyles } from '@/styles/register.barter.styles';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

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

  const totalKg = 2;
  const totalGenerated = 16;

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
      totalGenerated: totalGenerated.toString(),
      totalKg: totalKg.toString()
    };

    router.push({
      pathname: '/(app)/barterSummary',
      params: summaryData,
    });
  };

  return (
    <View style={registerBarterStyles.container}>
      <View style={registerBarterStyles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={registerBarterStyles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color={colors.texts.dark} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={registerBarterStyles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={registerBarterStyles.scrollContent}
      >
        <Text style={registerBarterStyles.title}>Folio 1</Text>

        <Text style={registerBarterStyles.subtitle}>
          Selecciona los productos seleccionados por el plastiamigo
        </Text>

        <View style={registerBarterStyles.infoRow}>
          <Text style={[registerBarterStyles.infoLabel, registerBarterStyles.infoLabelPrimary]}>
            {totalKg}KG
          </Text>
          <Text style={registerBarterStyles.infoValue}> entregados</Text>
        </View>

        <View style={registerBarterStyles.infoRow}>
          <Text style={[registerBarterStyles.infoLabel, registerBarterStyles.infoLabelGreen]}>
            ${totalGenerated}
          </Text>
          <Text style={registerBarterStyles.infoValue}> generados  </Text>
          <Text style={[registerBarterStyles.infoLabel, registerBarterStyles.infoLabelGreen]}>
            ${calculateRemaining()}
          </Text>
          <Text style={registerBarterStyles.infoValue}> restantes</Text>
        </View>

        <View style={registerBarterStyles.searchContainer}>
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

          <TouchableOpacity
            style={registerBarterStyles.filterButton}
            onPress={() => {
              console.log('Abrir filtros');
            }}
          >
            <Ionicons name="filter" size={20} color={colors.texts.dark} />
          </TouchableOpacity>
        </View>

        <View style={registerBarterStyles.productsContainer}>
          {filteredProducts.map((product) => (
            <View key={product.id} style={registerBarterStyles.productRow}>
              <View style={registerBarterStyles.productInfo}>
                <Text style={registerBarterStyles.productName}>{product.name}</Text>
                <Text style={registerBarterStyles.productCategory}>{product.category}</Text>
                <Text style={registerBarterStyles.productPrice}>${product.price}</Text>
              </View>

              <View style={registerBarterStyles.counterContainer}>
                <Pressable
                  onPress={() => decrementQuantity(product.id)}
                  style={({ pressed }) => [
                    registerBarterStyles.counterButton,
                    pressed && registerBarterStyles.counterButtonPressed
                  ]}
                >
                  <Ionicons name="remove" size={20} color={colors.white} />
                </Pressable>

                <Text style={registerBarterStyles.quantity}>
                  {productQuantities[product.id] || 0}
                </Text>

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

      <View style={registerBarterStyles.buttonContainer}>
        <Button label="Continuar" onPress={handleContinue} />
      </View>
    </View>
  );
}