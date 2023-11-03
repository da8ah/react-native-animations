import { FontAwesome } from "@expo/vector-icons"
import { Tabs, router } from "expo-router"
import { TouchableOpacity, View } from "react-native"

export default function TabsLayout() {
    return <Tabs
        screenOptions={{
            headerLeft: HeaderButton,
            headerTitle: "",
            tabBarLabelStyle: { textTransform: "capitalize" },
            tabBarActiveTintColor: "black"
        }}
    >
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

function HeaderButton() {
    return <TouchableOpacity
        style={{ paddingHorizontal: 10 }}
        onPress={() => router.push("/drawer/")}
    >
        <FontAwesome name="list" size={32} color={"black"} />
    </TouchableOpacity>
}