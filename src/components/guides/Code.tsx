import { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withTiming } from "react-native-reanimated";

export default function Code() {
    const duration = 200
    const shared = useSharedValue({ scale: 1.1, opacity: 0 })
    const code = useSharedValue<{ display: "none" | "flex" }>({ display: "none" })
    const [hidden, setHidden] = useState(false)

    const animatedDefault = useAnimatedStyle(() => ({
        transform: [{ scale: shared.value.scale }],
        opacity: shared.value.opacity
    }))
    const animatedCode = useAnimatedStyle(() => ({
        display: code.value.display
    }))

    useEffect(() => {
        shared.value = withSequence(
            withDelay(duration * 2.5, withTiming({ scale: shared.value.scale - .1, opacity: shared.value.opacity + 1 }, { duration, easing: Easing.linear, })),
            withDelay(duration * 5, withTiming({ scale: shared.value.scale, opacity: shared.value.opacity }, { duration, easing: Easing.linear, })),
            withRepeat(withDelay(duration * 5,
                withSequence(
                    withDelay(duration * 2.5, withTiming({ scale: shared.value.scale - .1, opacity: shared.value.opacity + 1 }, { duration, easing: Easing.linear, })),
                    withDelay(duration * 5, withTiming({ scale: shared.value.scale, opacity: shared.value.opacity }, { duration, easing: Easing.linear, }))
                )), -1, true)
        )

        code.value = withRepeat(withDelay(duration * 5,
            withSequence<{ display: "flex" | "none" }>(
                withTiming({ display: "flex" }, { duration, easing: Easing.linear }, () => { runOnJS(setHidden)(true) }),
                withDelay(duration * 5, withTiming({ display: "none" }, { duration, easing: Easing.linear }, () => { runOnJS(setHidden)(false) })),
            )), -1, true)
    }, [])

    return <View style={styles.container}>
        <Animated.View style={[styles.animatedView, animatedDefault]} />
        <View style={styles.code}>
            <ScrollView>
                <Text style={{ flexDirection: "row" }}>
                    <Text style={styles.textAquaI}>export default </Text><Text style={styles.textPurple}>function </Text><Text style={styles.textBlue}>Code </Text><Text style={styles.textYellow}>( ) </Text>
                </Text>
                <View style={{ height: 20 }} />
                {/* <Text style={{ flexDirection: "row" }}>
                    <Text style={styles.textPurple}>const </Text><Text style={styles.textRed}>duration </Text><Text style={styles.textPurple}>= </Text><Text style={styles.textOrange}>200 </Text>
                </Text> */}
                <Animated.Text style={[{ display: !hidden ? "flex" : "none", flexDirection: "row" }]}>
                    <Text style={styles.textAquaI}>return </Text><Text style={styles.textAqua}>{"<"}</Text><Text style={styles.textYellow}>{"View "}</Text>
                </Animated.Text>
                <Animated.Text style={[{ flexDirection: "row" }, !hidden && animatedCode]}>
                    <Text style={styles.textAquaI}>return </Text><Text style={styles.textAqua}>{"<"}</Text><Text style={styles.textYellow}>{"Animated.View "}</Text>
                </Animated.Text>
                <View style={{ flexDirection: "column", paddingLeft: 20 }}>
                    <Text style={{ flexDirection: "row" }}>
                        <Text style={styles.textPurple}>{"style={"}</Text><Text style={styles.textBlue}>{"{"}</Text>
                    </Text>
                    <Text style={{ flexDirection: "row" }}>
                        <Text style={styles.textGray}>backgroundColor</Text><Text style={styles.textAqua}> : </Text><Text style={styles.textYellow}>blue</Text><Text style={styles.textAqua}>, </Text>
                    </Text>
                    <Text style={{ flexDirection: "row" }}>
                        <Text style={styles.textGray}>width</Text><Text style={styles.textAqua}> : </Text><Text style={styles.textYellow}>100</Text><Text style={styles.textAqua}>, </Text>
                    </Text>
                    <Text style={{ flexDirection: "row" }}>
                        <Text style={styles.textGray}>height</Text><Text style={styles.textAqua}> : </Text><Text style={styles.textYellow}>100</Text>
                    </Text>
                    <Text style={{ flexDirection: "row" }}>
                        <Text style={styles.textBlue}>{"}"}</Text><Text style={styles.textPurple}>{"}"}</Text>
                    </Text>
                </View>
                <Text style={styles.textAqua}>{"/>"}</Text>
            </ScrollView>
        </View>
        <View style={{ flexDirection: "row", width: "100%", padding: 5, justifyContent: "space-evenly", alignItems: "center" }}>
            <Button title="back" />
            <Button title="next" />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    code: {
        backgroundColor: "#424242",
        width: "90%",
        height: "50%",
        padding: 5,
        borderRadius: 10
    },
    animatedView: {
        backgroundColor: "blue",
        width: 10, height: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    textAquaI: { color: "aqua", fontStyle: "italic" },
    textAqua: { color: "aqua" },
    textPurple: { color: "slateblue" },
    textBlue: { color: "royalblue" },
    textYellow: { color: "yellow" },
    textRed: { color: "crimson" },
    textOrange: { color: "coral" },
    textGray: { color: "darkgray" },
})