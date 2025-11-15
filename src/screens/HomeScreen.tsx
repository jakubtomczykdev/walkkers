// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useAuth } from '../context/AuthContext';

export function HomeScreen() {
  const { signOut, token } = useAuth();

  const handleLogoutPress = () => {
    console.log('HomeScreen: Użytkownik klika wyloguj');
    signOut();
  };

  return (
    <View className="flex-1 items-center justify-center bg-white p-8">
      <StatusBar barStyle="dark-content" />
      
      <Text className="text-3xl font-quicksand-bold text-gray-800 mb-4">
        Ekran Główny
      </Text>
      
      <Text className="text-base text-gray-600 mb-8">
        Jesteś zalogowany!
      </Text>

      <Text className="text-xs text-gray-400 mb-12 px-4" selectable>
        Twój token: {token}
      </Text>

      <TouchableOpacity
        className="w-full p-4 rounded-lg items-center bg-red-500"
        onPress={handleLogoutPress}
      >
        <Text className="text-white text-lg font-quicksand-bold">
          Wyloguj się
        </Text>
      </TouchableOpacity>
    </View>
  );
};