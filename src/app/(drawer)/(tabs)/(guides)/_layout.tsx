import { Stack, useGlobalSearchParams } from "expo-router"
import { components } from "."

export default function StackLayout() {
    const { id } = useGlobalSearchParams<{ id: string }>()
    return <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="[id]" options={{ headerShown: true, title: !!id && components[id]?.type.name || "", animation: "slide_from_right" }} />
    </Stack>
}