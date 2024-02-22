import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import { SIZE, colors } from "../constants/constants";
import { Fontisto, FontAwesome6, AntDesign } from "@expo/vector-icons";
import RatingStarCard from "./RatingStarCard";

const FavoritesCard = ({ data }) => {
  const [bag, setBag] = useState(false);

  console.log("in favorites");
  console.log(data);

  return (
    <View
      style={{
        marginHorizontal: 10,
        width: 150,
      }}
    >
      <View
        style={{
          padding: 10,
          height: 220,
          backgroundColor: colors.lightgray,
          borderRadius: 10,
        }}
      >
        <Image
          style={{
            height: "100%",
            resizeMode: "center",
            borderRadius: 5,
          }}
          source={data.image}
        />
        <TouchableOpacity
          onPress={() => setBag(!bag)}
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
          <Fontisto
            name="shopping-bag"
            size={18}
            color={bag ? colors.red : colors.gray}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <RatingStarCard size={18} num={4} />

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
        <Text
          style={{
            fontFamily: "regular",
            fontSize: SIZE.xSmall,
            color: colors.gray,
          }}
        >
          Color:{" "}
          <Text
            style={{
              color: colors.black,
            }}
          >
            {" "}
            Black{" "}
          </Text>
        </Text>
        <Text
          style={{
            fontFamily: "regular",
            fontSize: SIZE.xSmall,
            color: colors.gray,
          }}
        >
          Size:{" "}
          <Text
            style={{
              color: colors.black,
              fontSize: SIZE.xSmall,
            }}
          >
            L
          </Text>
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            color: colors.black,
            fontSize: SIZE.small,
            fontFamily: "medium",
          }}
        >
          {data.price}Tsh
        </Text>
      </View>
    </View>
  );
};

export default FavoritesCard;
