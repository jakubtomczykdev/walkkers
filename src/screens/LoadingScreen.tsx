// src/screens/LoadingScreen.tsx
import React from 'react';
import { View, Text, Image, ActivityIndicator, StatusBar } from 'react-native';
import logo from '../../assets/images/logo.png';

// --- POPRAWIONA SKŁADNIA ---
export function LoadingScreen() {
  const spinnerColor = '#FFFFFF'; 

  return (
    <View className="flex-1 items-center bg-primary pt-20">
      <StatusBar barStyle="light-content" backgroundColor="#3D8BFF" />
      
      <View className="flex-1 items-center justify-center pt-24">
        <Image
          source={logo}
          className="w-32 h-32" 
          resizeMode="contain"
        />
        <Text 
          className="text-4xl text-white font-quicksand-bold mt-4"
        >
          Walkkers
        </Text>
      </View>

      <View className="h-1/3 items-center justify-start">
        <ActivityIndicator size="large" color={spinnerColor} />
      </View>
    </View>
  );
};