import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

const C = {
  background: "#F8EFD9",
  text: "#2E2F2A",
};
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
