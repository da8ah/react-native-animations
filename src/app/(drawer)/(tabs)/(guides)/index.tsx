import { ScrollView, Text, View } from "react-native"

export default function GuidesScreen() {
    return <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: "3%", justifyContent: 'center' }}
    >
        <View style={{ backgroundColor: "white", width: "100%", height: 100, justifyContent: "center", alignItems: "center" }}>
            <Text>Hola</Text>
        </View>
    </ScrollView>
}