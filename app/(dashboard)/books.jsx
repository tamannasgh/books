import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedLoader from "../../components/ThemedLoader";


import { useBooks } from "../../hooks/useBooks";
import Spacer from "../../components/Spacer";

const books = () => {

    const { loading, books } = useBooks();


    return <ThemedView screen={true}>

        <Spacer height={10} />

        <ThemedText title={true} style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center"
        }}>Your Books</ThemedText>

        <Spacer />

        {loading ? <ThemedLoader /> : books.length > 0 ? <ThemedText>{books[0].title}</ThemedText> : <ThemedText>No Books yet, create one</ThemedText>}
    </ThemedView>;
};

export default books;