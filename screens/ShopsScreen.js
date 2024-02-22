import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import { colors } from "../constants/constants/";
import { SIZE } from "../constants/constants";
import { Ionicons } from "@expo/vector-icons";
const womenCat = ["Women", "Men", "Kids"];

const ShopsScreen = () => {
  const [cat, setCat] = useState("Women");
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
          backgroundColor: colors.white,
          elevation: 2,
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: SIZE.small,
            fontFamily: "medium",
            color: colors.black,
          }}
        >
          Categories
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 6,
          backgroundColor: colors.white,
          elevation: 2,
          marginTop: 10,
          paddingTop: 6,
        }}
      >
        {womenCat.map((itm, index) => (
          <TouchableOpacity
            onPress={() => setCat(itm)}
            key={index}
            style={{
              paddingVertical: 6,
              borderBottomWidth: 3,
              borderBottomColor: cat === itm ? colors.red : colors.white,
            }}
          >
            <Text
              style={{
                fontSize: SIZE.small,
                fontFamily: "medium",
                color: colors.black,
                marginHorizontal: 20,
              }}
            >
              {itm}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, marginHorizontal: 10, marginVertical: 10 }}
      >
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: colors.red,
            borderRadius: 10,
            paddingVertical: 12,
            height: 100,
          }}
        >
          <Text
            style={{
              fontSize: SIZE.large,
              fontFamily: "medium",
              color: colors.white,
            }}
          >
            SUMMER SALES
          </Text>
          <Text
            style={{
              fontSize: SIZE.xSmall,
              fontFamily: "regular",
              color: colors.white,
            }}
          >
            Up to 50% off
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            height: 100,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            backgroundColor: colors.white,
            borderRadius: 10,
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", marginHorizontal: 20 }}
          >
            <Text style={{ fontFamily: "bold", fontSize: SIZE.medium }}>
              New
            </Text>
          </View>

          <Image
            style={{
              width: 170,
              height: 110,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
            source={require("../assets/images/store/shops01.png")}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: 100,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            backgroundColor: colors.white,
            borderRadius: 10,
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", marginHorizontal: 20 }}
          >
            <Text style={{ fontFamily: "bold", fontSize: SIZE.medium }}>
              Clothes
            </Text>
          </View>

          <Image
            style={{
              width: 170,
              height: 110,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
            source={require("../assets/images/store/shops02.png")}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: 100,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            backgroundColor: colors.white,
            borderRadius: 10,
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", marginHorizontal: 20 }}
          >
            <Text style={{ fontFamily: "bold", fontSize: SIZE.medium }}>
              Shoes
            </Text>
          </View>

          <Image
            style={{
              width: 170,
              height: 110,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
            source={require("../assets/images/store/shoes.png")}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: 100,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            backgroundColor: colors.white,
            borderRadius: 10,
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", marginHorizontal: 20 }}
          >
            <Text style={{ fontFamily: "bold", fontSize: SIZE.medium - 2 }}>
              Accesories
            </Text>
          </View>

          <Image
            style={{
              width: 170,
              height: 110,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
            source={require("../assets/images/store/shops03.png")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopsScreen;
