import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { getCategories } from '../api';
import { urlFor } from '../sanity';

export default function Categorias() {
    const [activeCategory, setActiveCategory] = useState(null);
    let [categories, setCategories] = useState([]);

    useEffect(()=>{
        getCategories().then(data=>{
            setCategories(data);
        })
    })

  return (
    <View className="mt-4">
        <ScrollView
            horizontal
            showHorizontalScrollIndicator={false}
            className="overflow-visible"
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
        >
            {
                categories.map((category, index)=>{
                    let isActive = category._id==activeCategory;
                    let btnClass = isActive? ' bg-gray-600' : ' bg-gray-200';
                    let textClass = isActive? ' font-semibold text-gray-800' : ' text-gray-500';
                    return (
                        <View key={index} className="flex justify-center items-center mr-6">
                            <TouchableOpacity
                                onPress={()=> setActiveCategory(category._id)}
                                className={"p-1 rounded-full shadow bg-gray-200 " + btnClass}>
                                   <Image 
                                        style={{ width: 45, height: 45 }} // Corrigido de 'heigth' para 'height'
                                        source={{ uri: urlFor(category.image).url() }} 
                                    />                                  
                                </TouchableOpacity>
                                <Text className={"text-sm" + textClass}>{category.name}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    </View>
  )
}