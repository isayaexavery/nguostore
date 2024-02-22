import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { SIZE, colors } from "../constants/constants";
import { Ionicons, Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import RatingStarCard from "../components/RatingStarCard";
import MyButton from "../components/MyButton";
import { products } from "../constants/products";
import HomeCard from "../components/HomeCard";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../slices/cartSlice";
import Toolbar from "../components/Toolbar";
const sizes = ["XS", "S", "M", "L", "XL"];

const ProductScreen = () => {
  const { params: data } = useRoute();
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [sizeSelected, setSizeSelected] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const existingCart = cart?.cart?.find((itm) => itm.id === data.data.id);

  const addToCart = () => {
    if (!existingCart) {
      dispatch(cartActions.addToCart(data.data));
      ToastAndroid.show("Added", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Already Added", ToastAndroid.SHORT);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: colors.white, height: "100%" }}>
      {/* <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 30,
          backgroundColor: colors.white,
          elevation: 2,
          paddingVertical: 10,
        }}
      >
        <Ionicons name="chevron-back-outline" size={28} color="black" />
        <Text
          style={{
            fontSize: SIZE.small,
            fontFamily: "medium",
            color: colors.black,
          }}
        ></Text>
        <Entypo
          style={{ marginRight: 10 }}
          name="share"
          size={28}
          color="black"
        />
      </TouchableOpacity> */}
      <Toolbar />
      <ScrollView style={{ height: "100%" }}>
        <Animated.View
          entering={FadeInDown.delay(50).duration(100).springify()}
        >
          <Image
            style={{ width: "100%", height: 340, resizeMode: "center" }}
            source={data.data.image}
          />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(100).duration(100).springify()}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => setIsVisible(true)}
            style={{
              flexDirection: "row",
              borderRadius: 6,
              borderWidth: 1,
              borderColor: colors.red,
              paddingHorizontal: 10,
              paddingVertical: 8,
              flex: 1,
              marginHorizontal: 10,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "regular" }}>Size</Text>
            <AntDesign name="down" size={18} color={colors.black} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              borderRadius: 6,
              borderWidth: 1,
              borderColor: colors.red,
              paddingHorizontal: 10,
              paddingVertical: 8,
              flex: 1,
              marginHorizontal: 10,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "regular" }}>Black</Text>
            <AntDesign name="down" size={18} color={colors.black} />
          </View>

          <TouchableOpacity
            onPress={() => setLiked(!liked)}
            style={{
              height: 36,
              width: 36,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.white,
              elevation: 2,
              borderRadius: 18,
              marginHorizontal: 10,
            }}
          >
            <AntDesign
              name={liked ? "heart" : "hearto"}
              size={18}
              color={liked ? colors.red : colors.gray}
            />
          </TouchableOpacity>
        </Animated.View>
        <View style={{ marginHorizontal: 20 }}>
          <Animated.View
            entering={FadeInDown.delay(200).duration(100).springify()}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ flex: 1, fontFamily: "medium", fontSize: SIZE.medium }}
            >
              {data.data.title}
            </Text>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(100).springify()}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <RatingStarCard size={18} num={data.data.rating.rate} />
            <Text style={{ fontFamily: "medium", fontSize: SIZE.medium }}>
              {data.data.price.toLocaleString()} Tsh
            </Text>
          </Animated.View>

          <Animated.Text
            entering={FadeInDown.delay(300).duration(100).springify()}
            style={{ fontFamily: "medium", fontSize: SIZE.small }}
          >
            {data.data.description}
          </Animated.Text>
        </View>

        <View style={{ marginTop: 20, marginLeft: 10 }}>
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
                  color: colors.gray,
                  fontSize: SIZE.small,
                  fontFamily: "medium",
                }}
              >
                You can also like this
              </Text>
            </View>

            <Text
              style={{
                fontSize: SIZE.xSmall,
                fontFamily: "regular",
              }}
            >
              View all
            </Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products
              .filter((itm) => itm.category === "men")
              .map((item) => (
                <HomeCard key={item.id} data={item} />
              ))}
          </ScrollView>
        </View>

        <Modal animationType="slide" transparent={true} visible={isVisible}>
          <TouchableWithoutFeedback onPressIn={() => setIsVisible(false)}>
            <View
              style={{
                height: "50%",
                width: "100%",
                backgroundColor: colors.white,
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
                position: "absolute",
                bottom: 0,
                elevation: 10,
              }}
            >
              <View
                style={{
                  height: "16%",
                  borderTopRightRadius: 30,
                  borderTopLeftRadius: 30,
                  paddingHorizontal: 20,
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => setIsVisible(false)}
                  style={{
                    width: 80,
                    height: 6,
                    backgroundColor: colors.gray,
                    marginVertical: 10,
                    borderRadius: 3,
                  }}
                ></TouchableOpacity>
                <Text style={{ fontFamily: "medium", fontSize: SIZE.small }}>
                  Select Size
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",

                  flexWrap: "wrap",
                }}
              >
                {sizes.map((itm, index) => (
                  <TouchableOpacity
                    onPress={() => setSizeSelected(itm)}
                    key={index}
                    style={{
                      height: 40,
                      width: 100,
                      marginHorizontal: 8,
                      marginVertical: 8,
                      backgroundColor:
                        sizeSelected === itm ? colors.red : colors.white,
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",

                      borderWidth: 1,
                      borderColor: colors.lightgray,
                    }}
                  >
                    <Text
                      style={{
                        color:
                          sizeSelected === itm ? colors.white : colors.black,
                      }}
                    >
                      {itm}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View
                style={{
                  position: "absolute",
                  bottom: 10,
                  width: "100%",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}
              >
                <View
                  style={{
                    width: "100%",
                  }}
                >
                  <MyButton title="ADD TO CART" />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
      <View style={{ marginHorizontal: 20, paddingVertical: 10 }}>
        <MyButton onPress={addToCart} title="ADD TO CART" />
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
