import React, { useState } from 'react';
import { View, TextInput, Text, TextInputProps } from 'react-native';
import { inputStyles } from '@/styles/input.styles';

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
} & TextInputProps;

export function Input({
  placeholder,
  value,
  onChangeText,
  error,
  secureTextEntry,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={inputStyles.container}>
      <TextInput
        style={[
          inputStyles.input,
          isFocused && inputStyles.inputFocused,
          error && inputStyles.inputError,
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        {...props}
      />
      {error && <Text style={inputStyles.errorText}>{error}</Text>}
    </View>
  );
}