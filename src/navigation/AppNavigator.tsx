// src/navigation/AppNavigator.tsx
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import { useAuth } from '../context/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';

// ... (Typy RootStackParamList bez zmian) ...
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

// --- POPRAWIONA SKŁADNIA ---
// Po prostu używamy 'function' bez 'React.FC' i bez 'props'
export function AppNavigator() {
  const { token, status } = useAuth();

  useEffect(() => {
    if (status !== 'pending') {
      SplashScreen.hide();
    }
  }, [status]);

  if (status === 'pending') {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {token == null ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};