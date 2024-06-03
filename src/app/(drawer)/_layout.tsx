import { Ionicons } from "@expo/vector-icons"
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, DrawerToggleButton } from "@react-navigation/drawer"
import { router } from "expo-router"
import { Drawer } from 'expo-router/drawer'
import { StatusBar } from "expo-status-bar"
import { BackHandler, Text, TouchableOpacity, View } from "react-native"

export default function HomeLayout() {
    return <>
        <Drawer
            drawerContent={DrawerContent}
            screenOptions={{
                headerStatusBarHeight: 0,
                headerTitle: "",
                headerLeft: () => <DrawerToggleButton />,
                swipeEnabled: false,
                drawerHideStatusBarOnOpen: true
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
                    drawerIcon: ({ size, color }) => <Ionicons name="person" size={size} color={color} />,
                    headerTitle: "User",
                    headerLeft: BackButton
                }}
            />
            <Drawer.Screen
                name="bookmarks/index"
                options={{
                    title: "Bookmarks",
                    drawerIcon: ({ size, color }) => <Ionicons name="bookmark" size={size} color={color} />,
                    headerTitle: "Bookmarks",
                    headerLeft: BackButton
                }}
            />
        </Drawer>
        <StatusBar style="auto" />
    </>
}

function BackButton() {
    return <View style={{ paddingLeft: 15 }}>
        <TouchableOpacity
            onPress={() => router.back()}
        >
            <Ionicons name="chevron-back" size={32} color="black" />
        </TouchableOpacity>
    </View>
}

function DrawerContent(props: DrawerContentComponentProps) {
    return <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ flex: 1 }}
    >
        <View
            style={{
                flex: 1
            }}
        >
            <View
                style={{
                    paddingVertical: 20,
                    paddingHorizontal: 2,
                    marginBottom: 10,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "white",
                    shadowColor: 'black',
                    elevation: 3
                }}
            >
                <Ionicons name="person-circle" size={70} color="black" />
                <View>
                    <Text style={{ fontSize: 20 }}>Expo User</Text>
                    <Text>correo@email.com</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </View>
        <View
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 20
            }}
        >
            <TouchableOpacity
                activeOpacity={0.3}
                delayPressIn={0}
                style={{ backgroundColor: "royalblue", width: "90%", borderRadius: 100, justifyContent: "center", alignItems: "center", paddingVertical: 5, marginVertical: 10 }}
                onPress={() => BackHandler.exitApp()}
            >
                <Text style={{ color: "white" }}>Close</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 10 }}>v0.0.0</Text>
        </View>
    </DrawerContentScrollView>
}