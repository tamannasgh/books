import { Link } from "expo-router";
import { Text } from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import ThemedPressable from "../../components/ThemedPressable";

const Register = () => {

    const handleSubmit = () => {
        console.log("registered");
    };

    return <ThemedView screen={true}>
        <ThemedText title={true}>Register</ThemedText>
        <ThemedPressable onPress={handleSubmit}>
            <Text style={{ color: "white" }}>Register</Text>
        </ThemedPressable>
        <Link href={"/login"}><ThemedText>Login instead</ThemedText></Link>

    </ThemedView>;

};

export default Register;