import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import { colors } from "../constants/constants/";
import { SIZE } from "../constants/constants";
import { products } from "../constants/products";
import HomeCard from "../components/HomeCard";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: "100%", height: 230 }}>
        <Image
          style={{ width: "100%", height: 230 }}
          source={require("../assets/images/banner.png")}
        />
        <Text
          style={{
            color: colors.white,
            position: "absolute",
            bottom: 10,
            marginHorizontal: 10,
            fontSize: SIZE.large,
            fontFamily: "bold",
          }}
        >
          Clothes
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, marginHorizontal: 10, marginVertical: 10 }}
      >
        <Animated.View
          entering={FadeInDown.duration(300).delay(100).springify()}
        >
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 14,
            }}
          >
            <View>
              <Text
                style={{
                  color: colors.black,
                  fontSize: SIZE.large,
                  fontFamily: "bold",
                }}
              >
                Men`s Clothes
              </Text>
              <Text
                style={{
                  color: colors.gray,
                  fontSize: SIZE.xSmall,
                  fontFamily: "regular",
                  marginTop: -10,
                }}
              >
                Exclusive price
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewAll", { screen: "men" })}
            >
              <Text
                style={{
                  fontSize: SIZE.xSmall,
                  fontFamily: "regular",
                }}
              >
                View all
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products
              .filter((itm) => itm.category === "men")
              .map((item) => (
                <HomeCard key={item.id} data={item} />
              ))}
          </ScrollView>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.duration(300).delay(200).springify()}
        >
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 14,
            }}
          >
            <View>
              <Text
                style={{
                  color: colors.black,
                  fontSize: SIZE.large,
                  fontFamily: "bold",
                }}
              >
                Women`s Clothes
              </Text>

              <Text
                style={{
                  color: colors.gray,
                  fontSize: SIZE.xSmall,
                  fontFamily: "regular",
                  marginTop: -10,
                }}
              >
                For special occassion
              </Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ViewAll", { screen: "women" })
              }
            >
              <Text
                style={{
                  fontSize: SIZE.xSmall,
                  fontFamily: "regular",
                }}
              >
                View all
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products
              .filter((itm) => itm.category === "women")
              .map((item) => (
                <HomeCard key={item.id} data={item} size={30} />
              ))}
          </ScrollView>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.duration(300).delay(300).springify()}
        >
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 14,
            }}
          >
            <View>
              <Text
                style={{
                  color: colors.black,
                  fontSize: SIZE.large,
                  fontFamily: "bold",
                }}
              >
                New
              </Text>
              <Text
                style={{
                  color: colors.gray,
                  fontSize: SIZE.xSmall,
                  fontFamily: "regular",
                  marginTop: -10,
                }}
              >
                You have never seen this before
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("ViewAll", { screen: "new" })}
            >
              <Text
                style={{
                  fontSize: SIZE.xSmall,
                  fontFamily: "regular",
                }}
              >
                View all
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products
              .filter((itm) => itm.category === "men")
              .map((item) => (
                <HomeCard key={item.id} data={item} />
              ))}
          </ScrollView>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
