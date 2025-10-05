import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  // const colorScheme = useColorScheme();
  const BAR_BG = "#6C7A40"; // zelené pozadí
  const ACTIVE = "#E2E7B1"; // světle zelená (aktivní)
  const INACTIVE = "#2E2F2A"; // tmavě šedá (neaktivní)

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: ACTIVE,
        tabBarInactiveTintColor: INACTIVE,
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,

        headerShown: false,
        tabBarStyle: {
          backgroundColor: BAR_BG,
          height: 78,
          paddingTop: 6,
          paddingBottom: 10,
          borderTopWidth: 0,
          elevation: 0, // android shadow pryč
        },
      }}
    >
      <Tabs.Screen
        name="mysteries"
        options={{
          title: "Mysteries",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="game-controller" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="stories"
        options={{
          title: "Stories",
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
    </Tabs>
  );
}
