import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TelaInicio from './screens/TelaInicio';
import TelaRestaurante from './screens/TelaRestaurante';
import TelaCarrinho from './screens/TelaCarrinho';
import TelaPreparacao from './screens/TelaPreparacao';
import TelaEntrega from './screens/TelaEntrega';
import TelaLogin from './screens/TelaLogin'; // Importando TelaLogin
import TelaCadastro from './screens/TelaCadastro'; // Importando TelaCadastro

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={TelaLogin} />
        {/* Descomente as linhas abaixo se quiser adicionar as telas de Cadastro e Inicio */}
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Inicio" component={TelaInicio} />
        <Stack.Screen name="Restaurante" component={TelaRestaurante} />
        <Stack.Screen
          name="Carrinho"
          component={TelaCarrinho}
          options={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="Preparacao"
          component={TelaPreparacao}
          options={{ presentation: 'fullScreenModal' }}
        />
        <Stack.Screen
          name="Entrega"
          component={TelaEntrega}
          options={{ presentation: 'fullScreenModal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
