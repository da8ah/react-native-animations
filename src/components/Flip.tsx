import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

export default function Flip() {
    const duration = 1000
    const shared = useSharedValue("0deg")

    const animatedDefault = useAnimatedStyle(() => ({
        transform: [{ rotateY: shared.value }]
    }))

    useEffect(() => {
        shared.value = withRepeat(withTiming("180deg", { duration }), -1, true)
    }, [])

    return <View style={styles.container}>
        <Animated.View style={[styles.animatedView, animatedDefault]}>
            <Text style={{ fontSize: 32 }}>💲</Text>
        </Animated.View>
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
        backgroundColor: "#FFD700",
        width: "100%",
        height: "100%",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    }
})