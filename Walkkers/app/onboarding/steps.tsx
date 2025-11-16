import { SafeAreaView, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function OnboardingSteps() {
  return (
    <SafeAreaView className="flex-1 bg-white p-6 justify-center">
      <Text className="text-3xl font-bold text-center mb-8">How it works</Text>

      <View className="space-y-6">
        <View className="flex-row items-center space-x-4">
          <MaterialCommunityIcons name="walk" size={40} color="#4F46E5" />
          <Text className="text-lg">Walk daily to earn points</Text>
        </View>

        <View className="flex-row items-center space-x-4">
          <MaterialCommunityIcons name="video" size={40} color="#4F46E5" />
          <Text className="text-lg">Watch ads to claim points</Text>
        </View>

        <View className="flex-row items-center space-x-4">
          <MaterialCommunityIcons name="gift" size={40} color="#4F46E5" />
          <Text className="text-lg">Redeem points for gift cards</Text>
        </View>
      </View>

      <Link href="/onboarding/permissions" asChild>
        <Pressable className="mt-10 bg-purple-600 px-8 py-3 rounded-full shadow-lg">
          <Text className="text-white font-bold text-lg text-center">Next</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}
