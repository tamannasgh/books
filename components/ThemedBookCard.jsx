import { Pressable, StyleSheet, useColorScheme } from "react-native";
import ThemedText from "./ThemedText";
import { Colors } from "../constants/colors";

function ThemedBookCard({ book }) {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return <Pressable style={[{ backgroundColor: theme.uiBackground }, styles.container]}>
        <ThemedText title={true} style={styles.title}>{book.title}</ThemedText>
        <ThemedText>Written by {book.author}</ThemedText>
    </Pressable>;
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 10,
        borderLeftColor: Colors.primary,
        borderLeftWidth: 2,
        borderRadius: 5,
        marginHorizontal: 10
    },
    title: {
        fontSize: 18
    }
});

export default ThemedBookCard;