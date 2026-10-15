import { TextInput, useColorScheme } from "react-native";
import { Colors } from "../constants/colors";

const ThemedTextInput = ({ style, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return <TextInput
        style={[{
            backgroundColor: theme.uiBackground,
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 5,
            color: theme.text,
            fontsize: 16,
            width: "80%"

        }, style]}
        placeholderTextColor={"#959595"} {...props} />;
};


export default ThemedTextInput;