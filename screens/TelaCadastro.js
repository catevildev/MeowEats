import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react'

export default function TelaLogin() {
    const navigation = useNavigation();

    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const validatePhone = (input) => {
        // Regex para validar o formato +55 (XX) XXXXX-XXXX
        const phoneRegex = /^\+55 \(\d{2}\) \d{5}-\d{4}$/;

        if (input.match(phoneRegex)) {
            setError('');
        } else {
            setError('Use o padrão +55 (XX) XXXXX-XXXX');
        }
    };

    const handleChange = (text) => {
        setPhone(text);
        validatePhone(text);
    };

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

            {/* Campo de E-mail */}
            <View
                style={{
                    borderRadius: 33,
                    paddingHorizontal: 10,
                }}
                className="flex-row items-center w-full mb-4 border border-gray-300">
                <FontAwesome name="at" size={20} color="#999" className="mr-2.5" />
                <TextInput
                    className="flex-1 p-2.5"
                    placeholder="E-mail"
                    placeholderTextColor="#999"
                />
            </View>
            {/* Campo de Celular */}
            <View
                style={{
                    borderRadius: 33,
                    paddingHorizontal: 10,
                }}
                className="flex-row items-center w-full mb-4 border border-gray-300">
                <FontAwesome name="phone" size={20} color="#999" className="mr-2.5" />
                <TextInput
                    className="flex-1 p-2.5"
                    placeholder="Celular"
                    placeholderTextColor="#999"
                    value={phone}
                    onChangeText={handleChange}
                />
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

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
                    Criar conta
                </Text>
            </TouchableOpacity>

            <Text
                className="mt-5 text-black">
                Ja tem uma conta?{' '}
                <Text
                    style={{ color: themeColors.bgColor(1) }}
                    className="font-bold pl-1"
                    onPress={() => navigation.navigate('Login')}
                >
                    Entrar
                </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        marginTop: 5,
    },
});