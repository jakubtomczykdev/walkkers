import { View, Text, Dimensions } from "react-native";
import { SafeAreaView, Pressable } from "react-native";
import { Link } from "expo-router";
import Carousel from "react-native-reanimated-carousel";
import LottieView from "lottie-react-native";

// Statyczny import animacji
import walking from "../../assets/lottie/walking.json";
import ads from "../../assets/lottie/ads.json";
import gift from "../../assets/lottie/gift.json";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    key: "welcome",
    title: "Welcome to Walkkers",
    subtitle: "Earn points for every step you take and claim rewards!",
    lottie: walking,
    bgColor: "from-blue-500 to-purple-600",
  },
  {
    key: "ads",
    title: "Watch & Earn",
    subtitle: "Watch ads to claim more points faster.",
    lottie: ads,
    bgColor: "from-purple-500 to-pink-500",
  },
  {
    key: "gift",
    title: "Redeem Points",
    subtitle: "Convert your points into gift cards and rewards.",
    lottie: gift,
    bgColor: "from-pink-500 to-red-500",
  },
];

export default function OnboardingSwipe() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Carousel
        loop={false}
        width={width}
        height={height}
        data={slides}
        renderItem={({ item, index }) => (
          <View
            className={`flex-1 items-center justify-center p-6 bg-gradient-to-b ${item.bgColor}`}
          >
            <LottieView
              source={item.lottie}
              autoPlay
              loop
              style={{ width: 250, height: 250 }}
            />
            <Text className="text-4xl font-bold text-blue-500 text-center mt-6">
              {item.title}
            </Text>
            <Text className="text-black text-center mt-4 text-lg">
              {item.subtitle}
            </Text>

            {/* Przycisk tylko na ostatnim slajdzie */}
            {index === slides.length - 1 && (
              <Link href="/onboarding/permissions" asChild>
                <Pressable className="mt-10 bg-white px-10 py-3 rounded-full shadow-lg">
                  <Text className="text-purple-600 font-bold text-lg text-center">
                    Get Started
                  </Text>
                </Pressable>
              </Link>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
}
