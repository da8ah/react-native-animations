import Step from "@/components/Step"
import { useEffect, useState } from "react"
import { Dimensions, ScrollView, Text } from "react-native"

export default function Route() {

    const [scroll, setScroll] = useState({ x: 0, y: 0 })
    const WINDOW_WIDTH = Dimensions.get("window").width;

    const stepsGenerator = (n: number, asc = true) => {
        const mapX = {
            [2 as number]: 0,
            [1 as number]: 87,
            [0 as number]: 173,
            [-1 as number]: 259,
            [-2 as number]: 346
        }

        let flag = asc;
        let cont = 3
        let acc = 0
        const coorX = Array(n).fill(0).map((_, index) => {
            if (index === 0) return mapX[acc]

            if (flag) acc++
            else acc--;

            cont++
            if (cont === 5) {
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
        contentContainerStyle={{ width: "90%", paddingHorizontal: "5%", justifyContent: 'center' }}
        onContentSizeChange={(w) => {
            console.log(WINDOW_WIDTH)
            console.log(w)
        }}
    >
        {
            stepsGenerator(10)[0].reverse().map((coorX, i) => (
                <Step
                    key={i}
                    coorX={coorX}
                    setCoor={i === 9 ? setScroll : undefined}
                >
                    <Text>{i}</Text>
                </Step>
            ))
        }
    </ScrollView >
}