import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Container = styled.View`
flex: 1;
background-color: #fff;
justify-content: center;
align-items: center;
`;

export const Container2 = styled.View`
  width: 82%;
  height: 580px;
  border: 2px solid red;
  border-radius: 5px;
  margin: 0px 20px 0px 20px;
`;

export const CardImagem = styled.Image`
  width: 75px;
  height: 73px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 4px;
  margin-top: 32px;
  border-radius: 5px;
`;
export const CardImagem2 = styled.Image`
  width: 150px;
  height: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 4px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: bold;
  font-family: 'sans-serif';
  margin-bottom: 50px;
  margin-top: 40px;
  padding-left: 2px;
`;

export const Descricao = styled.Text`
  font-size: 9px;
  color: black;
  font-weight: 800;
  font-family: 'sans-serif';
  align-self: center;
`;

export const CardContainer = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View`
  flex-direction: row;
`;