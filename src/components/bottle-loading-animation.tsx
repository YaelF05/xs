import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';

/**
 * Componente de animación de botellas reutilizable
 * Muestra una secuencia animada de 5 botellas SVG desde assets/images
 */

// Array de imágenes de botellas
const BOTTLE_IMAGES = [
  require('../../assets/images/bottle1.svg'),
  require('../../assets/images/bottle2.svg'),
  require('../../assets/images/bottle3.svg'),
  require('../../assets/images/bottle4.svg'),
  require('../../assets/images/bottle5.svg'),
];

type BottleLoadingAnimationProps = {
  width?: number;
  height?: number;
};

export function BottleLoadingAnimation({ 
  width = 129, 
  height = 247 
}: BottleLoadingAnimationProps) {
  const [currentBottleIndex, setCurrentBottleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBottleIndex((prevIndex) => (prevIndex + 1) % BOTTLE_IMAGES.length);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Image 
        source={BOTTLE_IMAGES[currentBottleIndex]} 
        style={{ width, height }}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});