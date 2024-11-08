import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import CardRestaurante from './CardRestaurante'

export default function LinhaPrincipal({title, description, restaurants}) {
  return (
    <View>
        <View className="flex-row justify-between items-center px-4">
            <View>
                <Text className="font-bold text-lg">{title}</Text>
                <Text className="text-gray-500 text-xs">
                    {description}
                </Text>
            </View>
            <TouchableOpacity>
                <Text style={{color: themeColors.text}} className="font-semibold">Ver mais</Text>
            </TouchableOpacity>
        </View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
            className="overflow-visible py-5"
        >
            {
                restaurants.map((restaurant, index)=>{
                    return (
                        <CardRestaurante
                            item={restaurant}
                            key={index}
                        />
                    )
                })
            }
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})