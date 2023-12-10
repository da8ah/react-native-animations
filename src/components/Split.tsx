import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withTiming } from "react-native-reanimated";

export default function Split() {
    const duration = 1000
    const left = useSharedValue({ x: 0, bg: 'blue' })
    const right = useSharedValue({ x: 0, bg: 'blue' })

    const animatedLeft = useAnimatedStyle(() => ({
        transform: [{ translateX: left.value.x }],
        backgroundColor: left.value.bg
    }))
    const animatedRight = useAnimatedStyle(() => ({
        transform: [{ translateX: right.value.x }],
        backgroundColor: right.value.bg
    }))

    useEffect(() => {
        left.value = withSequence(
            withTiming({ x: left.value.x - 100, bg: "red" }, { duration }),
            withTiming({ x: left.value.x, bg: "blue" }, { duration }),
            withRepeat(withDelay(duration * 2,
                withSequence(
                    withTiming({ x: left.value.x - 100, bg: "red" }, { duration }),
                    withTiming({ x: left.value.x, bg: "blue" }, { duration }),
                )
            ), -1, true)
        )
        right.value = withSequence(
            withTiming({ x: right.value.x + 100, bg: "red" }, { duration }),
            withTiming({ x: right.value.x, bg: "blue" }, { duration }),
            withRepeat(withDelay(duration * 2,
                withSequence(
                    withTiming({ x: right.value.x + 100, bg: "red" }, { duration }),
                    withTiming({ x: right.value.x, bg: "blue" }, { duration }),
                )
            ), -1, true)
        )
    }, [])

    return <View style={styles.container}>
        <Animated.View style={[styles.animatedView, animatedLeft]} />
        <Animated.View style={[styles.animatedView, animatedRight]} />
    </View>
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
        position: "absolute",
        backgroundColor: "blue",
        width: "100%",
        height: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})