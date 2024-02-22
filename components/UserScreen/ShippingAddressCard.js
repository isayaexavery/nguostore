import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SIZE, colors } from "../../constants/constants";
import { useNavigation } from "@react-navigation/native";

const ShippingAddressCard = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        marginTop: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 3,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            color: colors.black,
            fontFamily: "medium",
            fontSize: SIZE.small,
          }}
        >
          Chausiku Bahati
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("EditAddress")}>
          <Text
            style={{
              color: colors.red,
              fontFamily: "medium",
              fontSize: SIZE.small,
            }}
          >
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: colors.black,
          fontFamily: "regular",
          fontSize: SIZE.small,
        }}
      >
        Mtaa wa Makutano
      </Text>
      <Text
        style={{
          color: colors.black,
          fontFamily: "regular",
          fontSize: SIZE.small,
        }}
      >
        Mabibo Dar es Salaam
      </Text>
    </View>
  );
};

export default ShippingAddressCard;
