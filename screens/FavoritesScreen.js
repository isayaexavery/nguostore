import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SIZE, colors } from "../constants/constants";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import MyButton from "../components/MyButton";
import MyBagCard from "../components/MyBagCard";
import FavoritesCard from "../components/FavoritesCard";
import { products } from "../constants/products";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  const navigation = useNavigation();

  const favorites = useSelector((state) => state.favorites);
  const [fav, setFav] = useState(null);

  useEffect(() => {
    if (favorites.favorite.length) {
      setFav(favorites.favorite);
    } else {
    }
  }, [favorites]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.faintgray,
        flex: 1,
        height: "100%",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: 20,

          backgroundColor: colors.faintgray,
          paddingVertical: 10,
        }}
      >
        <FontAwesome5 name="search" size={22} color={colors.black} />
      </View>
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: "100%", marginHorizontal: 20 }}
      > */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: colors.black,
            fontFamily: "bold",
            fontSize: SIZE.large,
          }}
        >
          Favorites
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: colors.black,
              fontFamily: "regular",
              fontSize: SIZE.small,
            }}
          >
            Clear All
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {!favorites.favorite.length && (
          <Text style={{ fontFamily: "medium", fontSize: SIZE.medium }}>
            Nothing in favorites
          </Text>
        )}
      </View>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          numColumns={2}
          data={fav}
          renderItem={({ item, index }) => <FavoritesCard data={item} />}
        />
      </View>

      {/* <FavoritesCard /> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default FavoritesScreen;
