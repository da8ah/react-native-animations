import Step from "@/components/Step";
import { useState } from "react";
import { ScrollView, Text } from "react-native";

export default function Route() {

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
            stepsGenerator(10)[0].reverse().map((coorX, i) => (
                <Step
                    key={i}
                    coorX={coorX}
                    setScrollToEnd={i === 9 ? setScroll : undefined}
                >
                    <Text>{i + 1}</Text>
                </Step>
            ))
        }
    </ScrollView >
}