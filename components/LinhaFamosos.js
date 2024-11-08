import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { themeColors } from '../theme';
import CardFamosos from './CardFamosos';

export default function LinhaFamosos({ title, description, restaurants }) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">Famosos do MeowEats</Text>
          <Text className="text-gray-500 text-xs">
            Marcas famosas
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">Ver mais</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible py-5"
      >
        {Array.isArray(restaurants) && restaurants.length > 0 ? (
          restaurants.map((restaurant, index) => (
            <CardFamosos
              item={restaurant}
              key={index}
            />
          ))
        ) : (
          <Text className="text-gray-500">Nenhum restaurante disponível.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
