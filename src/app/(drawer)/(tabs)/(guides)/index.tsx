import Card from "@/components/guides/Card";
import Code from "@/components/guides/Code";
import Intro from "@/components/guides/Intro";
import Slider from "@/components/guides/Slider";
import { ScrollView } from "react-native";

// Fetch
export const components = {
    ["1" as string]: <Code />,
    ["2" as string]: <Slider />,
    ["3" as string]: <Intro />,
};

export default function GuidesScreen() {
    return <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: "3%", justifyContent: 'center' }}
    >
        {Object.values(components).map((comp, i) => (
            <Card key={`card-${i + 1}`} id={i + 1} name={comp?.type.name} />
        ))}
    </ScrollView>
}