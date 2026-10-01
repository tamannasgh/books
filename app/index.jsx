import { Link } from "expo-router";
import { Text, View } from "react-native";

const Index = () => {
    return <View>
        <Text>Heyy</Text>
        <Link href={"/profile"}><Text>profile</Text></Link>
    </View>;
};

export default Index;