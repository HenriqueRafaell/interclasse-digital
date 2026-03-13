import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import Header from "../components/Header";

const modalidades = [
  { id: "1", nome: "Futsal", img: "https://cdn-icons-png.flaticon.com/512/53/53283.png" },
  { id: "2", nome: "Vôlei", img: "https://cdn-icons-png.flaticon.com/512/889/889455.png" },
  { id: "3", nome: "Basquete", img: "https://cdn-icons-png.flaticon.com/512/889/889461.png" },
  { id: "4", nome: "E-Sports", img: "https://cdn-icons-png.flaticon.com/512/686/686589.png" }
];

export default function Home() {

  return (
    <View style={styles.container}>

      <Header titulo="Modalidades do Interclasse" />

      <FlatList
        data={modalidades}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.img }} style={styles.img} />
            <Text style={styles.nome}>{item.nome}</Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1
  },

  img: {
    width: 40,
    height: 40,
    marginRight: 10
  },

  nome: {
    fontSize: 18
  }

});