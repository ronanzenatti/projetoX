import { StatusBar, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import Topo from "./source/screens/Carrinho/Topo";
import Detalhes from "./source/screens/Carrinho/Detalhes";

import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_700Bold
} from "@expo-google-fonts/montserrat";

const height = Dimensions.get("screen").height;

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Topo />
      <Detalhes />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
