import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function Intro() {
    const duration = 200
    const shared = useSharedValue<{ opacity?: number, scale: number, rotate: number }>({ opacity: 0, scale: 0, rotate: 0 })

    const animatedDefault = useAnimatedStyle(() => ({
        opacity: shared.value.opacity,
        transform: [
            { scale: shared.value.scale },
            { rotateZ: `${shared.value.rotate}deg` },
        ]
    }))

    useEffect(() => {
        shared.value = withSequence(
            withTiming({ opacity: 0, scale: .1, rotate: 0 }, { duration, easing: Easing.linear, }),
            withTiming({ opacity: .5, scale: .5, rotate: 360 }, { duration, easing: Easing.linear, }),
            withTiming({ opacity: 1, scale: 1, rotate: 720 }, { duration, easing: Easing.linear, }),
        )
    }, [])

    return <View style={styles.container}>
        <Animated.View style={[styles.animatedView, animatedDefault]}>
            <Text>Reanimated 3</Text>
        </Animated.View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    animatedView: {
        backgroundColor: "red",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})