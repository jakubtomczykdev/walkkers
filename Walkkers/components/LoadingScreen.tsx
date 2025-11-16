import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Image } from 'expo-image';

export default function LoadingScreen() {
  return (
    <View className="flex-1 bg-[#2D77FF] justify-center items-center">
      <View className="flex-1 justify-center items-center">
        <Image
          source={require('../assets/images/penguin.png')}
          className="w-[150px] h-[150px]"
          contentFit="contain"
          transition={300}
        />
        <Text className="text-[48px] font-bold text-white mt-5">Walkkers</Text>
      </View>
      <ActivityIndicator size="large" color="#FFFFFF" className="mb-[60px]" />
    </View>
  );
}
