import { Container,  Container2, CardImagem, CardImagem2, Title, Descricao, CardContainer } from "./styles.js";
import {Gradient} from "../../components/Gradient";
import {Header} from "../../components/Header";
import {  View } from "react-native";
import {Footer} from "../../components/Footer";
import { StatusBar } from "expo-status-bar";

export const Home = () => {
  return (
    <Container>
      <Gradient />
      <Header title="Marketplace" />
      <Container2>
        <View>
          <Title>Sobre nós...</Title>
            <Descricao>
              Lorem Ipsum is simply dummy text of the printing and 
            </Descricao>
            <Descricao>
              typesetting industry.Lorem Ipsum has been the industry's
            </Descricao>
            <Descricao>
              unchanged.It was popularised in the 1960s with the release of
            </Descricao>
            <Descricao>
              Letraset sheets containing Lorem Ipsum passages, and more
            </Descricao>
            <Descricao>
              recently with desktop publishing software like Aldus PageMaker
            </Descricao>
            <Descricao>
              including versions of Lorem Ipsum.
            </Descricao>
        </View>
        <View>
          <Title>Categorias +</Title>
          <CardContainer>
            <CardImagem source={require('../../../assets/3.jpg')} />
            <CardImagem2 source={require('../../../assets/5.jpg')} />
            <CardImagem source={require('../../../assets/1.jpg')} />
          </CardContainer>
        </View>
        <View>
          <Title>Criadores</Title>
          <Descricao>
            Alex 
            Beatrix
            Carlos 
            Alie
          </Descricao>
        </View>
      </Container2>
      <Footer />
      <StatusBar style="auto" />
    </Container>
  );
}
