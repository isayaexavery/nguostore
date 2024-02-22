import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { colors, SIZE } from "../constants/constants";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const Toolbar = ({ title, showSearch }) => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar backgroundColor={colors.white} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 30,
          marginHorizontal: 5,
          backgroundColor: colors.white,
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={28} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: SIZE.small,
            fontFamily: "medium",
            color: colors.black,
          }}
        >
          {title}
        </Text>
        <View style={{ marginRight: 10 }}>
          {showSearch && (
            <FontAwesome5 name="search" size={22} color={colors.black} />
          )}
        </View>
      </View>
    </View>
  );
};

export default Toolbar;
