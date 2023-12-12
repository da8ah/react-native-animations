import { useEffect } from "react";
import { TextInput, View } from "react-native";
import Animated, { useAnimatedProps, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

Animated.addWhitelistedNativeProps({ text: true })
const AnimatedText = Animated.createAnimatedComponent(TextInput)

export default function Typing() {
    const duration = 500
    const shared1 = useSharedValue(-10)
    const shared2 = useSharedValue(-10)
    const shared3 = useSharedValue(-10)

    const animatedProps = useAnimatedProps(() => ({ value: "." }))
    const animatedStyle1 = useAnimatedStyle(() => ({
        transform: [{ translateY: shared1.value }]
    }))
    const animatedStyle2 = useAnimatedStyle(() => ({
        transform: [{ translateY: shared2.value }]
    }))
    const animatedStyle3 = useAnimatedStyle(() => ({
        transform: [{ translateY: shared3.value }]
    }))

    useEffect(() => {
        const interval = setInterval(() => {
            shared1.value = withSequence(
                withTiming(shared1.value + 10, { duration: duration * .1 }),
                withTiming(shared1.value, { duration: duration * .1 }),
            )
            shared2.value = withSequence(
                withTiming(shared2.value + 10, { duration: duration * .2 }),
                withTiming(shared2.value, { duration: duration * .2 }),
            )
            shared3.value = withSequence(
                withTiming(shared3.value + 10, { duration: duration * .3 }),
                withTiming(shared3.value, { duration: duration * .3 }),
            )
        }, duration * 2)

        return () => clearInterval(interval)
    }, [])

    return <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <AnimatedText
            animatedProps={animatedProps}
            editable={false}
            underlineColorAndroid="transparent"
            style={[{ color: "black", width: 15, height: 15, justifyContent: "center", alignItems: "center", fontSize: 32, textAlign: "center" }, animatedStyle1]}
        />
        <AnimatedText
            animatedProps={animatedProps}
            editable={false}
            underlineColorAndroid="transparent"
            style={[{ color: "black", width: 15, height: 15, justifyContent: "center", alignItems: "center", fontSize: 32, textAlign: "center" }, animatedStyle2]}
        />
        <AnimatedText
            animatedProps={animatedProps}
            editable={false}
            underlineColorAndroid="transparent"
            style={[{ color: "black", width: 15, height: 15, justifyContent: "center", alignItems: "center", fontSize: 32, textAlign: "center" }, animatedStyle3]}
        />
    </View>
}