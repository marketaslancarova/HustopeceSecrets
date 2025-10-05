import HeroCard from "@/components/HeroCard";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// ↑ všimni si: importuji i Text a View

const C = {
  background: "#F8EFD9",
  text: "#2E2F2A",
  card: "#D7DFAC",
};

const story = {
  title: "Ztracené rybníky",
  age: "6–12 let",
  terrain: "štěrk/silnice",
  duration: "1:30h",
  description:
    "Kdysi tu bývaly rybníky plné vody, ryb a zpěvu ptáků. Dnes už jsou vyschlé, ale jejich příběhy nezmizely.",
  image: require("../../assets/pounds.png"),
  badge: "Novinka",
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HeroCard story={story} />
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.background },
  scrollContent: { padding: 20 },
});
