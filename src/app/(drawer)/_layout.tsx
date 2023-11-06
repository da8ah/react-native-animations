import { Ionicons } from "@expo/vector-icons"
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, DrawerToggleButton } from "@react-navigation/drawer"
import { Drawer } from 'expo-router/drawer'
import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"

export default function HomeLayout() {
    return <>
        <Drawer
            drawerContent={DrawerContent}
            screenOptions={{
                headerStatusBarHeight: 0,
                headerTitle: "",
                headerLeft: () => <DrawerToggleButton />
            }}
        >
            <Drawer.Screen
                name="(tabs)"
                options={{
                    drawerItemStyle: { display: "none" }
                }}
            />
            <Drawer.Screen
                name="user/index"
                options={{
                    title: "User",
                    drawerIcon: ({ size, color }) => <Ionicons name="person" size={size} color={color} />
                }}
            />
        </Drawer>
        <StatusBar style="auto" />
    </>
}

function DrawerContent(props: DrawerContentComponentProps) {
    return <DrawerContentScrollView {...props}>
        <View
            style={{
                paddingVertical: 50,
                paddingHorizontal: 2,
                borderWidth: 1,
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}
        >
            <Ionicons name="md-person-circle" size={70} color="black" />
            <Text>User</Text>
        </View>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
}