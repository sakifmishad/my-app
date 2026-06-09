import { StyleSheet, Text, View } from 'react-native';

type MealItemProps = {
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
}

export default function MealItem({ name,
    calories,
    protein,
    carbs,
    fat,
}: MealItemProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.macros}>
                <Text style={styles.metaText}>{calories} cal • {protein}g P • {carbs}g C • {fat}g F</Text>
            </View>
        </View>
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
