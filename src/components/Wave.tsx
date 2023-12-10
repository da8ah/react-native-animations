import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from "react-native-reanimated";

export default function Wave() {
    const duration = 200
    const shared = useSharedValue({ x: -50, y: 0 })

    const animatedDefault = useAnimatedStyle(() => ({
        transform: [
            { translateX: shared.value.x },
            { translateY: shared.value.y },
        ]
    }))

    useEffect(() => {
        shared.value =
            withRepeat(
                withSequence(
                    withTiming({ x: shared.value.x + 10, y: shared.value.y + 10 }, { duration, easing: Easing.linear }),
                    withTiming({ x: shared.value.x + 20, y: shared.value.y - 20 }, { duration, easing: Easing.linear }),
                    withTiming({ x: shared.value.x + 30, y: shared.value.y + 10 }, { duration, easing: Easing.linear }),
                    withTiming({ x: shared.value.x + 40, y: shared.value.y + 20 }, { duration, easing: Easing.linear }),

                    withTiming({ x: shared.value.x + 50, y: shared.value.y + 10 }, { duration, easing: Easing.linear }),
                    withTiming({ x: shared.value.x + 60, y: shared.value.y - 20 }, { duration, easing: Easing.linear }),
                    withTiming({ x: shared.value.x + 70, y: shared.value.y + 10 }, { duration, easing: Easing.linear }),
                    withTiming({ x: shared.value.x + 80, y: shared.value.y + 20 }, { duration, easing: Easing.linear }),

                    withTiming({ x: shared.value.x + 90, y: shared.value.y + 10 }, { duration, easing: Easing.linear }),
                    withTiming({ x: shared.value.x + 100, y: shared.value.y - 20 }, { duration, easing: Easing.linear }),
                    withTiming({ x: shared.value.x + 110, y: shared.value.y + 10 }, { duration, easing: Easing.linear }),
                    withTiming({ x: shared.value.x + 120, y: shared.value.y + 20 }, { duration, easing: Easing.linear }),

                    withTiming({ x: shared.value.x + 110, y: shared.value.y + 10 }, { duration, easing: Easing.linear }),
                    withTiming({ x: shared.value.x + 100, y: shared.value.y - 20 }, { duration, easing: Easing.linear }),
                    withTiming({ x: shared.value.x + 90, y: shared.value.y + 10 }, { duration, easing: Easing.linear }),
                    withTiming({ x: shared.value.x + 80, y: shared.value.y + 20 }, { duration, easing: Easing.linear }),

                    withTiming({ x: shared.value.x + 70, y: shared.value.y + 10 }, { duration, easing: Easing.linear }),
                    withTiming({ x: shared.value.x + 60, y: shared.value.y - 20 }, { duration, easing: Easing.linear }),
                    withTiming({ x: shared.value.x + 50, y: shared.value.y + 10 }, { duration, easing: Easing.linear }),
                    withTiming({ x: shared.value.x + 40, y: shared.value.y + 20 }, { duration, easing: Easing.linear }),

                    withTiming({ x: shared.value.x + 30, y: shared.value.y + 10 }, { duration, easing: Easing.linear }),
                    withTiming({ x: shared.value.x + 20, y: shared.value.y - 20 }, { duration, easing: Easing.linear }),
                    withTiming({ x: shared.value.x + 10, y: shared.value.y + 10 }, { duration, easing: Easing.linear }),
                    withTiming({ x: shared.value.x, y: shared.value.y + 20 }, { duration, easing: Easing.linear }),
                )
                , -1, true)
    }, [])

    return <View style={styles.container}>
        <Animated.View style={[styles.animatedView, animatedDefault]}>
            <LinearGradient style={{ width: "100%", height: "100%", borderRadius: 100 }} colors={['aqua', 'deepskyblue', 'blue', 'blue']} />
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
        backgroundColor: "blue",
        width: "30%",
        height: "30%",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    }
})