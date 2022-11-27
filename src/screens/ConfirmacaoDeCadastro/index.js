import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import logo from "../../../assets/logo.png";
import { Gradient } from "../../components/Gradient";
import { Container, Logo, TitleTop, TitleBottom, BotaoLogin, TextoBotao } from "./styles";

export const ConfirmacaoDeCadastro = () => {
  const navigation = useNavigation();
  
  function screenLogin() {
    navigation.navigate("Login");
  }

  return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      
      <TitleTop>Usuario cadastrado</TitleTop> 
      <TitleBottom>com sucesso!</TitleBottom>
      <BotaoLogin onPress={screenLogin}>
        <TextoBotao>LOGIN</TextoBotao>
      </BotaoLogin>
      <StatusBar style="auto" />
    </Container>
  );
}
