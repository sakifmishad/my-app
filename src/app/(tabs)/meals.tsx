import { colors } from '@/styles/global';
import { Text, View } from 'react-native';

export default function AllMealScreen() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text style={{ color: colors.text, fontSize: 24 }}>All Meals</Text>
    </View>
  );
}
