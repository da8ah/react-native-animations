import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function Intro() {

    const { height, width } = useWindowDimensions()
    const duration = 200
    const dimentions = useSharedValue({
        opacity: 0,
        width: 0,
        height: 0,
    })
    const location = useSharedValue({
        translateX: width / 4,
        translateY: height / 2,
        rotate: 0,
    })

    const animatedDefault = useAnimatedStyle(() => ({
        opacity: dimentions.value.opacity,
        width: dimentions.value.width,
        height: dimentions.value.height,
        transform: [
            { translateX: location.value.translateX },
            { translateY: location.value.translateY },
            { rotateZ: `${location.value.rotate}deg` },
        ]
    }))



    const launchAnimation = () => {
        console.log(height, width / 4)

        dimentions.value = withSequence(
            withTiming({ opacity: 0, width: 0, height: 0, }, { duration }),
            withTiming({ opacity: 1, width: 10, height: 10, }, { duration }),
             withTiming({ opacity: 1, width: 20, height: 20, }, { duration })
        )
        location.value = withSequence(
            withTiming({ translateX: width / 4, translateY: height / 2, rotate: 0 }, { duration }),
            withTiming({ translateX: (width / 4) + 10, translateY: (height / 2) + 10, rotate: 0 }, { duration })
        )

        Array(10).fill(null).forEach((_, index) => {
            console.log(index)


            location.value =
                // withSequence(
                withTiming({ translateX: index, translateY: index, rotate: 0 }, { duration })
            // withTiming({ opacity: 1, width: 20, height: 20, translateX: -10, translateY: -30, rotate: 0 }, { duration }),
            // withTiming({ opacity: 0, scale: .1, rotate: 0 }, { duration, easing: Easing.linear, }),
            // withTiming({ opacity: .5, scale: .5, rotate: 360 }, { duration, easing: Easing.linear, }),
            // withTiming({ opacity: 1, scale: 1, rotate: 720 }, { duration, easing: Easing.linear, }),
            // )
        })
    }

    return <TouchableOpacity style={styles.container} onPress={launchAnimation}>
        <Animated.View style={[styles.animatedView, animatedDefault]}>
            <Text>Reanimated 3</Text>
        </Animated.View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    animatedView: {
        backgroundColor: "red",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    }
})