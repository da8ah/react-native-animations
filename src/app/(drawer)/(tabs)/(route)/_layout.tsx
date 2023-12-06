import { Stack, useLocalSearchParams } from "expo-router"
import { components } from "."

export default function StackLayout() {
    const { viewer } = useLocalSearchParams<{ viewer: string }>()
    return <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="[viewer]" options={{ headerShown: true, title: components[viewer]?.type.name || "" }} />
    </Stack>
}