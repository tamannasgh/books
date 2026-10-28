import { useState } from "react";
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedTextInput from "../../components/ThemedTextInput";
import ThemedPressable from "../../components/ThemedPressable";
import Spacer from "../../components/Spacer";
import { useBooks } from "../../hooks/useBooks";

const create = () => {

    const [title, setTitle] = useState(null);
    const [author, setAuthor] = useState(null);
    const [des, setDes] = useState(null);

    const { createBook } = useBooks();

    async function handleSubmit() {
        try {
            //name of my variables match with names in DB
            await createBook({ title, author, des });
        } catch (err) {
            console.log(err);
        }
    }

    return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView screen={true} style={styles.container}>
            <ThemedText style={{
                fontSize: 24,
                fontWeight: "bold"
            }}>Add New Book!</ThemedText>

            <Spacer />

            <ThemedTextInput
                placeholder="title"
                value={title}
                onChangeText={setTitle} />

            <Spacer height={15} />

            <ThemedTextInput
                placeholder="author"
                value={author}
                onChangeText={setAuthor} />

            <Spacer height={15} />

            <ThemedTextInput
                placeholder="description"
                value={des}
                onChangeText={setDes} />

            <Spacer height={25} />

            <ThemedPressable onPress={handleSubmit} style={{ width: "80%", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 16 }}>Add</Text>
            </ThemedPressable>


        </ThemedView>
    </TouchableWithoutFeedback>;
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    }
});

export default create;