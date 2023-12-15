import Appear from "@/components/Appear";
import Bounce from "@/components/Bounce";
import Draggable from "@/components/Draggable";
import Fade from "@/components/Fade";
import Flip from "@/components/Flip";
import Loading from "@/components/Loading";
import Pulse from "@/components/Pulse";
import Split from "@/components/Split";
import Step from "@/components/Step";
import Typing from "@/components/Typing";
import Wave from "@/components/Wave";
import { useState } from "react";
import { ScrollView, Text } from "react-native";

// Fetch
export const components = {
    ["1" as string]: <Flip />,
    ["2" as string]: <Typing />,
    ["3" as string]: <Draggable />,
    ["4" as string]: <Split />,
    ["5" as string]: <Loading />,
    ["6" as string]: <Wave />,
    ["7" as string]: <Bounce />,
    ["8" as string]: <Appear />,
    ["9" as string]: <Fade />,
    ["10" as string]: <Pulse />,
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
            stepsGenerator(Object.keys(components).length)[0].reverse().map((coorX, i) => (
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