import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import Texto from "../../components/Texto";
import logoVendedor from "../../../assets/logo.png";


export default function Detalhes() {

  return (
    <>
      <Texto style={styles.detalhes}>Detalhes do carrinho:</Texto>
      <Texto style={styles.titulo}>Kit IoT</Texto>
      <View style={styles.vendedor}>
        <Image source={logoVendedor} style={styles.logoVendedor} />
        <Texto style={styles.nomeVend}>Nome do Vendedor</Texto>
      </View>
      <Texto style={styles.desc}>
        Um Kit IoT que revoluciona a vida dos estudantes.
      </Texto>
      <Texto style={styles.preco}>R$ 99,00</Texto>
    </>
  );
}

const styles = StyleSheet.create({
  detalhes: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 40,
    textAlign: "left",

  },
  titulo: {
    color: "#ffa500",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 40,
    textAlign: "center",
  },
  nomeVend: {
    color: "#a3a3a3",
    fontSize: 20,
    lineHeight: 40,
    marginLeft: 10,
  },
  desc: {
    fontSize: 18,
    lineHeight: 20,
    color: "#000",
    marginLeft: 10,
  },
  preco: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "right",
    paddingHorizontal: 10,
    color: "#000",
  },
  logoVendedor: {
    height: 32,
    width: 32,
  },
  vendedor: {
    flexDirection: "row",
    padding: 10,
  },
});
