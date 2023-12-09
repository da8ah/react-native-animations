import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

export default function Loading() {
    const duration = 1000
    const shared = useSharedValue("0deg")

    const animatedDefault = useAnimatedStyle(() => ({
        transform: [{ rotateZ: shared.value }]
    }))

    useEffect(() => {
        shared.value = withRepeat(withTiming("360deg", { duration: duration * 3, easing: Easing.linear }), -1, false)
    }, [])

    return <View style={[styles.container]}>
        <Animated.View
            style={[styles.animatedView, animatedDefault]}
        >
            <LinearGradient style={{ width: "100%", height: "100%", borderRadius: 100 }} colors={['deepskyblue', 'blue']} />
        </Animated.View>
        <Animated.View style={[styles.center]} />
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
        backgroundColor: "white",
        width: "50%",
        height: "50%",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    center: {
        position: "absolute",
        backgroundColor: "white",
        width: "20%",
        height: "20%",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    }
})