import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button, TextInput, StyleSheet } from "react-native";
import api from "../services/api";
import Header from "../components/Header";

export default function Classificacao() {

  const [dados, setDados] = useState([]);
  const [sala, setSala] = useState("");
  const [pontos, setPontos] = useState("");

  const buscarClassificacao = async () => {
    const response = await api.get("/users");
    setDados(response.data);
  };

  const adicionarSala = async () => {

    const novaSala = {
      sala,
      pontos
    };

    await api.post("/posts", novaSala);

    setSala("");
    setPontos("");

    alert("Sala adicionada!");
  };

  useEffect(() => {
    buscarClassificacao();
  }, []);

  return (
    <View style={styles.container}>

      <Header titulo="Classificação" />

      <FlatList
        data={dados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.name} - {item.id * 3} pontos
          </Text>
        )}
      />

      <TextInput
        placeholder="Sala"
        style={styles.input}
        value={sala}
        onChangeText={setSala}
      />

      <TextInput
        placeholder="Pontos"
        style={styles.input}
        value={pontos}
        onChangeText={setPontos}
      />

      <Button title="Cadastrar sala" onPress={adicionarSala} />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  },

  item: {
    fontSize: 16,
    marginBottom: 5
  },

  input: {
    borderWidth: 1,
    marginTop: 10,
    padding: 10
  }

});