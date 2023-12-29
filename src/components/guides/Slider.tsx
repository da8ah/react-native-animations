import { StyleSheet, useWindowDimensions } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withDecay, withTiming } from "react-native-reanimated";

export default function Slider() {
    const SIZE = useWindowDimensions().width
    const offset = useSharedValue(0)

    const duration = 200
    const dimensions = useSharedValue({
        scale: 1,
        width: 80
    })

    const pan = Gesture.Pan()
        .onChange((event) => {
            offset.value += event.changeX
            dimensions.value.scale = withTiming(.5, { duration })
        })
        .onFinalize((event) => {
            offset.value = withDecay({
                velocity: event.velocityX,
                rubberBandEffect: true,
                clamp: [-(SIZE / 2) + (dimensions.value.width / 2), (SIZE / 2) - (dimensions.value.width / 2)],
            })
            dimensions.value.scale = withTiming(1, { duration })
        })

    const animatedDefault = useAnimatedStyle(() => ({
        transform: [
            { translateX: offset.value },
            { scale: dimensions.value.scale }
        ]
    }))

    return <GestureHandlerRootView style={[styles.container]}>
        <GestureDetector gesture={pan}>
            <Animated.View style={[styles.animatedView, animatedDefault]} />
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