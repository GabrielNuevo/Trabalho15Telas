import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const InputCadastro = styled.TextInput`
  height: 31px;
  width: 188px;
  background-color: #ffffff;
  border: 2px solid #00ffff;
  border-radius: 5px;
  padding-left: 5px;
  font-family: sans-serif;
  margin-top: 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const InputSenha = styled.TextInput`
    height: 31px;
    width: 188px;
    border: 2px solid #00FFFF;
    border-radius: 5px;
    padding-left: 5px;
    font-family: sans-serif;
    margin-top: 16px;
    margin-bottom: 16px;
    box-shadow: 0 4px 4px rgba(0,0,0,0.25);
`;

export const TextoBotao = styled.Text`
  text-align: center;
  color: #120a8f;
  font-weight: bold;
  font-family: sans-serif;
  position: absolute;
`;

export const BotaoCadastrar = styled.TouchableOpacity`
  height: 33px;
  width: 131px;
  border: 2px solid #00ffff;
  border-radius: 5px;
  margin-top: 16px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
