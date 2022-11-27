import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {Header} from "../../components/Header";
import { Gradient } from "../../components/Gradient";
import { Container, InputCadastro, InputSenha, BotaoCadastrar, TextoBotao } from "./styles";

export const Cadastro = () => {
    
  const [user, setUser] = useState({
    login: '',
    cpf: '',
    dataDeNascimento: '',
    password: '',
    passwordConfirmar: '',
  });

  const navigation = useNavigation();
  
  function screenConfirmacaoDeCadastro() {
    navigation.navigate("ConfirmacaoDeCadastro");
  }

  return (
    <Container>
      <Gradient />
      <Header title="Cadastro" />
      <InputCadastro
        value={user.login}
        onChangeText={setUser}
        placeholder={'Nome'}
        placeholderTextColor={'gray'}
      />
      <InputCadastro
        value={user.cpf}
        onChangeText={setUser}
        placeholder={'CPF'}
        placeholderTextColor={'gray'}
      />
      <InputCadastro
        value={user.dataDeNascimento}
        onChangeText={setUser}
        placeholder={'Data de Nascimento'}
        placeholderTextColor={'gray'}
      />
      <InputSenha
        value={user.password}
        onChangeText={setUser}
        placeholder={'Senha'}
        placeholderTextColor={'gray'}
      />
      <InputSenha
        value={user.passwordConfirmar}
        onChangeText={setUser}
        placeholder={'Confirmar Senha'}
        placeholderTextColor={'gray'}
      />
      <BotaoCadastrar onPress={screenConfirmacaoDeCadastro}>
        <TextoBotao>CADASTRAR</TextoBotao>
      </BotaoCadastrar>
      
      <StatusBar style="auto" />
    </Container>
  );
}
