import { Stack } from "expo-router";
import { colors } from "../../styles/global";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerStyle: { backgroundColor: colors.header },
    headerTintColor: '#fff'
  }} >
    <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
    <Stack.Screen name="meals" options={{ title: 'Meals' }} />

  </Stack>

}

