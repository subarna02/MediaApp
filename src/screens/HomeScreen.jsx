import { View, Text, SafeAreaView, ScrollView, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import NavHeader from "../components/molecules/NavHeader";
import HeadLines from "../components/molecules/HeadLines";
import TrendingNews from "../components/molecules/TrendingNews";
import International from "../components/molecules/International";
import State from "../components/molecules/State";
const HomeScreen = () => {
  const data=[
    {
      name:"Trending News",
      component:<TrendingNews/>
    },
    {
      name:"International",
      component:<International/>
    },
    {
      name:"State",
      component:<State/>
    }
  ]
  return (
    <View className='mt-10'>
      <View className=" px-3 flex-1 py-1 ">
        <View className=" flex-row justify-between items-center px-1 ">
          <View className="bg-white  px-2 py-2 shadow-md rounded-md">
            <Ionicons name="menu-outline" size={30} color="black" />
          </View>
          <View className="bg-white px-2 py-2 shadow-md rounded-md">
            <Ionicons name="notifications-outline" size={30} color="black" />
          </View>
        </View>
      </View>
      <View>
        <NavHeader />
      </View>
      <View className="flex-row items-center">
        <HeadLines />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => item.component}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default HomeScreen;
