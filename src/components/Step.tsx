import { useEffect, useRef } from "react";
import { Text, View } from "react-native";

export default function Step(props: { children?: JSX.Element, setCoor?: ({ x, y }: { x: number, y: number }) => void }) {
    return <View
        onLayout={(e) => { props.setCoor && props.setCoor({ x: e.nativeEvent.layout.x, y: e.nativeEvent.layout.y }) }}
        style={{
            backgroundColor: "white", width: 80, height: 80,
            borderRadius: 10,
            justifyContent: "center", alignItems: "center"
        }}
    >
        {/* props.children */}
        <Text>Step</Text>
    </View>
}