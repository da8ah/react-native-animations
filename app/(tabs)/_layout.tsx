import { FontAwesome } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import { useState } from "react"

export default function TabsLayout() {
    const [tabIndex, setTab] = useState(0)
    return <Tabs
        screenOptions={{
            headerTitle: "",
            tabBarStyle: { height: 60 },
            tabBarItemStyle: { paddingVertical: 2 },
            tabBarLabelStyle: { textTransform: "capitalize" }
        }}
    >
        <Tabs.Screen
            name="route"
            listeners={{
                tabPress: (e) => setTab(e.data?.state.index || 0)
            }}
            options={{
                tabBarIcon: () => <FontAwesome name="code-fork" size={32} color={tabIndex === 0 ? "royalblue" : "black"} />
            }}
        />
        <Tabs.Screen
            name="components"
            listeners={{
                tabPress: (e) => setTab(e.data?.state.index || 1)
            }}
            options={{
                tabBarIcon: () => <FontAwesome name="code" size={32} color={tabIndex === 1 ? "royalblue" : "black"} />
            }}
        />
    </Tabs>
}