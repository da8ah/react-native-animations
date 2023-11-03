import { FontAwesome } from "@expo/vector-icons"
import { Stack, router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { TouchableOpacity } from "react-native"

export default function HomeLayout() {
    return <>
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen
                name="drawer/index"
                options={{
                    headerShown: true,
                    headerTitle: "",
                    headerLeft: HeaderButton
                }}
            />
        </Stack>
        <StatusBar style="auto" />
    </>
}


function HeaderButton() {
    return <TouchableOpacity
        style={{ paddingHorizontal: 10 }}
        onPress={() => router.push("/route")}
    >
        <FontAwesome name="arrow-left" size={32} color={"black"} />
    </TouchableOpacity>
}