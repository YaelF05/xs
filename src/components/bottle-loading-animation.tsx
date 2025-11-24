import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';

/**
 * Componente de animación de botellas reutilizable
 * Muestra una secuencia animada de 5 botellas SVG
 */

type BottleLoadingAnimationProps = {
  width?: number;
  height?: number;
};

// Componente SVG para Bottle 1
const Bottle1SVG = ({ width = 129, height = 247 }) => (
  <Svg width={width} height={height} viewBox="0 0 129 247" fill="none">
    <G clipPath="url(#clip0_1064_2122)">
      <Rect width="129" height="247" fill="transparent"/>
      <Path 
        d="M22 122.486V108.256C22 105.593 22.3546 102.941 23.0546 100.372L25.6284 90.9224C26.8727 86.3544 29.1804 82.1456 32.363 78.6404L36.2961 74.3086C41.3084 68.7881 44.0852 61.5988 44.0852 54.1423V12C44.0852 11.4477 44.533 11 45.0852 11H87.2557C87.808 11 88.2557 11.4477 88.2557 12V55.6637C88.2557 63.3631 91.5155 70.7026 97.2279 75.8649C102.94 81.0271 106.2 88.3666 106.2 96.066V120.459M106.2 169.108V204.681C106.2 207.971 105.659 211.237 104.599 214.351L102.679 219.989C100.533 226.292 95.7417 231.343 89.5609 233.819C85.9633 235.26 82.1235 236 78.2481 236H44.7199C42.3935 236 40.0809 235.643 37.863 234.941C28.4186 231.951 22 223.186 22 213.28V167.081" 
        stroke="#17A252" 
        strokeWidth="22"
      />
      <Path 
        d="M22.9415 157.187L-0.371081 120.844L46.0028 120.497L22.9415 157.187Z" 
        fill="#17A252"
      />
      <Path 
        d="M105 133L128.383 169H81.6173L105 133Z" 
        fill="#17A252"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1064_2122">
        <Rect width="129" height="247" fill="white"/>
      </ClipPath>
    </Defs>
  </Svg>
);

// Componente SVG para Bottle 2
const Bottle2SVG = ({ width = 129, height = 247 }) => (
  <Svg width={width} height={height} viewBox="0 0 129 247" fill="none">
    <G clipPath="url(#clip0_1064_2121)">
      <Rect width="129" height="247" fill="transparent"/>
      <Path 
        d="M22 138.703V108.256C22 105.593 22.3546 102.941 23.0545 100.372L25.6283 90.9223C26.8725 86.3543 29.1802 82.1457 32.3627 78.6404L36.2958 74.3085C41.3079 68.7881 44.0847 61.5989 44.0847 54.1425V12C44.0847 11.4477 44.5324 11 45.0847 11H87.2541C87.8064 11 88.2541 11.4477 88.2541 12V55.1428C88.2541 63.21 91.5031 70.9373 97.268 76.5807L99.9675 79.2233C100.44 79.6859 100.866 80.1942 101.238 80.7409L102.058 81.9459M106.198 134.649V204.682C106.198 207.971 105.657 211.237 104.597 214.351L103.01 219.011C100.653 225.935 95.3895 231.484 88.6001 234.203C85.6361 235.39 82.4726 236 79.2798 236H50.5065C45.4445 236 40.4738 234.652 36.1052 232.095C27.3688 226.981 22 217.617 22 207.494V185.324" 
        stroke="#17A252" 
        strokeWidth="22"
      />
      <Path 
        d="M23.0611 173.403L-0.354943 137.06L46.2247 136.713L23.0611 173.403Z" 
        fill="#17A252"
      />
      <Path 
        d="M105.71 98.1616L129 134.679H82.4197L105.71 98.1616Z" 
        fill="#17A252"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1064_2121">
        <Rect width="129" height="247" fill="white"/>
      </ClipPath>
    </Defs>
  </Svg>
);

// Componente SVG para Bottle 3
const Bottle3SVG = ({ width = 129, height = 247 }) => (
  <Svg width={width} height={height} viewBox="0 0 129 247" fill="none">
    <G clipPath="url(#clip0_1064_2120)">
      <Rect width="129" height="247" fill="transparent"/>
      <Path 
        d="M44.9084 236H64H79.1357C82.3272 236 85.4892 235.389 88.4509 234.2C95.2198 231.483 100.465 225.945 102.811 219.038L104.406 214.341C105.462 211.234 106 207.974 106 204.693V120.459V96.0502C106 88.3598 102.749 81.0279 97.0492 75.8649C91.3496 70.7019 88.0984 63.3699 88.0984 55.6796V39.3784M22 209.649V167.081V108.247C22 105.59 22.353 102.944 23.0498 100.38L25.6219 90.9147C26.8618 86.3516 29.1629 82.1462 32.3374 78.6415L36.2675 74.3027C41.265 68.7853 44.0328 61.607 44.0328 54.1627V12C44.0328 11.4477 44.4805 11 45.0328 11H66.0656H67.8166" 
        stroke="#17A252" 
        strokeWidth="22"
      />
      <Path 
        d="M29.6615 223.967L-2.53353 202.73L45.2195 179.699L29.6615 223.967Z" 
        fill="#17A252"
      />
      <Path 
        d="M88.9342 7L113.992 42.0314H63.8765L88.9342 7Z" 
        fill="#17A252"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1064_2120">
        <Rect width="129" height="247" fill="white"/>
      </ClipPath>
    </Defs>
  </Svg>
);

// Componente SVG para Bottle 4 - Ajustado al mismo viewBox que las demás (0 0 129 247)
const Bottle4SVG = ({ width = 129, height = 247 }) => (
  <Svg width={width} height={height} viewBox="0 0 129 247" fill="none">
    <Rect width="129" height="247" fill="transparent"/>
    <Path 
      d="M84.1148 236L86.4976 235.046C94.6228 231.792 100.922 225.152 103.743 216.866L104.599 214.351C105.659 211.238 106.2 207.971 106.2 204.682V120.46V96.066C106.2 88.3666 102.94 81.0271 97.2279 75.8649C91.5155 87.3501 88.2557 63.3631 88.2557 55.6638V12C88.2557 11.4477 87.808 11 87.2557 11H66.1705M44.0852 38.3654V54.1423C44.0852 61.5988 41.3084 68.7881 36.2961 74.3086L32.363 78.6404C29.1804 82.1456 26.8727 86.3544 25.6284 90.9224L23.0546 100.372C22.3546 102.941 22 105.593 22 108.256V167.081V206.508C22 217.114 28.0394 226.795 37.5654 231.458C40.9562 233.117 44.6496 234.069 48.4203 234.253L53.0574 234.48" 
      stroke="#17A252" 
      strokeWidth="22"
    />
    <Path 
      d="M82.1156 236.498L51.2789 236V179.732L82.1156 236.498Z" 
      fill="#17A252"
    />
    <Path 
      d="M37 28.1338L67.8367 -0.000102997V56.2678L37 28.1338Z" 
      fill="#17A252"
    />
  </Svg>
);

// Componente SVG para Bottle 5
const Bottle5SVG = ({ width = 129, height = 247 }) => (
  <Svg width={width} height={height} viewBox="0 0 129 247" fill="none">
    <G clipPath="url(#clip0_1064_2118)">
      <Rect width="129" height="247" fill="transparent"/>
      <Path 
        d="M106.2 146.811V96.066C106.2 88.3666 102.94 81.0271 97.2279 75.8649C91.5155 70.7026 88.2557 63.3631 88.2557 55.6638V12C88.2557 11.4477 87.808 11 87.2557 11H45.0852C44.533 11 44.0852 11.4477 44.0852 12V56.5292C44.0852 62.3783 41.5702 67.9449 37.1809 71.8108M106.2 193.432V204.681C106.2 207.971 105.659 211.237 104.599 214.351L103.012 219.011C100.655 225.935 95.3914 231.484 88.6017 234.203C85.6377 235.39 82.4742 236 79.2813 236H50.63C45.573 236 40.6062 234.661 36.2349 232.118C27.4219 226.992 22 217.565 22 207.37V108.297" 
        stroke="#17A252" 
        strokeWidth="22"
      />
      <Path 
        d="M20.0953 94.3009L18.6497 45L58.8403 95.2401L20.0953 94.3009Z" 
        fill="#17A252"
      />
      <Path 
        d="M106.037 157L132.049 193.75H80.0242L106.037 157Z" 
        fill="#17A252"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1064_2118">
        <Rect width="129" height="247" fill="white"/>
      </ClipPath>
    </Defs>
  </Svg>
);

export function BottleLoadingAnimation({ 
  width = 129, 
  height = 247 
}: BottleLoadingAnimationProps) {
  const [currentBottleIndex, setCurrentBottleIndex] = useState(0);

  // Array de componentes de botellas
  const bottles = [
    <Bottle1SVG key="bottle1" width={width} height={height} />,
    <Bottle2SVG key="bottle2" width={width} height={height} />,
    <Bottle3SVG key="bottle3" width={width} height={height} />,
    <Bottle4SVG key="bottle4" width={width} height={height} />,
    <Bottle5SVG key="bottle5" width={width} height={height} />,
  ];

  useEffect(() => {
    // Cambiar de botella cada 300ms para crear la animación
    const interval = setInterval(() => {
      setCurrentBottleIndex((prevIndex) => (prevIndex + 1) % bottles.length);
    }, 150);

    return () => clearInterval(interval);
  }, [bottles.length]);

  return (
    <View style={styles.container}>
      {bottles[currentBottleIndex]}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});