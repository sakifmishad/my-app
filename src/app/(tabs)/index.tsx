import CopyButton from "@/components/CopyButton";
import HomeHeader from "@/components/home_header";
import MacroGrid from "@/components/MacroGrid";
import RecentMeals from "@/components/RecentMeals";
import ShareButton from "@/components/ShareButton";
import { getMeals, Meal } from "@/storage/meals";
import { colors, globalStyles } from "@/styles/global";
import { Link, useFocusEffect } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Index() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    // Implementation for loading meals
    const data = await getMeals();
    setMeals(data);
    console.log('Loaded meals:', data);
  };

  useFocusEffect(() => {
    //After save it refresh and shows new value
    loadMeals();
  });

  return (
    <SafeAreaView style={globalStyles.container}>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.leftBox}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={[styles.text, { fontSize: 18 }]}>Md Sakif Rahaman Mishad</Text>
          <HomeHeader />
          {/* <Text style={[styles.text,{fontSize:16}]}>3.5.2026, 6:30 PM</Text> */}
        </View>

        <View style={globalStyles.header}>
          <Text style={globalStyles.title}>MacroZone</Text>
          <ShareButton meals={meals} />
        </View>


        <CopyButton meals={meals} />

        <MacroGrid meals={meals} />
        <RecentMeals meals={meals} onDelete={loadMeals} />

        <Link href='/meals' style={{ fontSize: 18, color: '#007bff' }}>
          Go to Meals
        </Link>


        {/* Text */}
        <Text style={styles.text}>Hello World</Text>

        {/* Margin */}
        <Text style={[styles.text, { marginTop: 20 }]}>My App</Text>

        {/* SizedBox equivalent */}
        <View style={{ height: 30 }} />

        {/* Column (default behavior) */}
        <View style={styles.box}>
          <Text style={styles.text}>Column Item 1</Text>
          <Text style={styles.text}>Column Item 2</Text>
          <Text style={styles.text}>Column Item 3</Text>
        </View>

        <View style={{ height: 30 }} />

        <View style={styles.row}>
          <View style={styles.smallBox}>
            <Text style={styles.text}>A</Text>
          </View>

          <View style={styles.smallBox}>
            <Text style={styles.text}>B</Text>
          </View>


          <View style={styles.smallBox}>
            <Text style={styles.text}>C</Text>
          </View>

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
    alignItems: "center",
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
