import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../../lib/supabase';


export default function RegisterScreen() {
const router = useRouter();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [displayName, setDisplayName] = useState('');
const [loading, setLoading] = useState(false);


const signUp = async () => {
setLoading(true);
const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { display_name: displayName } } });
setLoading(false);
if (error) return Alert.alert('Błąd rejestracji', error.message);
Alert.alert('Zarejestrowano', 'Sprawdź email, aby potwierdzić konto jeśli wymagane.');
router.replace('/onboarding');
};


return (
<SafeAreaView className="flex-1 bg-white p-6">
<Text className="text-2xl font-bold mb-6">Zarejestruj się</Text>


<Text className="text-sm text-gray-600">Nazwa</Text>
<TextInput value={displayName} onChangeText={setDisplayName} className="border p-3 rounded-md mb-4" />


<Text className="text-sm text-gray-600">Email</Text>
<TextInput value={email} onChangeText={setEmail} className="border p-3 rounded-md mb-4" keyboardType="email-address" autoCapitalize="none" />


<Text className="text-sm text-gray-600">Hasło</Text>
<TextInput value={password} onChangeText={setPassword} secureTextEntry className="border p-3 rounded-md mb-6" />


<TouchableOpacity onPress={signUp} className="bg-green-600 px-4 py-3 rounded-md items-center">
<Text className="text-white font-semibold">{loading ? 'Tworzenie...' : 'Zarejestruj'}</Text>
</TouchableOpacity>


<View className="mt-4 flex-row justify-center">
<Text>Masz konto? </Text>
<TouchableOpacity onPress={() => router.push('/auth/login')}>
<Text className="text-blue-600">Zaloguj się</Text>
</TouchableOpacity>
</View>
</SafeAreaView>
);
}