import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import RatingStarCard from "./RatingStarCard";
import { SIZE, colors } from "../constants/constants";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { favoriteActions } from "../slices/favoritiesSlice";

const ViewAllCard = ({ data, size }) => {
  const price = data.price;
  const discount = price * data.discount;
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  // console.log(favorites);

  const existingFavorite = favorites?.favorite?.find(
    (itm) => itm.id === data.id
  );

  const addToFavorites = () => {
    if (!existingFavorite) {
      dispatch(favoriteActions.addToFavorites(data));
      ToastAndroid.show("Added", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Already Added", ToastAndroid.SHORT);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Product", { data: data })}
      style={{
        marginHorizontal: 10,
        width: "46%",
      }}
    >
      <View
        style={{
          padding: 10,
          width: "100%",
          height: 220,
          backgroundColor: colors.lightgray,
          borderRadius: 10,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "center",
            borderRadius: 5,
          }}
          source={data.image}
        />
        <TouchableOpacity
          onPress={() => {
            setLiked(!liked);
            addToFavorites();
          }}
          style={{
            height: 36,
            width: 36,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            backgroundColor: colors.white,
            elevation: 2,
            bottom: -10,
            right: 0,
            borderRadius: 18,
          }}
        >
          <AntDesign
            name={liked ? "heart" : "hearto"}
            size={18}
            color={liked ? colors.red : colors.gray}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 30,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          margin: 8,
          backgroundColor: discount === 0 ? colors.black : colors.red,
          borderRadius: 15,
          paddingHorizontal: 8,
        }}
      >
        <Text
          style={{
            color: colors.white,
            fontFamily: "regular",
          }}
        >
          {/* -{discount * 100}% */}
          {data.discount === 0 ? "New" : -data.discount * 100 + "%"}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <RatingStarCard size={18} num={data.rating.rate} />

        <Text
          style={{
            color: colors.gray,
            fontSize: SIZE.small,
          }}
        >
          {" "}
          ({data.rating.count})
        </Text>
      </View>

      <Text
        numberOfLines={2}
        style={{
          color: colors.black,
          fontSize: SIZE.small,
          fontFamily: "bold",
        }}
      >
        {data.title}
      </Text>
      <View style={{ flexDirection: "row" }}>
        {data.discount === 0 ? null : (
          <Text
            style={{
              color: colors.gray,
              fontSize: SIZE.small,

              textDecorationLine: "line-through",
            }}
          >
            {price.toLocaleString()}
          </Text>
        )}

        <Text
          style={{
            color: colors.red,
            fontSize: SIZE.small,
            fontFamily: "bold",
          }}
        >
          {(price - discount).toLocaleString()} Tsh
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ViewAllCard;
