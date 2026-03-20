import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import "./global.css";
import { Profile } from '@/app/Profile';


export default function App() {
  return (
    <View>
      <Profile />
      <Text className="text-3xl font-bold text-center text-blue-500">
        Welcome to NativeWind!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
