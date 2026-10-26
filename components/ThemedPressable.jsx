import { Pressable, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

const ThemedPressable = ({ style, disabled = false, ...props }) => {
    return <Pressable style={({ pressed }) => [styles.btn, pressed && styles.pressed, disabled && styles.pressed, style]} disabled={disabled} {...props} />;
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginVertical: 10
    },
    pressed: {
        opacity: 0.5
    },
});

export default ThemedPressable;