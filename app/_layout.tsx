import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';



export default function RootLayout() {
 

  return (
      <Stack screenOptions={{
        headerShown:false
      }}>
        
        <Stack.Screen name='index'/>
        <Stack.Screen name="addReminder"/>
      </Stack>
  );
}
