import React from "react";
import { Text, Image, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;
import imagem from "../../../assets/topo.png";

export default function Topo() {

  return (
    <>
      <Image source={imagem} style={styles.topo} />
      <Text style={styles.tituloCarrinho}>Carrinho</Text>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (582 / 772) * width,
  },
  tituloCarrinho: {
    position: "absolute",
    paddingVertical: 60,
    width: "100%",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 40,
    fontFamily: "Montserrat_700Bold",
  },
});
