import { StyleSheet, Text, useWindowDimensions } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withDecay } from "react-native-reanimated";

export default function Slider() {
    const SIZE = useWindowDimensions().width / 2
    const width = useSharedValue(0)
    const offset = useSharedValue(0)

    const pan = Gesture.Pan()
        .onChange((event) => {
            offset.value += event.changeX;
        })
        .onFinalize((event) => {
            offset.value = withDecay({
                velocity: event.velocityX,
                rubberBandEffect: true,
                clamp: [-(width.value / 2) + SIZE / 2, width.value / 2 - SIZE / 2],
            })
        })

    const animatedDefault = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value }]
    }))

    const onLayout = (e: any) => {
        width.value = e.nativeEvent.layout.width
    }

    return <GestureHandlerRootView onLayout={onLayout} style={[styles.container]}>
        <GestureDetector gesture={pan}>
            <Animated.View style={[styles.animatedView, animatedDefault]}>
                <Text style={{ fontSize: 32 }}>👌</Text>
            </Animated.View>
        </GestureDetector>
    </GestureHandlerRootView>
}

const styles = StyleSheet.create({
    container: {
        width: 80, height: 80,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    animatedView: {
        backgroundColor: "red",
        width: "100%",
        height: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})