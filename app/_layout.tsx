import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"

export default () => (
    <>
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
        </Stack>
        <StatusBar style="auto" />
    </>
)