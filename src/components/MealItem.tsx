import { deleteMeal } from '@/storage/meals';
import * as Haptics from 'expo-haptics';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';


type MealItemProps = {
    id: string;
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    ondelete: () => void;
}

export default function MealItem({ id, name,
    calories,
    protein,
    carbs,
    fat,
    ondelete,
}: MealItemProps) {

    const handleLongPress = () => {
        Alert.alert('Delete Meal', 'Are you sure you want to delete this meal?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Delete', style: 'destructive',
                onPress: async () => {
                    await deleteMeal(id);
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                    ondelete();
                }
            },
        ]);
    };

    return (
        <TouchableOpacity style={styles.container} onLongPress={handleLongPress}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.name}>
                {calories} cal • {protein}g P • {carbs}g C • {fat}g F
            </Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#16213e',
        borderRadius: 14,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.18,
        shadowRadius: 12,
        elevation: 3,
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        color: '#ffffff',
    },
    macros: {
        marginTop: 6,
    },
    metaText: {
        fontSize: 13,
        color: '#a0a0b0',
    },
});
