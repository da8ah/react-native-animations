import { View } from "react-native";

export default function Step(props: { children?: JSX.Element, coorX?: number, setCoor?: ({ x, y }: { x: number, y: number }) => void }) {
    return <View
        onLayout={(e) => {
            props.setCoor && props.setCoor({ x: e.nativeEvent.layout.x, y: e.nativeEvent.layout.y })
        }}
        style={{
            backgroundColor: "white", width: 80, height: 80,
            borderRadius: 10,
            marginBottom: 10,
            justifyContent: "center", alignItems: "center",
            left: props.coorX || 0
        }}
    >
        {props.children}
        {/* <Text>Step</Text> */}
    </View>
}