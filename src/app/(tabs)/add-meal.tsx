import { addMeal } from '@/storage/meals';
import { colors } from '@/styles/global';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import * as Haptics from 'expo-haptics';


export default function AddMealScreen() {
  const [name, setName] = useState(''); //nam = variable, setName = function to update variable, useState('') = initial value of variable
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');

  const handleAddMeal = async () => {
    if (!name || !calories) {
      Alert.alert('Error', 'Please enter a meal name and calories.');

      return;
    }

    await addMeal({
      name,
      calories: Number(calories),
      protein: Number(protein) || 0,
      carbs: Number(carbs) || 0,
      fat: Number(fat) || 0,
    });

    setName('');
    setCalories('');
    setProtein('');
    setCarbs('');
    setFat('');

    Alert.alert('Success', 'Meal added successfully!');

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    router.push('/');
  };



  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Add Meal</Text>

        <TextInput
          style={styles.input}
          placeholder='Meal name'
          placeholderTextColor={colors.textSecondary}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder='Calories'
          placeholderTextColor={colors.textSecondary}
          keyboardType='numeric'
          value={calories}
          onChangeText={setCalories}
        />

        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.rowInput]}
            placeholder='Protein (g)'
            placeholderTextColor={colors.textSecondary}
            keyboardType='numeric'
            value={protein}
            onChangeText={setProtein}
          />
          <TextInput
            style={[styles.input, styles.rowInput]}
            placeholder='Carbs (g)'
            placeholderTextColor={colors.textSecondary}
            keyboardType='numeric'
            value={carbs}
            onChangeText={setCarbs}
          />
          <TextInput
            style={[styles.input, styles.rowInput]}
            placeholder='Fat (g)'
            placeholderTextColor={colors.textSecondary}
            keyboardType='numeric'
            value={fat}
            onChangeText={setFat}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleAddMeal} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Add Meal</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 18,
  },
  input: {
    backgroundColor: '#3a3860',
    color: colors.text,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 14,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 18,
  },
  rowInput: {
    flex: 1,
    marginBottom: 0,
  },
  button: {
    backgroundColor: '#67d3ff',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '800',
  },
});