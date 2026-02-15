import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function AddressesHeader() {
  return (
    <View className="px-6 pb-5 border-b border-surface flex-row items-center">
      <TouchableOpacity onPress={() => router.back()} className="mr-4">
        <Ionicons name="arrow-back" size={28} color="#FFFFFF" />
      </TouchableOpacity>
      <Text className="text-text-primary text-2xl font-bold">My Addresses</Text>
    </View>
  );
}
