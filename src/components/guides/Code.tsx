import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withTiming } from "react-native-reanimated";

type CodeProps = {
    opacity?: number,
    height?: number
}

export default function Code() {
    const duration = 200
    const shared = useSharedValue({ scale: 1.1, opacity: 0 })
    const animatedDefault = useAnimatedStyle(() => ({
        transform: [{ scale: shared.value.scale }],
        opacity: shared.value.opacity
    }))

    const [visible, setVisible] = useState(false)
    const init = useSharedValue<CodeProps>({ opacity: 0, height: 0 })
    const variables = useSharedValue<CodeProps>({ opacity: 0, height: 0 })
    const aniStyle = useSharedValue<CodeProps>({ opacity: 0, height: 0 })
    const effect = useSharedValue<CodeProps>({ opacity: 0, height: 0 })
    const animatedInit = useAnimatedStyle(() => ({
        opacity: init.value.opacity,
        height: init.value.height,
    }))
    const animatedVars = useAnimatedStyle(() => ({
        opacity: variables.value.opacity,
        height: variables.value.height,
    }))
    const animatedAniStyle = useAnimatedStyle(() => ({
        opacity: aniStyle.value.opacity,
        height: aniStyle.value.height,
    }))
    const animatedUseEffect = useAnimatedStyle(() => ({
        opacity: effect.value.opacity,
        height: effect.value.height,
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

        init.value = withSequence<CodeProps>(
            withTiming({ opacity: 0, height: 25 }, { duration }),
            withDelay(duration * 5, withTiming({ opacity: 100, height: 25 }, { duration })),
            withDelay(duration * 5, withTiming({ opacity: 100, height: 25 }, { duration },
                () => {
                    runOnJS(setVisible)(true)
                    variables.value = withDelay(duration * 5, withSequence<CodeProps>(
                        withTiming({ opacity: 0, height: 25 }, { duration }),
                        withDelay(duration * 5, withTiming({ opacity: 100, height: 25 }, { duration },
                            () => {
                                aniStyle.value = withDelay(duration * 5, withSequence<CodeProps>(
                                    withTiming({ opacity: 0, height: 100 }, { duration }),
                                    withDelay(duration * 5, withTiming({ opacity: 100, height: 100 }, { duration },
                                        () => {
                                            effect.value = withDelay(duration * 5, withSequence<CodeProps>(
                                                withTiming({ opacity: 0, height: 200 }, { duration }),
                                                withDelay(duration * 5, withTiming({ opacity: 100, height: 200 }, { duration })
                                                )
                                            ))
                                        }
                                    ))
                                ))
                            }
                        ))
                    ))
                }))
        )
    }, [])

    return <View style={styles.container}>
        <Animated.View style={[styles.animatedView, animatedDefault]} />
        <View style={styles.code}>
            <ScrollView horizontal>
                <ScrollView>
                    <Text style={{ flexDirection: "row" }}>
                        <Text style={styles.textAquaI}>export default </Text><Text style={styles.textPurple}>function </Text><Text style={styles.textBlue}>Code </Text><Text style={styles.textYellow}>( ) </Text>
                    </Text>
                    <View style={{ height: 20 }} />
                    <Animated.Text style={[{ flexDirection: "row" }, animatedVars]}>
                        <Text style={styles.textPurple}>const </Text><Text style={styles.textRed}>duration </Text><Text style={styles.textPurple}>= </Text><Text style={styles.textOrange}>200 </Text>
                    </Animated.Text>
                    <Animated.Text style={[{ flexDirection: "row" }, animatedVars]}>
                        <Text style={styles.textPurple}>const </Text><Text style={styles.textRed}>shared </Text><Text style={styles.textPurple}>= </Text><Text style={styles.textBlue}>useSharedValue</Text>
                        <Text style={styles.textYellow}>{"("}</Text><Text style={styles.textPurple}>{"{ "}</Text>
                        <Text style={styles.textGray}>scale</Text><Text style={styles.textAqua}>: </Text><Text style={styles.textOrange}>1.1</Text><Text style={styles.textAqua}>, </Text>
                        <Text style={styles.textGray}>opacity</Text><Text style={styles.textAqua}>: </Text><Text style={styles.textOrange}>0</Text>
                        <Text style={styles.textPurple}>{" }"}</Text><Text style={styles.textYellow}>{")"}</Text>
                    </Animated.Text>
                    <View style={{ height: 20 }} />
                    <Animated.View style={animatedAniStyle}>
                        <Text style={{ flexDirection: "row" }}>
                            <Text style={styles.textPurple}>const </Text><Text style={styles.textRed}>animatedDefault </Text><Text style={styles.textPurple}>= </Text><Text style={styles.textBlue}>useAnimatedStyle</Text>
                            <Text style={styles.textYellow}>{"("}</Text>
                            <Text style={styles.textPurple}>{"( ) => ({"}</Text>
                        </Text>
                        <View style={{ flexDirection: "column", paddingLeft: 20 }}>
                            <Text style={{ flexDirection: "row" }}>
                                <Text style={styles.textGray}>transform</Text><Text style={styles.textAqua}>: </Text>
                                <Text style={styles.textYellow}>{"["}</Text><Text style={styles.textBlue}>{"{ "}</Text>
                                <Text style={styles.textGray}>scale</Text><Text style={styles.textAqua}>: </Text><Text style={styles.textGray}>shared.value.scale</Text>
                                <Text style={styles.textBlue}>{" }"}</Text><Text style={styles.textYellow}>{"]"}</Text><Text style={styles.textAqua}>, </Text>
                            </Text>
                            <Text style={{ flexDirection: "row" }}>
                                <Text style={styles.textGray}>opacity</Text><Text style={styles.textAqua}>: </Text><Text style={styles.textGray}>shared.value.opacity</Text>
                            </Text>
                        </View>
                        <Text style={{ flexDirection: "row" }}>
                            <Text style={styles.textPurple}>{"})"}</Text><Text style={styles.textYellow}>{")"}</Text>
                        </Text>
                    </Animated.View>
                    <Animated.View style={animatedUseEffect}>
                        <Text style={{ flexDirection: "row" }}>
                            <Text style={styles.textBlue}>useEffect</Text>
                            <Text style={styles.textYellow}>{"("}</Text>
                            <Text style={styles.textPurple}>{"( ) => {"}</Text>
                        </Text>
                        <View style={{ flexDirection: "column", paddingLeft: 20 }}>
                            <Text style={{ flexDirection: "row" }}>
                                <Text style={styles.textGray}>shared.value</Text><Text style={styles.textPurple}> = </Text>
                                <Text style={styles.textBlue}>withSequence</Text><Text style={styles.textPurple}>{"("}</Text>
                            </Text>
                            <View style={{ flexDirection: "column", paddingLeft: 20 }}>
                                <Text style={{ flexDirection: "row" }}>
                                    <Text style={styles.textBlue}>{"withDelay("}</Text><Text style={styles.textGray}>duration </Text><Text style={styles.textPurple}>* </Text><Text style={styles.textOrange}>2.5</Text><Text style={styles.textAqua}>, </Text>
                                    <Text style={styles.textBlue}>withTiming</Text><Text style={styles.textYellow}>{"("}</Text><Text style={styles.textBlue}>{"{ "}</Text>
                                    <Text style={styles.textGray}>scale </Text><Text style={styles.textAqua}>: </Text><Text style={styles.textGray}>shared.value.scale </Text><Text style={styles.textPurple}>- </Text><Text style={styles.textOrange}>.1</Text><Text style={styles.textAqua}>, </Text>
                                    <Text style={styles.textGray}>opacity </Text><Text style={styles.textAqua}>: </Text><Text style={styles.textGray}>shared.value.opacity </Text><Text style={styles.textPurple}>+ </Text><Text style={styles.textOrange}>1 </Text>
                                    <Text style={styles.textBlue}>{"}"}</Text><Text style={styles.textAqua}>, </Text><Text style={styles.textBlue}>{"{ "}</Text>
                                    <Text style={styles.textGray}>duration</Text><Text style={styles.textAqua}>, </Text><Text style={styles.textGray}>easing</Text><Text style={styles.textAqua}>: </Text><Text style={styles.textGray}>Easing.linear </Text>
                                    <Text style={styles.textBlue}>{"}"}</Text><Text style={styles.textYellow}>{")"}</Text><Text style={styles.textBlue}>{")"}</Text><Text style={styles.textAqua}>,</Text>
                                </Text>
                                <Text style={{ flexDirection: "row" }}>
                                    <Text style={styles.textBlue}>{"withDelay("}</Text><Text style={styles.textGray}>duration </Text><Text style={styles.textPurple}>* </Text><Text style={styles.textOrange}>5</Text><Text style={styles.textAqua}>, </Text>
                                    <Text style={styles.textBlue}>withTiming</Text><Text style={styles.textYellow}>{"("}</Text><Text style={styles.textBlue}>{"{ "}</Text>
                                    <Text style={styles.textGray}>scale </Text><Text style={styles.textAqua}>: </Text><Text style={styles.textGray}>shared.value.scale</Text><Text style={styles.textAqua}>, </Text>
                                    <Text style={styles.textGray}>opacity </Text><Text style={styles.textAqua}>: </Text><Text style={styles.textGray}>shared.value.opacity </Text>
                                    <Text style={styles.textBlue}>{"}"}</Text><Text style={styles.textAqua}>, </Text><Text style={styles.textBlue}>{"{ "}</Text>
                                    <Text style={styles.textGray}>duration</Text><Text style={styles.textAqua}>, </Text><Text style={styles.textGray}>easing</Text><Text style={styles.textAqua}>: </Text><Text style={styles.textGray}>Easing.linear </Text>
                                    <Text style={styles.textBlue}>{"}"}</Text><Text style={styles.textYellow}>{")"}</Text><Text style={styles.textBlue}>{")"}</Text><Text style={styles.textAqua}>,</Text>
                                </Text>
                                <Text style={{ flexDirection: "row" }}>
                                    <Text style={styles.textBlue}>{"withRepeat(withDelay"}</Text><Text style={styles.textYellow}>{"("}</Text><Text style={styles.textGray}>duration </Text><Text style={styles.textPurple}>* </Text><Text style={styles.textOrange}>5</Text><Text style={styles.textAqua}>, </Text>
                                </Text>
                                <View style={{ flexDirection: "column", paddingLeft: 20 }}>
                                    <Text style={{ flexDirection: "row" }}>
                                        <Text style={styles.textBlue}>{"withSequence"}</Text><Text style={styles.textPurple}>{"("}</Text>
                                    </Text>
                                    <View style={{ flexDirection: "column", paddingLeft: 20 }}>
                                        <Text style={{ flexDirection: "row" }}>
                                            <Text style={styles.textBlue}>{"withDelay("}</Text><Text style={styles.textGray}>duration </Text><Text style={styles.textPurple}>* </Text><Text style={styles.textOrange}>2.5</Text><Text style={styles.textAqua}>, </Text>
                                            <Text style={styles.textBlue}>withTiming</Text><Text style={styles.textYellow}>{"("}</Text><Text style={styles.textBlue}>{"{ "}</Text>
                                            <Text style={styles.textGray}>scale </Text><Text style={styles.textAqua}>: </Text><Text style={styles.textGray}>shared.value.scale </Text><Text style={styles.textPurple}>- </Text><Text style={styles.textOrange}>.1</Text><Text style={styles.textAqua}>, </Text>
                                            <Text style={styles.textGray}>opacity </Text><Text style={styles.textAqua}>: </Text><Text style={styles.textGray}>shared.value.opacity </Text><Text style={styles.textPurple}>+ </Text><Text style={styles.textOrange}>1 </Text>
                                            <Text style={styles.textBlue}>{"}"}</Text><Text style={styles.textAqua}>, </Text><Text style={styles.textBlue}>{"{ "}</Text>
                                            <Text style={styles.textGray}>duration</Text><Text style={styles.textAqua}>, </Text><Text style={styles.textGray}>easing</Text><Text style={styles.textAqua}>: </Text><Text style={styles.textGray}>Easing.linear </Text>
                                            <Text style={styles.textBlue}>{"}"}</Text><Text style={styles.textYellow}>{")"}</Text><Text style={styles.textBlue}>{")"}</Text><Text style={styles.textAqua}>,</Text>
                                        </Text>
                                        <Text style={{ flexDirection: "row" }}>
                                            <Text style={styles.textBlue}>{"withDelay("}</Text><Text style={styles.textGray}>duration </Text><Text style={styles.textPurple}>* </Text><Text style={styles.textOrange}>5</Text><Text style={styles.textAqua}>, </Text>
                                            <Text style={styles.textBlue}>withTiming</Text><Text style={styles.textYellow}>{"("}</Text><Text style={styles.textBlue}>{"{ "}</Text>
                                            <Text style={styles.textGray}>scale </Text><Text style={styles.textAqua}>: </Text><Text style={styles.textGray}>shared.value.scale</Text><Text style={styles.textAqua}>, </Text>
                                            <Text style={styles.textGray}>opacity </Text><Text style={styles.textAqua}>: </Text><Text style={styles.textGray}>shared.value.opacity </Text>
                                            <Text style={styles.textBlue}>{"}"}</Text><Text style={styles.textAqua}>, </Text><Text style={styles.textBlue}>{"{ "}</Text>
                                            <Text style={styles.textGray}>duration</Text><Text style={styles.textAqua}>, </Text><Text style={styles.textGray}>easing</Text><Text style={styles.textAqua}>: </Text><Text style={styles.textGray}>Easing.linear </Text>
                                            <Text style={styles.textBlue}>{"}"}</Text><Text style={styles.textYellow}>{")"}</Text><Text style={styles.textBlue}>{")"}</Text><Text style={styles.textAqua}>,</Text>
                                        </Text>
                                    </View>
                                    <Text style={{ flexDirection: "row" }}>
                                        <Text style={styles.textPurple}>{")"}</Text><Text style={styles.textYellow}>{")"}</Text><Text style={styles.textAqua}>, </Text>
                                        <Text style={styles.textPurple}>-</Text><Text style={styles.textOrange}>1</Text><Text style={styles.textAqua}>, </Text>
                                        <Text style={styles.textOrange}>true</Text><Text style={styles.textBlue}>{")"}</Text>
                                    </Text>
                                </View>
                            </View>
                            <Text style={styles.textPurple}>{")"}</Text>
                        </View>
                        <Text style={{ flexDirection: "row" }}>
                            <Text style={styles.textPurple}>{"}"}</Text><Text style={styles.textAqua}>, </Text><Text style={styles.textYellow}>{"[ ])"}</Text>
                        </Text>
                    </Animated.View>
                    <View style={{ height: 20 }} />
                    <Animated.Text style={[{ flexDirection: "row" }, animatedInit]}>
                        <Text style={styles.textAquaI}>return </Text>
                        <Text style={styles.textAqua}>{"<"}</Text>
                        {!visible ?
                            <Text style={styles.textYellow}>{"View "}</Text>
                            :
                            <Text style={styles.textYellow}>{"Animated.View "}</Text>
                        }
                    </Animated.Text>
                    <View style={{ flexDirection: "column", paddingLeft: 20 }}>
                        <Text style={{ flexDirection: "row" }}>
                            <Text style={styles.textPurple}>{"style={"}</Text>
                            <Text style={styles.textYellow}>{"["}</Text>
                        </Text>
                        <Text style={{ flexDirection: "row" }}>
                            <Text style={styles.textBlue}>{"{"}</Text>
                            <Text style={styles.textGray}>backgroundColor</Text><Text style={styles.textAqua}>: </Text><Text style={styles.textYellow}>blue</Text><Text style={styles.textAqua}>, </Text>
                            <Text style={styles.textGray}>width</Text><Text style={styles.textAqua}>: </Text><Text style={styles.textYellow}>100</Text><Text style={styles.textAqua}>, </Text>
                            <Text style={styles.textGray}>height</Text><Text style={styles.textAqua}>: </Text><Text style={styles.textYellow}>100</Text>
                            <Text style={styles.textBlue}>{"}"}</Text><Text style={styles.textAqua}>,</Text>
                        </Text>
                        {visible && <Text style={{ flexDirection: "row" }}>
                            <Text style={styles.textGray}>animatedDefault</Text>
                        </Text>}
                        <Text style={{ flexDirection: "row" }}>
                            <Text style={styles.textYellow}>{"]"}</Text>
                            <Text style={styles.textPurple}>{"}"}</Text>
                        </Text>
                    </View>
                    <Animated.Text style={[styles.textAqua, animatedInit]}>{"/>"}</Animated.Text>
                </ScrollView>
            </ScrollView>
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
        minHeight: "50%",
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