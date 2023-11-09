import { useLocalSearchParams, useNavigation } from "expo-router";
import { Text, View } from "react-native";

export default function Viewer() {
    const { viewer } = useLocalSearchParams<{ viewer: string }>()
    return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Viewer: {viewer}</Text>
    </View>
}