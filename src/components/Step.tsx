import { StyleSheet } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

export default function Step(props: { children?: JSX.Element, coorX?: number, setScrollToEnd?: ({ x, y }: { x: number, y: number }) => void }) {
    const pressed = useSharedValue(false);

    const tap = Gesture.Tap()
        .onBegin(() => { pressed.value = true })
        .onFinalize(() => { pressed.value = false });

    const animatedDefault = useAnimatedStyle(() => ({
        transform: [{ scale: pressed.value ? 1.1 : 1 }],
    }));

    return <GestureHandlerRootView
        onLayout={(e) => {
            props.setScrollToEnd && props.setScrollToEnd({ x: e.nativeEvent.layout.x, y: e.nativeEvent.layout.y })
        }}
        style={[styles.container, { left: props.coorX || 0 }]}
    >
        <GestureDetector gesture={tap}>
            <Animated.View
                style={[styles.animatedView, animatedDefault]}
            >
                {props.children}
                {/* <Text>Step</Text> */}
            </Animated.View>
        </GestureDetector>
    </GestureHandlerRootView>
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
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})