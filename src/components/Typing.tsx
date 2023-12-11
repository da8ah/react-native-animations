import { useEffect } from "react";
import { TextInput, View } from "react-native";
import Animated, { useAnimatedProps, useAnimatedStyle, useDerivedValue, useSharedValue, withDelay, withRepeat, withTiming } from "react-native-reanimated";

Animated.addWhitelistedNativeProps({ text: true })
const AnimatedText = Animated.createAnimatedComponent(TextInput)

export default function Typing() {
    const duration = 500
    const shared = useSharedValue({ y: -10, bg: "blue" })

    const text = useDerivedValue(() => (
        Math.round(Math.random() * 10).toString()
    ))

    const animatedProps = useAnimatedProps(() => ({
        value: text.value, defaultValue: text.value
    }))

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: shared.value.y }],
        backgroundColor: shared.value.bg
    }))

    useEffect(() => {
        shared.value = withRepeat(withDelay(duration * 2,
            withTiming({ y: shared.value.y + 10, bg: "red" }, { duration }),
        ), -1, true)
    }, [])

    return <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <AnimatedText
            animatedProps={animatedProps}
            editable={false}
            underlineColorAndroid="transparent"
            style={[{ fontSize: 32 }, animatedStyle]}
        />
        <AnimatedText
            animatedProps={animatedProps}
            editable={false}
            underlineColorAndroid="transparent"
            style={[{ fontSize: 32 }, animatedStyle]}
        />
        <AnimatedText
            animatedProps={animatedProps}
            editable={false}
            underlineColorAndroid="transparent"
            style={[{ fontSize: 32 }, animatedStyle]}
        />
    </View>
}