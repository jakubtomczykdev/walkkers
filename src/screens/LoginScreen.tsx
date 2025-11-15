// src/screens/LoginScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StatusBar, Alert } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { useAuth } from '../context/AuthContext';
import { loginApi } from '../api/auth';

export function LoginScreen() {
  const { signIn } = useAuth();

  const { mutate: performLogin, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      console.log('LoginScreen: Logowanie API udane, przekazuję token do AuthContext');
      signIn(data.token); 
    },
    onError: (error) => {
      console.error('LoginScreen: Błąd logowania API', error);
      Alert.alert('Błąd', 'Nie udało się zalogować.');
    },
  });

  const handleLoginPress = () => {
    if (isPending) return; 
    performLogin(); 
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-8">
      <StatusBar barStyle="dark-content" />
      
      <Text className="text-3xl font-quicksand-bold text-primary mb-12">
        Witaj w Walkkers
      </Text>
      
      {/* Tutaj <TextInput> */}

      <TouchableOpacity
        className={`
          w-full p-4 rounded-lg items-center justify-center
          ${isPending ? 'bg-primary/70' : 'bg-primary'}
        `}
        onPress={handleLoginPress}
        disabled={isPending}
      >
        {isPending ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text className="text-white text-lg font-quicksand-bold">
            Zaloguj się
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};