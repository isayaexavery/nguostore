import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SIZE, colors } from "../constants/constants";
import { useRoute } from "@react-navigation/native";
import { products } from "../constants/products";
import ViewAllCard from "../components/ViewAllCard";
import Toolbar from "../components/Toolbar";
const shopCat = ["T-Shirts", "Mitumba", "Vijora", "Trousers"];
const ViewAllScreen = () => {
  const { params: screen } = useRoute();
  return (
    <SafeAreaView
      style={{ backgroundColor: colors.faintgray, flex: 1, height: "100%" }}
    >
      <Toolbar title={screen.screen + "`s shop"} showSearch={true} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 20,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {shopCat.map((itm, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: colors.black,
                paddingHorizontal: 20,
                height: 30,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 8,
              }}
            >
              <Text
                style={{
                  color: colors.white,
                  fontFamily: "regular",
                  fontSize: SIZE.xSmall,
                }}
              >
                {itm}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={{ marginHorizontal: 10, flex: 1, marginBottom: 20 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          numColumns={2}
          data={
            screen.screen === "new"
              ? products.filter((itm) => itm.discount === 0)
              : products.filter((itm) => itm.category === screen.screen)
          }
          renderItem={({ item, index }) => <ViewAllCard data={item} />}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default ViewAllScreen;
