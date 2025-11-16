import { Link } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Svg, Circle, G } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedImage = Animated.createAnimatedComponent(Image);

const { width } = Dimensions.get('window');
const RING_SIZE = width * 0.7;
const STROKE_WIDTH = 25;
const RADIUS = (RING_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const PENGUIN_SIZE = 100;

export default function DashboardScreen() {
  const [steps] = React.useState(5810);
  const goal = 6000;
  const progress = Math.min(1, steps / goal);

  const animatedProgress = useSharedValue(0);

  useEffect(() => {
    animatedProgress.value = withTiming(progress, { duration: 1500 });
  }, [progress]);

  const animatedCircleProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCUMFERENCE - CIRCUMFERENCE * animatedProgress.value,
  }));

  const penguinAnimatedStyle = useAnimatedStyle(() => {
    const angle = animatedProgress.value * 2 * Math.PI;
    const penguinPathRadius = RADIUS;
    const penguinX = (RING_SIZE / 2) + penguinPathRadius * Math.cos(angle - Math.PI / 2);
    const penguinY = (RING_SIZE / 2) + penguinPathRadius * Math.sin(angle - Math.PI / 2);
    return {
      position: 'absolute',
      left: penguinX - PENGUIN_SIZE / 2,
      top: penguinY - PENGUIN_SIZE / 1.5, // Fine-tuned to position penguin on top
    };
  });

  return (
    <SafeAreaView className="flex-1 bg-[#F0F2F5]">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-6 pb-24">
          {/* Top bar */}
          <View className="flex-row justify-center items-center my-4">
            <View className="flex-row items-center space-x-3 bg-white px-4 py-2 rounded-full shadow-sm">
              <Image source={require('../../assets/images/star.png')} className="w-5 h-5" />
              <Text className="font-semibold text-base text-gray-700">120</Text>
              <View className="w-px h-4 bg-gray-200 mx-2" />
              <Image source={require('../../assets/images/fire_emoji.png')} className="w-5 h-5" />
              <Text className="font-semibold text-base text-gray-700">5</Text>
            </View>
          </View>

          {/* Progress ring */}
          <View className="items-center justify-center my-8">
            <View style={{ width: RING_SIZE, height: RING_SIZE }} className="items-center justify-center">
              <Svg width={RING_SIZE} height={RING_SIZE} style={{ zIndex: 10 }}>
                <G rotation={-90} origin={`${RING_SIZE / 2}, ${RING_SIZE / 2}`}>
                  <Circle
                    cx={RING_SIZE / 2}
                    cy={RING_SIZE / 2}
                    r={RADIUS}
                    stroke="#E5E7EB"
                    strokeWidth={STROKE_WIDTH}
                    fill="transparent"
                    
                  />
                  <AnimatedCircle
                    cx={RING_SIZE / 2}
                    cy={RING_SIZE / 2}
                    r={RADIUS}
                    stroke="#6366F1"
                    strokeWidth={STROKE_WIDTH}
                  
                    strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
                    animatedProps={animatedCircleProps}
                    fill="transparent"
                  />
                </G>
              </Svg>

              <View className="absolute items-center">
                <Text className="text-base text-gray-500">Dzisiaj</Text>
                <Text className="text-6xl font-bold text-gray-800 my-1">{steps.toLocaleString('pl-PL')}</Text>
                <Text className="text-base text-gray-400">/{goal}</Text>
              </View>
            </View>
            <AnimatedImage
                source={require('../../assets/images/penguin.png')}
                style={[{ width: PENGUIN_SIZE, height: PENGUIN_SIZE, zIndex: 20 }, penguinAnimatedStyle]}
              />
          </View>

          {/* Daily tasks */}
          <View>
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-xl font-bold text-gray-800">Codzienne zadania</Text>
              <Link href={"/tasks" as any} asChild>
                <TouchableOpacity>
                  <Text className="text-sm font-medium text-gray-500">Zobacz wszystkie</Text>
                </TouchableOpacity>
              </Link>
            </View>

            <View className="bg-white rounded-2xl p-4 mb-3 flex-row justify-between items-center shadow-sm">
              <View>
                <Text className="text-base font-semibold text-gray-700">Przejdź 6000 kroków</Text>
              </View>
              <View>
                <Text className="text-base font-bold text-indigo-500">{Math.round(progress * 100)}%</Text>
              </View>
            </View>

            <View className="bg-white rounded-2xl p-4 mb-3 flex-row justify-between items-center shadow-sm">
              <View>
                <Text className="text-base font-semibold text-gray-700">Codzienny bonus</Text>
              </View>
              <TouchableOpacity className="bg-indigo-500 px-5 py-2 rounded-full flex-row items-center space-x-2">
                <Text className="text-white font-bold text-sm">Odbierz</Text>
                <Text className="text-white font-bold text-sm">+10 ⭐</Text>
              </TouchableOpacity>
            </View>
            
            <View className="bg-white rounded-2xl p-4 mb-3 flex-row justify-between items-center shadow-sm">
              <View>
                <Text className="text-base font-semibold text-gray-700">Cel dzienny</Text>
              </View>
              <TouchableOpacity className="bg-indigo-500 px-5 py-2 rounded-full flex-row items-center space-x-2">
                <Text className="text-white font-bold text-sm">Odbierz</Text>
                <Text className="text-white font-bold text-sm">+10 ⭐</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom navigation */}
      <View className="absolute bottom-0 left-0 right-0 bg-white/95 border-t border-gray-200 py-2 rounded-t-3xl">
        <View className="flex-row justify-around items-center pt-2">
          <TouchableOpacity className="items-center">
            <Image source={require('../../assets/images/home.png')} className="w-6 h-6 mb-1" style={{ tintColor: '#6366F1' }} />
            <Text className="text-xs text-[#6366F1] font-bold">Home</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <Image source={require('../../assets/images/gift.png')} className="w-6 h-6 mb-1" style={{ tintColor: '#A0AEC0' }} />
            <Text className="text-xs text-gray-400 font-medium">Nagrody</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <Image source={require('../../assets/images/award.png')} className="w-6 h-6 mb-1" style={{ tintColor: '#A0AEC0' }} />
            <Text className="text-xs text-gray-400 font-medium">Rankingi</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <Image source={require('../../assets/images/user.png')} className="w-6 h-6 mb-1" style={{ tintColor: '#A0AEC0' }} />
            <Text className="text-xs text-gray-400 font-medium">Profil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
