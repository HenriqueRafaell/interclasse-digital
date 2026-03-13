import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Classificacao from "./screens/Classificacao";
import Calendario from "./screens/Calendario";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Modalidades" component={Home} />
        <Stack.Screen name="Classificacao" component={Classificacao} />
        <Stack.Screen name="Calendario" component={Calendario} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}