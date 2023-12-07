import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

export default function Bounce() {
    const duration = 500
    const shared = useSharedValue(0)

    const animatedDefault = useAnimatedStyle(() => ({
        transform: [{ translateY: shared.value }]
    }))

    useEffect(() => {
        shared.value = withRepeat(withTiming(shared.value - 50, { duration }), -1, true)
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