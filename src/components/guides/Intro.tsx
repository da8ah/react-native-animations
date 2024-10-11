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
  })

  const animatedDefault = useAnimatedStyle(() => ({
    opacity: dimentions.value.opacity,
    width: dimentions.value.width,
    height: dimentions.value.height,
    top: location.value.top,
    left: location.value.left,
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
        ),
      )

    const step = 10
    location.value =
      withSequence(
        withTiming(
          { left: width / 4, top: height / 3 + step },
          { duration, easing: Easing.inOut(Easing.quad) }
        ),
        withTiming(
          { left: width / 4 + step, top: height / 3 - (step ** 2) },
          { duration, easing: Easing.inOut(Easing.quad) }
        ),
        withTiming(
          { left: width / 4 + step, top: height / 3 },
          { duration, easing: Easing.inOut(Easing.quad) }
        ),
        withSequence(
          withTiming(
            { left: width / 4, top: height / 3 + (step * 1.2) },
            { duration, easing: Easing.inOut(Easing.quad) }
          ),
          withTiming(
            { left: width / 4 + (step * 5), top: height / 3 - ((step * 1.2) ** 2) },
            { duration, easing: Easing.inOut(Easing.quad) }
          ),
          withTiming(
            { left: width / 4 + (step * 5), top: height / 3 },
            { duration, easing: Easing.inOut(Easing.quad) }
          ),
        ),
      )
  }

  return <TouchableOpacity style={styles.container} onPress={launchAnimation}>
    <Animated.View style={[styles.animatedView, animatedDefault]}>
      <Text>Reanimated 3</Text>
    </Animated.View>
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
    backgroundColor: "red",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  }
})