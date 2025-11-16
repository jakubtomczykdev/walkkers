import { SafeAreaView, Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function HomeScreen() {
return (
<SafeAreaView className="flex-1 bg-white items-center justify-center p-6">
<Text className="text-3xl font-bold text-gray-900">Walkkers</Text>
<Text className="text-gray-600 mt-2 text-center">Earn points for steps — watch ads or complete offers to unlock giftcards.</Text>


<View className="mt-6 w-full">
<Link href="/auth/login" className="bg-blue-600 px-4 py-3 rounded-full items-center">
<Text className="text-white text-center font-semibold">Zaloguj się</Text>
</Link>
</View>


<View className="mt-3 w-full">
<Link href="/auth/register" className="border border-blue-600 px-4 py-3 rounded-full items-center">
<Text className="text-blue-600 text-center font-semibold">Zarejestruj się</Text>
</Link>
</View>
</SafeAreaView>
);
}