import { View } from "react-native";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const ThemedView = ({ style, screen = false, ...props }) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    //its self closing so now, the children will automatically are returned inside it
    if (!screen)
        return <View style={[{ backgroundColor: theme.background }, style]} {...props} />;

    return <SafeAreaView style={[{ backgroundColor: theme.background, flex: 1 }, style]} {...props} />;
};

export default ThemedView;