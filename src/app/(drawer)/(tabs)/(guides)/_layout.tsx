import { Stack, useLocalSearchParams } from "expo-router"
import { components } from "."

export default function StackLayout() {
    const { id } = useLocalSearchParams<{ id: string }>()
    return <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="[id]" options={{ headerShown: true, title: components[id]?.type.name || "", animation: "slide_from_right" }} />
    </Stack>
}