import { Tabs } from "expo-router"

export default function TabsLayout() {
    return <Tabs screenOptions={{ headerTitle: "" }}>
        <Tabs.Screen name="tutorial" />
        <Tabs.Screen name="components" />
        <Tabs.Screen name="projects" />
    </Tabs>
}