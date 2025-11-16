/*
import { Image } from 'expo-image';
import React from 'react';
import { View, Text, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { Link, usePathname } from 'expo-router';

interface NavItemInfo {
  path: string;
  icon: ImageSourcePropType;
  label: string;
}

interface NavItemProps extends NavItemInfo {
  isActive: boolean;
}

const navItems: NavItemInfo[] = [
  { path: '/dashboard', icon: require('../assets/images/home.png'), label: 'Home' },
  { path: '/rewards', icon: require('../assets/images/gift.png'), label: 'Nagrody' },
  { path: '/rankings', icon: require('../assets/images/award.png'), label: 'Rankingi' },
  { path: '/profile', icon: require('../assets/images/user.png'), label: 'Profil' },
];

const NavItem = ({ path, icon, label, isActive }: NavItemProps) => (
  <Link href={path as any} className="items-center">
    <Image
      source={icon}
      className="w-6 h-6 mb-1"
      style={{ tintColor: isActive ? '#6366F1' : '#A0AEC0' }}
      transition={300}
    />
    <Text className={`text-xs font-semibold ${isActive ? 'text-[#6366F1]' : 'text-gray-400'}`}>
      {label}
    </Text>
  </Link>
);

export default function BottomNavBar() {
  const pathname = usePathname();

  return (
    <View className="absolute bottom-0 left-0 right-0 bg-white/95 border-t border-gray-200 py-2 rounded-t-3xl">
      <View className="flex-row justify-around items-center pt-2">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            {...item}
            isActive={pathname.startsWith(item.path)}
          />
        ))}
      </View>
    </View>
  );
}
*/
