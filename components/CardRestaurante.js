import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { urlFor } from '../sanity';

export default function CardRestaurante({item}) {
    const navigation = useNavigation();
    // console.log('item: ', item);
  return (
    <TouchableWithoutFeedback
      onPress={()=> navigation.navigate('Restaurante', {...item})}
    >
      <View 
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7
        }}
        className="mr-6 bg-white rounded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl" source={{uri: urlFor(item.image).url()}} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image source={require('../assets/images/avaliacao.png')} className="h-4 w-4" />
            <Text className="text-xs">
              <Text className="text-yellow-700">{item.rating.toFixed(1)} </Text>
              <Text className="text-gray-700">
                ({item.reviews}) · <Text className="font-semibold">{item?.type?.name}</Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width="15" height="15" />
            {/* O endereço foi atualizado para 25 caracteres, maior que isso ... */}
            <Text className="text-gray-700 text-xs">
              Proximo · {item.address.length > 25 ? `${item.address.slice(0, 25)}...` : item.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}