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
import { FontAwesome5, Entypo } from "@expo/vector-icons";

const MyBagCard = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [quantity, setQuantity] = useState(2);
  const [avaiableQuantity, setAvaiableQuantity] = useState(10);

  const handleIncreaseButton = (quantity, index) => {
    if (avaiableQuantity > quantity) {
      setQuantity(quantity + 1);
    }
  };

  //method to decrease the product quantity
  const handleDecreaseButton = (quantity) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View style={{ marginHorizontal: 20 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          backgroundColor: colors.white,
          borderRadius: 10,
        }}
      >
        <Image
          style={{
            width: 120,
            height: 130,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
          source={data.image}
        />
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          {showPopup && (
            <View
              style={{
                height: 100,
                backgroundColor: colors.white,
                justifyContent: "space-between",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10,
                elevation: 6,
                position: "absolute",
                zIndex: 10,
                marginTop: -20,
              }}
            >
              <Text style={{ fontSize: SIZE.small, fontFamily: "regular" }}>
                Add to favorites
              </Text>
              <View style={{ borderWidth: 1, borderColor: colors.faintgray }} />
              <Text style={{ fontSize: SIZE.small, fontFamily: "regular" }}>
                Delete from the list
              </Text>

              <TouchableOpacity
                onPress={() => setShowPopup(false)}
                style={{
                  width: 28,
                  height: 28,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  borderRadius: 14,
                  right: 0,
                  top: -10,
                  elevation: 6,
                  backgroundColor: colors.white,
                }}
              >
                <Text
                  style={{
                    color: colors.red,
                    fontSize: SIZE.small,
                    fontFamily: "bold",
                  }}
                >
                  X
                </Text>
              </TouchableOpacity>
            </View>
          )}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              numberOfLines={2}
              style={{ fontFamily: "medium", fontSize: SIZE.small }}
            >
              {data.title}
            </Text>
            <TouchableOpacity onPress={() => setShowPopup(true)}>
              <Entypo
                name="dots-three-vertical"
                size={22}
                color={colors.lightgray}
              />
            </TouchableOpacity>
          </View>
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              position: "absolute",
              bottom: 10,
              width: "100%",
              gap: 6,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  handleDecreaseButton(quantity);
                }}
                style={{
                  backgroundColor: colors.white,
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  elevation: 6,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome5 name="minus" size={20} color={colors.gray} />
              </TouchableOpacity>
              <View style={{ marginHorizontal: 10 }}>
                <Text style={{ fontFamily: "medium", fontSize: SIZE.small }}>
                  {data.quantity}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  handleIncreaseButton(quantity);
                }}
                style={{
                  backgroundColor: colors.white,
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  elevation: 6,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo name="plus" size={20} color={colors.gray} />
              </TouchableOpacity>
            </View>
            <View style={{}}>
              <Text
                style={{
                  color: colors.black,
                  fontSize: SIZE.small,
                }}
              >
                {data.price * quantity} Tsh
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyBagCard;
