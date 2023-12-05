import Bounce from "@/components/Bounce";
import Pulse from "@/components/Pulse";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Viewer() {
    const { viewer } = useLocalSearchParams<{ viewer: string }>()
    const components = {
        // ["1" as string]: "Slide",
        // ["2" as string]: "Typing",
        // ["3" as string]: "Split",
        // ["4" as string]: "Appear",
        // ["5" as string]: "Fade",
        // ["6" as string]: "Flip",
        // ["7" as string]: "Loading",
        // ["8" as string]: "Wave",
        ["9" as string]: <Bounce />,
        ["10" as string]: <Pulse />,
    };

    return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {components[viewer]}
        <Text>Viewer: {viewer}</Text>
    </View>
}