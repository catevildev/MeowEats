import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { themeColor, themeColors } from '../theme';
import Categorias from '../components/Categorias';
import LinhaPrincipal from '../components/LinhaPrincipal';
import { getFeaturedRestaurants } from '../api';
import { useEffect, useState } from 'react'
import LinhaFamosos from '../components/LinhaFamosos';


export default function TelaInicio() {

  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

    useEffect(() => {
      getFeaturedRestaurants().then(data=>{
        setFeaturedRestaurants(data);
      })
    }, []);
  return (
    <SafeAreaView className="bg-gray-50">
      <StatusBar className="dark-content" />
      {/* Barra de pesquisa */}
        <View className="flex-row items-center space-x-2 px-4 pb-2">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300"> 
                <Icon.Search height="25" width="25" stroke="gray" />
                <TextInput placeholder="Restaurantes" className="ml-2 flex-1" />
                <View className="flex-row items-center space-x-1 border-l-2 pl-2 border-l-gray-300">
                    <Icon.MapPin height="20" width="20" stroke="gray" />
                    <Text className="text-gray-600">Sinop, Mato Grosso</Text>
                </View>
            </View>
            <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
                <Icon.Bell height="20" width="20" strokeWidth={2.5} stroke="white" />
            </View>
        </View>

        {/* Conteudo */}
        <ScrollView showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 50,
          }}
        >

          {/* Categorias */}
          <Categorias />

         {/* Apresentacao */}
          <View className="mt-5">
            {/* Linha Famosos (Renderizado apenas uma vez) */}
            <LinhaFamosos
              title="Famosos do MeowEats" // Título fixo
              restaurants={featuredRestaurants[2]?.restaurants} // Passar os restaurantes que deseja mostrar aqui
              description="Marcas famosas"
            />

            {/* Linha Principal (Renderizado para cada item, excluindo o [2]) */}
            {
              featuredRestaurants
                .filter((_, index) => index !== 2) // Filtrar para remover o item [2]
                .map((item, index) => (
                  <LinhaPrincipal
                    key={index}
                    title={item.name}
                    restaurants={item.restaurants}
                    description={item.description}
                  />
                ))
            }
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}