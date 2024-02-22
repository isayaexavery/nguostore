import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SIZE, colors } from "../constants/constants";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import MyButton from "../components/MyButton";
import MyBagCard from "../components/MyBagCard";

const BagScreen = () => {
  const navigation = useNavigation();
  const [bag, setBag] = useState(null);
  const [totalPrice, setTotalPrice] = useState();

  let totalItems = 0;

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.faintgray, flex: 1, height: "100%" }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: 20,
          marginHorizontal: 20,
          backgroundColor: colors.faintgray,
          paddingVertical: 10,
        }}
      >
        <FontAwesome5 name="search" size={22} color={colors.black} />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            color: colors.black,
            fontFamily: "bold",
            fontSize: SIZE.large,
          }}
        >
          My Bag
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
      {/* <MyBagCard /> */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {/* {cart?.cart?.length && ( */}
        <Text style={{ fontFamily: "medium", fontSize: SIZE.medium }}>
          Nothing in a bag
        </Text>
        {/* )} */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {bag?.map((item) => (
          <View key={item.id}>
            <MyBagCard data={item} />
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          backgroundColor: colors.white,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            justifyContent: "space-between",

            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "regular",
              fontSize: SIZE.small,
              color: colors.gray,
              letterSpacing: 0.5,
            }}
          >
            Total Amount:
          </Text>
          <Text
            style={{
              fontFamily: "medium",
              fontSize: SIZE.small,
              color: colors.black,
              letterSpacing: 0.5,
            }}
          >
            {totalItems?.toLocaleString()}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
          }}
        >
          <MyButton
            onPress={() => navigation.navigate("CheckOut")}
            title="CHECK OUT"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BagScreen;
