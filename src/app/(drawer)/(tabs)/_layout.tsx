import { FontAwesome } from "@expo/vector-icons"
import { Tabs } from "expo-router"

export default function TabsLayout() {
    return <Tabs screenOptions={{ headerShown: false, tabBarLabel: "" }}>
        <Tabs.Screen
            name="route"
            options={{
                tabBarIcon: ({ focused, color }) => <FontAwesome name="code-fork" size={focused ? 32 : 24} color={color} />
            }}
        />
        <Tabs.Screen
            name="components"
            options={{
                tabBarIcon: ({ focused, color }) => <FontAwesome name="code" size={focused ? 32 : 24} color={color} />
            }}
        />
    </Tabs>
}