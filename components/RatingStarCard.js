import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../constants/constants";

const RatingStarCard = ({ num, size }) => {
  if (num === 5)
    return (
      <View style={{ flexDirection: "row", gap: 3 }}>
        <FontAwesome name="star" size={size} color={colors.yellow} />
        <FontAwesome name="star" size={size} color={colors.yellow} />
        <FontAwesome name="star" size={size} color={colors.yellow} />
        <FontAwesome name="star" size={size} color={colors.yellow} />
        <FontAwesome name="star" size={size} color={colors.yellow} />
      </View>
    );
  if (num > 4)
    return (
      <View style={{ flexDirection: "row", gap: 3 }}>
        <FontAwesome name="star" size={size} color={colors.yellow} />
        <FontAwesome name="star" size={size} color={colors.yellow} />
        <FontAwesome name="star" size={size} color={colors.yellow} />
        <FontAwesome name="star" size={size} color={colors.yellow} />
        <FontAwesome name="star-half-empty" size={size} color={colors.yellow} />
      </View>
    );

  if (num > 3)
    return (
      <View style={{ flexDirection: "row", gap: 3 }}>
        <FontAwesome name="star" size={size} color={colors.yellow} />
        <FontAwesome name="star" size={size} color={colors.yellow} />
        <FontAwesome name="star" size={size} color={colors.yellow} />
        <FontAwesome name="star-half-empty" size={size} color={colors.yellow} />
        <FontAwesome name="star-o" size={size} color={colors.yellow} />
      </View>
    );

  if (num > 2)
    return (
      <View style={{ flexDirection: "row", gap: 3 }}>
        <FontAwesome name="star" size={size} color={colors.yellow} />
        <FontAwesome name="star" size={size} color={colors.yellow} />
        <FontAwesome name="star-half-empty" size={size} color={colors.yellow} />
        <FontAwesome name="star-o" size={size} color={colors.yellow} />
        <FontAwesome name="star-o" size={size} color={colors.yellow} />
      </View>
    );
};

export default RatingStarCard;
