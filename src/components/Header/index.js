import logo from "../../../assets/logo.png";
import colors from "../../themes/colors.js";
import {AntDesign} from "@expo/vector-icons";
import {Container, Title, BotaoLogin, Logo} from "./styles.js"
import { useNavigation } from "@react-navigation/native";

export const Header = ({title}) => {

    const navigation = useNavigation();

    function screenLogin() {
        navigation.navigate("Login");
      }

    return (
        <Container>
            <AntDesign
        name="logout"
        size={24}
        color={`${colors.secondary}`} />
        <Title>{title}</Title>
        <BotaoLogin onPress={screenLogin}>
            <Logo source={logo} />
        </BotaoLogin>
        </Container>
    )
}