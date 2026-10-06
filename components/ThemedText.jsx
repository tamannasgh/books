import { Text } from "react-native";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/colors";

const ThemedText = ({ style, title, ...props }) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    //its self closing so now, the children will automatically are returned inside it
    return <Text style={[{ color: (title ? theme.title : theme.text) }, style]} {...props} />;
};

export default ThemedText;