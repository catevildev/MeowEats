import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function TelaLogin() {
    const navigation = useNavigation();

    return (
        <View
            className="flex-1 justify-center items-center p-6 bg-white">
            <View style={{ overflow: 'hidden', width: 175, height: 77 }}
                className="mb-8">
                <Image
                    className="w-full h-full object-contain"
                    source={require('../assets/logos/me_bc.png')}
                />
            </View>


            {/* Campo de Login */}
            <View
                style={{
                    borderRadius: 33,
                    paddingHorizontal: 10,
                }}
                className="flex-row items-center w-full mb-4 border border-gray-300">
                <FontAwesome name="user" size={20} color="#999" className="mr-2.5" />
                <TextInput
                    className="flex-1 p-2.5"
                    placeholder="Usuario"
                    placeholderTextColor="#999"
                />
            </View>

            {/* Campo de Senha */}
            <View
                style={{
                    borderRadius: 33,
                    paddingHorizontal: 10,
                }}
                className="flex-row items-center w-full mb-4 border border-gray-300">
                <FontAwesome name="lock" size={20} color="#999" className="mr-2.5" />
                <TextInput
                    className="flex-1 p-2.5"
                    placeholder="Senha"
                    secureTextEntry
                    placeholderTextColor="#999"
                />
            </View>

            <TouchableOpacity
                style={{
                    borderRadius: 33,
                    backgroundColor: themeColors.bgColor(1)
                }}
                className="p-4 w-2/3 items-center mt-3">
                <Text
                    className="font-bold text-white"
                    onPress={() => navigation.navigate('Inicio')}
                >
                    Entrar
                </Text>
            </TouchableOpacity>

            <Text
                className="mt-5 text-black">
                Não tem uma conta?{' '}
                <Text
                    style={{ color: themeColors.bgColor(1) }}
                    className="font-bold"
                    onPress={() => navigation.navigate('Cadastro')}
                >
                    Criar
                </Text>
            </Text>
        </View>
    );
}
