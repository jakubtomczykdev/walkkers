import { SafeAreaView, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function OnboardingPermissions() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white p-6">
      <Text className="text-3xl font-bold text-center mb-4">Permissions</Text>
      <Text className="text-gray-500 text-center mb-8">
        We need access to your motion & fitness data to accurately count your steps.
      </Text>

      <Link href="/dashboard" asChild>
        <Pressable className="bg-purple-600 px-8 py-3 rounded-full shadow-lg">
          <Text className="text-white font-bold text-lg text-center">Continue</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}
