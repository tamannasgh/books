import { Link } from "expo-router";
import { Text } from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import ThemedPressable from "../../components/ThemedPressable";

const Login = () => {
    const handleSubmit = () => {
        console.log("logged in");
    };

    return <ThemedView screen={true}>
        <ThemedText title={true}>Login</ThemedText>
        <ThemedPressable onPress={handleSubmit}>
            <Text style={{ color: "white" }}>Login</Text>
        </ThemedPressable>
        <Link href={"/register"}><ThemedText>Resister instead</ThemedText></Link>

    </ThemedView>;

};

export default Login;