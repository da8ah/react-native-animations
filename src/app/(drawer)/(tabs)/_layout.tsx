import { FontAwesome } from "@expo/vector-icons"
import { Tabs, router, useNavigation } from "expo-router"

export default function TabsLayout() {
    const navigation = useNavigation()
    return <Tabs screenOptions={{ headerShown: false, tabBarLabel: "" }}>
        <Tabs.Screen
            name="(route)"
            listeners={{
                tabPress: () => {
                    if (navigation.getState().type === "stack" && navigation.getState().index === 1)
                        router.replace("/(drawer)/(tabs)/(route)/")
                }
            }}
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