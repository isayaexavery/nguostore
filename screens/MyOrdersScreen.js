import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SIZE, colors } from "../constants/constants";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import OrderCard from "../components/UserScreen/OrderCard";
import { useNavigation } from "@react-navigation/native";

const MyOrdersScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, height: "100%" }}>
      <StatusBar backgroundColor={colors.white} />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 30,
            backgroundColor: colors.white,

            paddingVertical: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-outline"
              size={28}
              color={colors.black}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: SIZE.small,
              fontFamily: "medium",
              color: colors.black,
            }}
          >
            Oder Details
          </Text>
          <View />
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyOrdersScreen;
