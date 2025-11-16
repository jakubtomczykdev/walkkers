import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Svg, Circle } from 'react-native-svg';
import { Link } from 'expo-router';

interface TaskItemProps {
  progress: number;
  title: string;
  reward: number;
  collected: boolean;
}

const TaskItem = ({ progress, title, reward, collected }: TaskItemProps) => {
  const isCompleted = progress === 100;
  const circleColor = isCompleted ? '#34D399' : '#6366F1'; // Green for completed, Indigo for in-progress

  return (
    <View className="bg-white rounded-2xl p-4 mb-3 flex-row justify-between items-center shadow-sm">
      <View className="flex-row items-center">
        <View className="w-12 h-12 items-center justify-center mr-4">
          <Svg width="48" height="48">
            <Circle cx="24" cy="24" r="22" stroke="#E5E7EB" strokeWidth="4" fill="transparent" />
            <Circle
              cx="24"
              cy="24"
              r="22"
              stroke={circleColor}
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 22}
              strokeDashoffset={(2 * Math.PI * 22) * (1 - progress / 100)}
              rotation="-90"
              origin="24, 24"
              strokeLinecap="round"
            />
          </Svg>
          <Text className="absolute font-bold text-xs" style={{ color: circleColor }}>{progress}%</Text>
        </View>
        <Text className="text-base font-semibold text-gray-700">{title}</Text>
      </View>
      <TouchableOpacity
        disabled={collected || !isCompleted}
        className={`px-4 py-2 rounded-full ${collected || !isCompleted ? 'bg-gray-200' : 'bg-indigo-500'}`}
      >
        <Text className={`font-bold text-sm ${collected || !isCompleted ? 'text-gray-400' : 'text-white'}`}>
          {collected ? 'Odebrano' : `Odbierz +${reward} ⭐`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default function TasksScreen() {
  const [activeTab, setActiveTab] = useState('Codzienne');
  const tabs = ['Codzienne', 'Tygodniowe', 'Miesięczne', 'Specjalne'];

  const dailyTasks: TaskItemProps[] = [
    { progress: 89, title: 'Przejdź 6000 kroków', reward: 10, collected: false },
    { progress: 100, title: 'Codzienny Bonus', reward: 10, collected: false },
    { progress: 0, title: 'Obejrzyj reklamę', reward: 20, collected: false },
    { progress: 100, title: 'Ukończ 1 zadanie', reward: 5, collected: true },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#F0F2F5]">
      <View className="p-6">
        <View className="flex-row items-center justify-center relative mb-6">
            <Link href="/dashboard" className="absolute left-0">
                <Text className="text-indigo-500 text-base">Powrót</Text>
            </Link>
            <Text className="text-2xl font-bold text-gray-800">Twoje Zadania</Text>
        </View>

        <View className="flex-row justify-around bg-gray-200/80 rounded-full p-1 mb-6">
          {tabs.map(tab => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`py-2 px-4 rounded-full ${activeTab === tab ? 'bg-white shadow-md' : ''}`}
            >
              <Text className={`font-semibold ${activeTab === tab ? 'text-indigo-500' : 'text-gray-500'}`}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 100 }}>
        {activeTab === 'Codzienne' && dailyTasks.map((task, index) => (
          <TaskItem key={index} {...task} />
        ))}
        {/* Add other tabs content here */}
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
