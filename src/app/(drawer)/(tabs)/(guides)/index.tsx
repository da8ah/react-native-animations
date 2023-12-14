import Code from "@/components/guides/Code";
import { router } from "expo-router"
import { ScrollView, Text, View } from "react-native"

// Fetch
export const components = {
    ["1" as string]: <Code />,
    ["2" as string]: <View><Text>2</Text></View>,
    ["3" as string]: <View><Text>3</Text></View>,
};

export default function GuidesScreen() {
    return <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: "3%", justifyContent: 'center' }}
    >
        <View
            style={{ backgroundColor: "white", width: "100%", height: 100, justifyContent: "center", alignItems: "center" }}
            onTouchStart={() => router.push({ pathname: "/(drawer)/(tabs)/(guides)/[id]", params: { id: 1 } })}
        >
            <Text>Hola</Text>
        </View>
    </ScrollView>
}