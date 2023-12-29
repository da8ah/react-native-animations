import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withTiming } from "react-native-reanimated";

export default function Intro() {
    const duration = 200
    const shared = useSharedValue({ scale: 1.1, opacity: 0 })

    const animatedDefault = useAnimatedStyle(() => ({
        transform: [{ scale: shared.value.scale }],
        opacity: shared.value.opacity
    }))

    useEffect(() => {
        shared.value = withSequence(
            withDelay(duration * 2.5, withTiming({ scale: shared.value.scale - .1, opacity: shared.value.opacity + 1 }, { duration, easing: Easing.linear, })),
            withDelay(duration * 5, withTiming({ scale: shared.value.scale, opacity: shared.value.opacity }, { duration, easing: Easing.linear, })),
            withRepeat(withDelay(duration * 5,
                withSequence(
                    withDelay(duration * 2.5, withTiming({ scale: shared.value.scale - .1, opacity: shared.value.opacity + 1 }, { duration, easing: Easing.linear, })),
                    withDelay(duration * 5, withTiming({ scale: shared.value.scale, opacity: shared.value.opacity }, { duration, easing: Easing.linear, }))
                )), -1, true)
        )
    }, [])

    return <View style={styles.container}>
        <Animated.View style={[styles.animatedView, animatedDefault]} />
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
        backgroundColor: "red",
        width: "100%",
        height: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})