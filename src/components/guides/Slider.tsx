import { StyleSheet, View, useWindowDimensions } from "react-native";
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
                clamp: [0, (SIZE) - (dimensions.value.width)],
            })
            dimensions.value.scale = withTiming(1, { duration })
        })

    const animatedSquare = useAnimatedStyle(() => ({
        transform: [
            { translateX: offset.value },
            { scale: dimensions.value.scale }
        ]
    }))
    const animatedTrack = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value }]
    }))

    return <View style={{ justifyContent: "space-between" }}>
        <GestureHandlerRootView style={[styles.square]}>
            <GestureDetector gesture={pan}>
                <Animated.View style={[styles.animatedView, animatedSquare]} />
            </GestureDetector>
        </GestureHandlerRootView>

        <View style={styles.graph}>
            <View style={styles.axis}>
                {Array(10).fill(null).map((_, i) => (
                    <View key={i} style={styles.point} />
                ))}
                <Animated.View style={[styles.track, animatedTrack]} />
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    square: {
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
    },
    graph: {
        width: "100%", height: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    axis: {
        backgroundColor: "gray",
        width: "100%", height: 3,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    point: {
        backgroundColor: "gray",
        width: 3, height: 20,
        borderRadius: 100
    },
    track: {
        position: "absolute",
        backgroundColor: "blue",
        width: 20, height: 20,
        borderRadius: 100
    }
})