import { Ionicons } from "@expo/vector-icons"
import { DrawerToggleButton } from "@react-navigation/drawer"
import { router } from "expo-router"
import { Drawer } from 'expo-router/drawer'
import { StatusBar } from "expo-status-bar"
import { TouchableOpacity } from "react-native"

export default function HomeLayout() {
    return <>
        <Drawer
            screenOptions={{
                headerTitle: ""
            }}
        >
            <Drawer.Screen
                name="(tabs)"
                options={{
                    headerLeft: () => <DrawerToggleButton />
                }}
            />
            <Drawer.Screen
                name="drawer/index"
                options={{
                    headerLeft: HeaderButton
                }}
            />
        </Drawer>
        <StatusBar style="auto" />
    </>
}


function HeaderButton() {
    return <TouchableOpacity
        onPress={() => router.push("/(tabs)/route")}
    >
        <Ionicons name="md-close-circle" size={32} color={"black"} />
    </ TouchableOpacity>
}