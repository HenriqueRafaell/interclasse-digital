import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";
import Header from "../components/Header";

export default function Calendario() {

  const [modalidade, setModalidade] = useState("");
  const [sala1, setSala1] = useState("");
  const [sala2, setSala2] = useState("");

  const [jogos, setJogos] = useState([]);

  const salvarJogo = async () => {

    const novo = { modalidade, sala1, sala2 };

    const lista = [...jogos, novo];

    setJogos(lista);

    await AsyncStorage.setItem("jogos", JSON.stringify(lista));

    await api.post("/posts", novo);

    setModalidade("");
    setSala1("");
    setSala2("");
  };

  const carregarJogos = async () => {
    const dados = await AsyncStorage.getItem("jogos");

    if (dados) {
      setJogos(JSON.parse(dados));
    }
  };

  useEffect(() => {
    carregarJogos();
  }, []);

  return (
    <View style={styles.container}>

      <Header titulo="Calendário de Jogos" />

      <TextInput
        placeholder="Modalidade"
        style={styles.input}
        value={modalidade}
        onChangeText={setModalidade}
      />

      <TextInput
        placeholder="Sala 1"
        style={styles.input}
        value={sala1}
        onChangeText={setSala1}
      />

      <TextInput
        placeholder="Sala 2"
        style={styles.input}
        value={sala2}
        onChangeText={setSala2}
      />

      <Button title="Cadastrar jogo" onPress={salvarJogo} />

      <FlatList
        data={jogos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.modalidade} - {item.sala1} x {item.sala2}
          </Text>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginTop: 10
  },

  item: {
    marginTop: 10,
    fontSize: 16
  }

});