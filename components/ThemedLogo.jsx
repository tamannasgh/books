import { Image, useColorScheme } from "react-native";
import LogoLight from "../assets/img/logo_light.png";
import LogoDark from "../assets/img/logo_dark.png";


const ThemedLogo = () => {
    const colorScheme = useColorScheme();

    const logo = colorScheme === "dark" ? LogoDark : LogoLight;

    return <Image source={logo} />;
};

export default ThemedLogo;