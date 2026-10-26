import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import { Text, StyleSheet } from "react-native";
import ThemedPressable from "../../components/ThemedPressable";
import { Colors } from "../../constants/colors";
import { useUser } from "../../hooks/useUser";

const profile = () => {

    const { user, logout, authChecked } = useUser();


    return <ThemedView screen={true}>
        <ThemedText>profile</ThemedText>
        {authChecked && user != null && <ThemedText title={true}>{user.email}</ThemedText>}
        <ThemedPressable style={{ backgroundColor: Colors.warning, alignSelf: "center" }} onPress={logout}>
            <Text style={{ color: "white", fontSize: 16 }}>Logout</Text>
        </ThemedPressable>

    </ThemedView>;
};

const styles = StyleSheet.create({

});

export default profile;