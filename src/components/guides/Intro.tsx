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
    top: height / 2,
    left: width / 4,
    rotate: 0,
  })

  const animatedCircle = useAnimatedStyle(() => ({
    opacity: dimentions.value.opacity,
    width: dimentions.value.width,
    height: dimentions.value.height,
    top: location.value.top,
    left: location.value.left,
    transform: [{ rotate: `${location.value.rotate}deg` }]
  }))

  const text = useSharedValue({
    opacity: 0,
    scale: 1,
    top: height / 2,
    left: width / 4,
    rotate: 0,
  })
  const animatedText = useAnimatedStyle(() => ({
    opacity: text.value.opacity,
    top: text.value.top,
    left: text.value.left,
    transform: [
      { scale: text.value.scale, },
      { rotate: `${text.value.rotate}deg`, },
    ]
  }))

  const span1 = useSharedValue({
    top: height / 2 - height / 4,
    left: width + width / 4,
    opacity: 0,
  })
  const animatedSpan1 = useAnimatedStyle(() => ({
    top: span1.value.top,
    left: span1.value.left,
    opacity: span1.value.opacity,
  }))

  const span2 = useSharedValue({
    top: height / 2 + height / 4,
    left: -width / 4,
    opacity: 0,
  })
  const animatedSpan2 = useAnimatedStyle(() => ({
    top: span2.value.top,
    left: span2.value.left,
    opacity: span2.value.opacity,
  }))



  const launchAnimation = () => {

    dimentions.value =
      withSequence(
        withTiming(
          { opacity: 0, width: 0, height: 0, },
          { duration, easing: Easing.inOut(Easing.quad) }
        ),
        withTiming(
          { opacity: 1, width: 20, height: 20 },
          { duration, easing: Easing.inOut(Easing.quad) }
        ),
        withSequence(
          withTiming(
            { opacity: 0, width: 0, height: 0, },
            { duration, easing: Easing.inOut(Easing.quad) }
          ),
          withTiming(
            { opacity: 1, width: 20, height: 20 },
            { duration, easing: Easing.inOut(Easing.quad) }
          ),
          withTiming(
            { opacity: .5, width: 70, height: 20 },
            { duration, easing: Easing.inOut(Easing.quad) }
          ),
          withTiming(
            { opacity: .2, width: 70, height: 20 },
            { duration, easing: Easing.inOut(Easing.quad) }
          ),
          withTiming(
            { opacity: 0, width: 1, height: 1 },
            { duration, easing: Easing.inOut(Easing.quad) }
          ),
        ),
      )

    const step = 10
    location.value =
      withSequence(
        withTiming(
          { left: width / 4, top: height / 3 + step, rotate: 0 },
          { duration, easing: Easing.inOut(Easing.quad) }
        ),
        withTiming(
          { left: width / 4 + step, top: height / 3 - (step ** 2), rotate: 0 },
          { duration, easing: Easing.inOut(Easing.quad) }
        ),
        withTiming(
          { left: width / 4 + step, top: height / 3, rotate: 0 },
          { duration, easing: Easing.inOut(Easing.quad) }
        ),
        withSequence(
          withTiming(
            { left: width / 4, top: height / 3 + (step * 1.2), rotate: 0 },
            { duration, easing: Easing.inOut(Easing.quad) }
          ),
          withTiming(
            { left: width / 4 + (step * 5), top: height / 3 - ((step * 1.2) ** 2), rotate: 45 },
            { duration, easing: Easing.inOut(Easing.quad) }
          ),
          withTiming(
            { left: width / 4 + (step * 5), top: height / 3 - ((step * 1.2) ** 2), rotate: 140 },
            { duration: duration * 2, easing: Easing.inOut(Easing.quad) }
          ),
          withTiming(
            { left: width / 4 + (step * 5), top: height / 3, rotate: 140 },
            { duration: duration * 3, easing: Easing.inOut(Easing.quad) }
          ),
        ),
      )

    text.value =
      withSequence(
        withTiming(
          { opacity: 0, scale: 1, left: width / 4, top: height / 3 + step, rotate: 0 },
          { duration, easing: Easing.inOut(Easing.quad) }
        ),
        withTiming(
          { opacity: 0, scale: 1, left: width / 4 + step, top: height / 3 - (step ** 2), rotate: 0 },
          { duration, easing: Easing.inOut(Easing.quad) }
        ),
        withTiming(
          { opacity: 0, scale: 1, left: width / 4 + step, top: height / 3, rotate: 0 },
          { duration, easing: Easing.inOut(Easing.quad) }
        ),
        withSequence(
          withTiming(
            { opacity: 0, scale: 0, left: width / 4 + (step * 5), top: height / 3 - ((step * 1.2) ** 2), rotate: 0 },
            { duration }
          ),
          withTiming(
            { opacity: 0, scale: 0, left: width / 4 + (step * 5), top: height / 3 - ((step * 1.2) ** 2), rotate: 0 },
            { duration }
          ),
          withTiming(
            { opacity: .5, scale: .5, left: width / 4 + (step * 5), top: height / 3 - ((step * 1.2) ** 2), rotate: 90 },
            { duration }
          ),
          withTiming(
            { opacity: 1, scale: 1.5, left: width / 4 + (step * 5), top: height / 3, rotate: 360 },
            { duration: duration * 15 }
          ),
        ),
      )

    span1.value =
      withSequence(
        withTiming(
          { left: width + width / 4, top: height / 2 - height / 4, opacity: 0 },
          { duration, easing: Easing.inOut(Easing.quad) }
        ),
        withSequence(
          withTiming(
            { left: width + width / 4, top: height / 2 - height / 4, opacity: 0 },
            { duration: duration * 20, easing: Easing.inOut(Easing.quad) }
          ),
          withTiming(
            { left: width / 4 - width / 8, top: height / 2 - height / 4, opacity: 1 },
            { duration, easing: Easing.inOut(Easing.quad) }
          ),
        )
      )

    span2.value =
      withSequence(
        withTiming(
          { left: -width / 4, top: height / 2 - height / 16, opacity: 0 },
          { duration, easing: Easing.inOut(Easing.quad) }
        ),
        withSequence(
          withTiming(
            { left: -width / 4, top: height / 2 - height / 16, opacity: 0 },
            { duration: duration * 20, easing: Easing.inOut(Easing.quad) }
          ),
          withTiming(
            { left: width * 2.5 / 4, top: height / 2 - height / 16, opacity: 1 },
            { duration, easing: Easing.inOut(Easing.quad) }
          ),
        )
      )

  }

  return <TouchableOpacity style={styles.container} onPress={launchAnimation}>
    <Animated.Text style={[styles.span, styles.text, animatedSpan1]}>Tiber</Animated.Text>
    <Animated.Text style={[styles.text, animatedText]}>Reanimated 3</Animated.Text>
    <Animated.View style={[styles.animatedView, animatedCircle]} />
    <Animated.Text style={[styles.span, styles.text, animatedSpan2]}>Studio!</Animated.Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  animatedView: {
    position: "absolute",
    backgroundColor: "black",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    position: "absolute",
  },
  span: {
    fontSize: 20
  }
})