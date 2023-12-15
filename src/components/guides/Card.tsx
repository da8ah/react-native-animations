import { router } from "expo-router";
import { Text, View } from "react-native";

export default function Card(props: { id: number, name: string }) {
    return <View
        style={{ backgroundColor: "white", width: "100%", height: 100, marginVertical: 5, justifyContent: "center", alignItems: "center" }}
        onTouchStart={() => router.push({ pathname: "/(drawer)/(tabs)/(guides)/[id]", params: { id: props.id } })}
    >
        <Text>{props.name}</Text>
    </View>
}