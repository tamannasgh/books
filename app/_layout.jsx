import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../constants/colors";
import { useColorScheme } from "react-native";

const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return <>
        <StatusBar style="auto" />
        <Stack screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title
        }}>
            <Stack.Screen name="index" options={{ title: "Home" }} />
        </Stack>
    </>;
};

export default RootLayout;