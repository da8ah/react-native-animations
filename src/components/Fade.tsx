import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withTiming } from "react-native-reanimated";

export default function Fade() {
    const duration = 200
    const shared = useSharedValue({ opacity: 0 })

    const animatedDefault = useAnimatedStyle(() => ({
        opacity: shared.value.opacity
    }))

    useEffect(() => {
        shared.value = withSequence(
            withTiming({ opacity: shared.value.opacity }, { duration, easing: Easing.linear, }),
            withTiming({ opacity: shared.value.opacity + 1 }, { duration: duration * 10, easing: Easing.linear, }),
            withRepeat(withDelay(duration * 5,
                withSequence(
                    withDelay(duration * 1.25, withTiming({ opacity: shared.value.opacity }, { duration, easing: Easing.linear, })),
                    withDelay(duration * 1.5, withTiming({ opacity: shared.value.opacity + 1 }, { duration: duration * 10, easing: Easing.linear, })),
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
        backgroundColor: "blue",
        width: "100%",
        height: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})