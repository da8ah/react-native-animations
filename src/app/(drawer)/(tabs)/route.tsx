import Step from "@/components/Step"
import { useEffect, useRef, useState } from "react"
import { ScrollView, View } from "react-native"

export default function Route() {
    const [coor, setCoor] = useState({ x: 0, y: 0 })
    useEffect(() => {
        console.log(coor)
    }, [coor])

    return <ScrollView
        snapToEnd
        ref={comp => comp?.scrollTo(coor)}
        style={{ flex: 1 }}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
    >
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
        <Step />
        <Step setCoor={setCoor} />
    </ScrollView >
}