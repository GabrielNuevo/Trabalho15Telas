import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import logo from "../../../assets/logo.png";
import { Gradient } from "../../components/Gradient";
import { Container, Logo, Title, InputCpf, BotaoRecuperacao, TextoBotao } from "./styles";

export const EsqueciMinhaSenha = () => {
   
  const [user, setUser] = useState({
    cpf: '',
  });

  const navigation = useNavigation();
  
  function screenRecuperacaoDeSenha() {
    navigation.navigate("RecuperacaoDeSenha");
  }

  return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      <Title>Recuperar Senha</Title>
      <InputCpf
        value={user.cpf}
        onChangeText={setUser}
        placeholder={'Digite seu CPF'}
        placeholderTextColor={'gray'}
      />
      <BotaoRecuperacao onPress={screenRecuperacaoDeSenha}>
        <TextoBotao>RECUPERAR</TextoBotao>
      </BotaoRecuperacao>
      <StatusBar style="auto" />
    </Container>
  );
}
