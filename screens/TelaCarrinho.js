import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restauranteSlice';
import { removerCarrinho, selecionarItensCarrinho, selecionarTotalCarrinho } from '../slices/carrinhoSlice';
import { useEffect, useState } from 'react'
import { urlFor } from '../sanity';


export default function TelaCarrinho() {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const cartItems = useSelector(selecionarItensCarrinho);
  const cartTotal = useSelector(selecionarTotalCarrinho);
  const dispatch = useDispatch();
  const [groupedItems, setGroupedItems] = useState({})
  const valorEntrega = 2;

  useEffect(()=>{
    const items = cartItems.reduce((group, item)=>{
      if(group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    },{})
    setGroupedItems(items);
  }, [cartItems])
  return (
    <SafeAreaView className="bg-white flex-1">
      {/* Botao Voltar */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={()=> navigation.goBack()}
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Seu carrinho</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>

      {/* Tempo de entrega */}
      <View style={{backgroundColor: themeColors.bgColor(0.2)}}
        className="flex-row px-4 items-center">
          <Image source={require('../assets/images/entregador.png')} className="w-20 h-20 rounded-full" />
          <Text className="flex-1 pl-4">Entrega em 20-30 minutos</Text>
          <TouchableOpacity>
            <Text className="font-bold" style={{color: themeColors.text}}>
              Alterar
            </Text>
          </TouchableOpacity>
      </View>
      <ScrollView
        showVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50
        }}
        className="bg-white pt-5"
      >
        {
          Object.entries(groupedItems).map(([key, items])=> {
            let dish = items[0];
            return (
              <View key={key}
                className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
                  <Text className="font-bold" style={{color: themeColors.text}}>
                    {items.length} x
                  </Text>
                  <Image className="h-14 w-14 rounded-full" source={{uri: urlFor(dish.image).url()}} />
                  <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                  <Text className="font-semibold text-base">R$ {dish.price}</Text>
                  <TouchableOpacity
                    className="p-1 rounded-full"
                    onPress={()=> dispatch(removerCarrinho({id: dish._id}))}
                    style={{backgroundColor: themeColors.bgColor(1)}}
                  >
                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                  </TouchableOpacity>
              </View>
            )
          })
        }
      </ScrollView>
     
      {/* Total */}
      <View style={{backgroundColor: themeColors.bgColor(0.2)}} className="p-6 px-8 rounded-t-3xl space-y-4">
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Valor do Pedido</Text>
          <Text className="text-gray-700">R$ {cartTotal}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Valor da Entrega</Text>
          <Text className="text-gray-700">R$ {valorEntrega}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Total</Text>
          <Text className="text-gray-700 font-extrabold">R$ {valorEntrega+cartTotal}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Preparacao')}
            style={{backgroundColor: themeColors.bgColor(1)}}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              Finalizar pedido
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}