import React from 'react';
import { Text, Pressable, PressableProps } from 'react-native';
import { buttonStyles } from '@/styles/button.styles';

type ButtonProps = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
} & Omit<PressableProps, 'children'>;

export function Button({ label, onPress, disabled, ...props }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        buttonStyles.button,
        pressed && buttonStyles.buttonPressed,
        disabled && { opacity: 0.5 },
      ]}
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      <Text style={buttonStyles.buttonText}>{label}</Text>
    </Pressable>
  );
}