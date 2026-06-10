import MealItem from '@/components/MealItem';
import { clearAllMeals, getMeals, Meal } from '@/storage/meals';
import { colors, globalStyles } from '@/styles/global';
import { Text } from '@react-navigation/elements';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AllMealScreen() {

  // React state hook (typed with TypeScript) - quick breakdown:
  // - `meals`: current state value, an array of `Meal` objects.
  // - `setMeals`: function to update the `meals` state (triggers re-render).
  // - `<Meal[]>`: TypeScript generic that enforces the state is an array of `Meal`.
  // - `[]`: initial state value (starts empty).
  // Examples:
  //   setMeals(dataFromStorage); // replace state with loaded array
  //   setMeals(prev => [...prev, newMeal]); // append a new meal

  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
  }

  const handleClearAll = async () => {
    await clearAllMeals();
    loadMeals();
  }


  // Example usage and explanation:
  // `useFocusEffect` runs the provided callback each time the screen comes into focus.
  // It's commonly wrapped with `useCallback` so the callback identity is stable.
  // Example (memoized callback):
  // useFocusEffect(
  //   useCallback(() => {
  //     loadMeals();
  //   }, []),
  // );
  //
  // Why use this: unlike `useEffect`, this runs when the screen is focused (useful
  // for refreshing data after navigation). `useCallback` prevents re-registering
  // the focus effect unnecessarily.
  //
  // Async/guarded pattern example to avoid updating state after unmount:
  // useFocusEffect(
  //   useCallback(() => {
  //     let mounted = true;
  //     (async () => {
  //       const data = await getMeals();
  //       if (mounted) setMeals(data);
  //     })();
  //     return () => { mounted = false; };
  //   }, []),
  // );

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    // <View style={{
    //   flex: 1,
    //   backgroundColor: colors.background,
    //   alignItems: 'center',
    //   justifyContent: 'center'
    // }}>
    //   <Text style={{ color: colors.text, fontSize: 24 }}>All Meals</Text>
    // </View>

    <SafeAreaView style={styles.container}>
      <ScrollView style={{
        flex: 1,
        backgroundColor: colors.background
      }} contentContainerStyle={styles.content}>
        <View style={globalStyles.container}>
          <Text style={styles.text}>All Meals</Text>
          <TouchableOpacity onPress={handleClearAll}>
            <Text style={styles.clearButton}>Clear All</Text>
          </TouchableOpacity>
          {meals.length == 0 ? (<Text style={globalStyles.empty}>No meals logged yet.</Text>
          ) : (
            meals.map((meal) => (
              <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                calories={meal.calories}
                protein={meal.protein}
                carbs={meal.carbs}
                fat={meal.fat}
                ondelete={loadMeals}
              />
            ))
          )
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );



}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    alignItems: "stretch",
  },

  clearButton: {
    color: 'red',
    fontSize: 16,
  },


  text: {
    color: "#fff",
    fontSize: 22,

  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
  },

  box: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },

  leftBox: {
    height: 100,
    //left
    alignSelf: "flex-start",
  },


  rightBox: {
    width: 100,
    height: 100,
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },

  smallBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
  },

  flexRow: {
    flexDirection: "row",
    width: "100%",
    height: 100,
  },

  redBox: {
    flex: 1,
    backgroundColor: "red",
  },

  blueBox: {
    flex: 2,
    backgroundColor: "blue",
  },
});
