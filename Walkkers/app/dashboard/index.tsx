import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../../lib/supabase';


export default function Dashboard() {
const router = useRouter();
const [user, setUser] = useState<any>(null);


useEffect(() => {
const sessionUser = supabase.auth.getUser().then(res => setUser(res.data.user));
// better: use auth state change listener in production
}, []);


const signOut = async () => {
await supabase.auth.signOut();
router.replace('/');
};


return (
<SafeAreaView className="flex-1 bg-white p-6">
<View className="flex-row justify-between items-center">
<Text className="text-2xl font-bold">Dashboard</Text>
<TouchableOpacity onPress={signOut} className="px-3 py-1 border rounded-md">
<Text>Wyloguj</Text>
</TouchableOpacity>
</View>


<View className="mt-6">
<Text className="text-sm text-gray-600">Saldo punktów</Text>
<Text className="text-3xl font-bold mt-2">--</Text>
</View>


<View className="mt-8 space-y-3">
<TouchableOpacity onPress={() => router.push('/rewards')} className="bg-yellow-500 px-4 py-3 rounded-md">
<Text className="text-white font-semibold">Nagrody</Text>
</TouchableOpacity>


<TouchableOpacity onPress={() => router.push('/dashboard/steps')} className="border px-4 py-3 rounded-md">
<Text className="font-semibold">Kroki</Text>
</TouchableOpacity>
</View>
</SafeAreaView>
);
}