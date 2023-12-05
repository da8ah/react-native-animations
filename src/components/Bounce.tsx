import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

export default function Bounce() {
    const duration = 1000
    const linear = useSharedValue({ x: -5, y: -5 })

    const animatedDefault = useAnimatedStyle(() => ({
        transform: [
            { translateX: linear.value.x },
            { translateY: linear.value.y }
        ]
    }))

    useEffect(() => {
        linear.value = withRepeat(
            withTiming(
                {
                    x: linear.value.x + 5,
                    y: linear.value.y + 5
                },
                {
                    duration,
                    easing: Easing.linear,
                }
            ), -1, true)
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