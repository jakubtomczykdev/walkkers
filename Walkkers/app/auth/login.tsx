import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../../lib/supabase';


export default function LoginScreen() {
const router = useRouter();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);


const signIn = async () => {
setLoading(true);
const { error } = await supabase.auth.signInWithPassword({ email, password });
setLoading(false);
if (error) return Alert.alert('Błąd logowania', error.message);
router.replace('/onboarding');
};


return (
<SafeAreaView className="flex-1 bg-white p-6">
<Text className="text-2xl font-bold mb-6">Zaloguj się</Text>


<Text className="text-sm text-gray-600">Email</Text>
<TextInput value={email} onChangeText={setEmail} className="border p-3 rounded-md mb-4" keyboardType="email-address" autoCapitalize="none" />


<Text className="text-sm text-gray-600">Hasło</Text>
<TextInput value={password} onChangeText={setPassword} secureTextEntry className="border p-3 rounded-md mb-6" />


<TouchableOpacity onPress={signIn} className="bg-blue-600 px-4 py-3 rounded-md items-center">
<Text className="text-white font-semibold">{loading ? 'Logowanie...' : 'Zaloguj'}</Text>
</TouchableOpacity>


<View className="mt-4 flex-row justify-center">
<Text>Nie masz konta? </Text>
<TouchableOpacity onPress={() => router.push('/auth/register')}>
<Text className="text-blue-600">Zarejestruj się</Text>
</TouchableOpacity>
</View>
</SafeAreaView>
);
}