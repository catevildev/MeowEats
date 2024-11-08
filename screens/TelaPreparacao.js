import { View, Text, Image } from 'react-native'
import React from 'react'

import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function TelaPreparacao() {
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            // Leva para a tela entrega
            navigation.navigate('Entrega');
        }, 3000)
    }, [])
  return (
    <View className="flex-1 bg-white justify-center items-center"> 
      <Image source={require('../assets/images/entrega.gif')} className="w-80 h-80"/>
    </View>
  )
}