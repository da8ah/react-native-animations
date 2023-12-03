import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

export default function Pulse() {
    const duration = 500
    const linear = useSharedValue(1)

    const animatedDefault = useAnimatedStyle(() => ({
        transform: [{ scale: linear.value }]
    }))

    useEffect(() => {
        linear.value = withRepeat(
            withTiming(linear.value - .1, {
                duration,
                easing: Easing.linear,
            }), -1, true)
    }, [])

    return <View style={styles.container}>
        <Animated.View
            style={[styles.animatedView, animatedDefault]}
        />
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