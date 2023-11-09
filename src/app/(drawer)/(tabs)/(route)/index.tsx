import Step from "@/components/Step";
import { useState } from "react";
import { ScrollView, Text } from "react-native";

// Fetch
export const screenTitles = {
    ["1" as string]: "Slide",
    ["2" as string]: "Typing",
    ["3" as string]: "Split",
    ["4" as string]: "Appear",
    ["5" as string]: "Fade",
    ["6" as string]: "Flip",
    ["7" as string]: "Loading",
    ["8" as string]: "Wave",
    ["9" as string]: "Bounce",
    ["10" as string]: "Pulse",
};

export default function RouteScreen() {

    const [scroll, setScroll] = useState({ x: 0, y: 0 })
    const [width, setWidth] = useState(0);

    const stepsGenerator = (n: number, asc = true) => {
        const mapX = {
            [2 as number]: 0,
            [1 as number]: (width / 3) - 40,
            [0 as number]: (width / 1.7) - 40,
            [-1 as number]: (width / 1.2) - 40
        }

        let flag = asc;
        let cont = 2
        let acc = 0
        const coorX = Array(n).fill(0).map((_, index) => {
            if (index === 0) return mapX[acc]

            if (flag) acc++
            else acc--;

            cont++
            if (cont === 4) {
                cont = 1
                flag = !flag
            }

            return mapX[acc]
        })

        const coorY = Array(n).fill(0).map((_, index) => (index * Math.PI / 4) * 50);

        return [coorX, coorY]
    }

    return <ScrollView
        snapToEnd
        ref={comp => comp?.scrollTo(scroll)}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: "3%", justifyContent: 'center' }}
        onContentSizeChange={(w) => setWidth(w)}
    >
        {
            stepsGenerator(Object.keys(screenTitles).length)[0].reverse().map((coorX, i) => (
                <Step
                    key={`step-${i + 1}`}
                    index={i + 1}
                    coorX={coorX}
                    setScrollToEnd={i + 1 === 10 ? setScroll : undefined}
                >
                    <Text>{i + 1}</Text>
                </Step>
            ))
        }
    </ScrollView>
}