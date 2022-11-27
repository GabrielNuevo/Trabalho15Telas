import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 100.125px;
  margin-top: -220px;
`;

export const TitleTop = styled.Text`
  color: #120a8f;
  font-weight: 800;
  font-size: 18px;
  margin-top: 200px;
`;

export const TitleBottom = styled.Text`
  color: #120a8f;
  font-weight: 800;
  font-size: 18px;
  margin-bottom: 100;
`;

export const TextoBotao = styled.Text`
  font-family: sans-serif;
  color: #120a8f;
  text-align: center;
  font-weight: bold;
  position: absolute;
`;

export const BotaoLogin = styled.TouchableOpacity`
  height: 33px;
  width: 131px;
  border: 2px solid #00ffff;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: -10px;
  margin-bottom: 5px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
