import { useLocalSearchParams } from "expo-router"
import { View } from "react-native"
import { components } from "."

export default function Viewer() {
    const { id } = useLocalSearchParams<{ id: string }>()
    return <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {!!id && components[id]}
    </View>
}