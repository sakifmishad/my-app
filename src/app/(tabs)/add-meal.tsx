import { colors } from '@/styles/global';
import { View, Text } from 'react-native';

export default function AddMealScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: colors.text, fontSize: 24 }}>Add Meal</Text>
    </View>
  );
}
