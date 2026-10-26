import { ActivityIndicator, useColorScheme } from "react-native";
import { Colors } from "../constants/colors";

function ThemedLoader({ size = "large", color }) {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    const finalColor = color ?? theme.text;

    return <ActivityIndicator size={size} color={finalColor} />;
}

export default ThemedLoader;