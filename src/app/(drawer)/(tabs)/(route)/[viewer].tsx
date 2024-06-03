import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { components } from ".";

export default function Viewer() {
    const { viewer } = useLocalSearchParams<{ viewer: string }>()
    return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {!!viewer && components[viewer]}
    </View>
}