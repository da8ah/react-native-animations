import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Drawer } from 'expo-router/drawer'
import { StatusBar } from "expo-status-bar"
import { TouchableOpacity } from "react-native"

export default function HomeLayout() {
    return <>
        <Drawer
            screenOptions={{ swipeEdgeWidth: 0 }}
        >
            <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
            <Drawer.Screen
                name="drawer/index"
                options={{
                    headerShown: true,
                    headerTitle: "",
                    headerLeft: HeaderButton
                }}
            />
        </Drawer>
        <StatusBar style="auto" />
    </>
}


function HeaderButton() {
    return <TouchableOpacity
        onPress={() => router.push("/route")}
    >
        <Ionicons name="md-close-circle" size={32} color={"black"} />
    </TouchableOpacity>
}