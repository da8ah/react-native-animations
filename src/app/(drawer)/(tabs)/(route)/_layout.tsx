import { Stack, useGlobalSearchParams } from "expo-router"
import { components } from "."

export default function StackLayout() {
    const { viewer } = useGlobalSearchParams<{ viewer: string }>()
    return <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="[viewer]" options={{ headerShown: true, title: !!viewer && components[viewer]?.type.name || "" }} />
    </Stack>
}