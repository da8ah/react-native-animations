import { useLocalSearchParams } from "expo-router"
import { Text, View } from "react-native"

export default function Viewer() {
    const { id } = useLocalSearchParams<{ id: string }>()
    return <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Viewer {id}</Text>
    </View>
}