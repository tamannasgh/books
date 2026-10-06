import { View } from "react-native";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/colors";

const ThemedView = ({ style, ...props }) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    //its self closing so now, the children will automatically are returned inside it
    return <View style={[{ backgroundColor: theme.background }, style]} {...props} />;
};

export default ThemedView;