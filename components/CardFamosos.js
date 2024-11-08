import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { urlFor } from '../sanity';

export default function CardFamosos({item}) {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Restaurante', {...item})}
        >
            <View 
                style={{
                    alignItems: 'center',
                    marginRight: 16,
                    marginBottom: 16,
                }}
                className="w-24">
                {/* Imagem redonda */}
                <View style={{ borderRadius: 50, overflow: 'hidden' }}>
                    <Image 
                        className="h-16 w-16" 
                        source={{ uri: urlFor(item.image).url() }} 
                    />
                </View>
                
                {/* Nome do restaurante */}
                <Text className="text-center text-sm font-bold pt-2">
                    {item.name.length > 10 ? `${item.name.slice(0, 10)}...` : item.name}
                </Text>
                
                {/* Descrição do restaurante */}
                <Text className="text-center text-xs text-gray-600">
                    {item.type?.name || "Categoria"}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
