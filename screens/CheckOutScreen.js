import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SIZE, colors } from "../constants/constants";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import MyButton from "../components/MyButton";
import { Image } from "expo-image";
import ShippingAddressCard from "../components/UserScreen/ShippingAddressCard";

const CheckOutScreen = () => {
  const { params: data } = useRoute();
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [sizeSelected, setSizeSelected] = useState(false);
  return (
    <SafeAreaView
      style={{ backgroundColor: colors.white, flex: 1, height: "100%" }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 40,
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
          Checkout
        </Text>
        <View></View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: "100%", marginHorizontal: 20 }}
      >
        <View>
          <Text
            style={{
              color: colors.black,
              fontFamily: "medium",
              fontSize: SIZE.small,
            }}
          >
            Shipping address
          </Text>
          <ShippingAddressCard />
        </View>
        <View style={{ marginTop: 20 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                color: colors.black,
                fontFamily: "medium",
                fontSize: SIZE.small,
              }}
            >
              Payment
            </Text>

            <Text
              style={{
                color: colors.red,
                fontFamily: "medium",
                fontSize: SIZE.small,
              }}
            >
              Change
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              borderRadius: 10,
              padding: 10,
            }}
          >
            <View style={{ elevation: 10 }}>
              <Image
                style={{
                  width: 60,
                  height: 50,
                  backgroundColor: colors.white,
                  borderRadius: 4,
                }}
                source={require("../assets/images/master.png")}
              />
            </View>

            <Text style={{ marginHorizontal: 10, fontSize: SIZE.small }}>
              **** **** **** 3947
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: colors.white,
          elevation: 6,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            justifyContent: "space-between",
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
            Order:
          </Text>
          <Text
            style={{
              fontFamily: "medium",
              fontSize: SIZE.small,
              color: colors.black,
              letterSpacing: 0.5,
            }}
          >
            12,244 Tsh
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            justifyContent: "space-between",
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
            Delivery:
          </Text>
          <Text
            style={{
              fontFamily: "medium",
              fontSize: SIZE.small,
              color: colors.black,
              letterSpacing: 0.5,
            }}
          >
            123,777 Tsh
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            justifyContent: "space-between",
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
            Summary:
          </Text>
          <Text
            style={{
              fontFamily: "medium",
              fontSize: SIZE.small,
              color: colors.black,
              letterSpacing: 0.5,
            }}
          >
            12,244,2343 Tsh
          </Text>
        </View>
        <MyButton title="SUBMIT ORDER" />
      </View>
    </SafeAreaView>
  );
};

export default CheckOutScreen;
