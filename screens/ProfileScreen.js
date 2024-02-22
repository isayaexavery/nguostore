import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { SIZE, colors } from "../constants/constants";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import MyButton from "../components/MyButton";
import ShippingAddressCard from "../components/UserScreen/ShippingAddressCard";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/userSlice";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const handlLogout = () => {
    Alert.alert("Confirm Operation", "ARe you sure you want to log out?", [
      { text: "Cancel", onPress: () => {}, style: "cancel" },
      {
        text: "OK",
        onPress: () => {
          dispatch(logout());
          navigation.navigate("Home");

          ToastAndroid.show("Logged Out", ToastAndroid.SHORT);
        },
        style: "cancel",
      },
    ]);
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.faintgray,
        marginTop: 10,
        flex: 1,
        height: "100%",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: "100%", margin: 20 }}
      >
        <Text
          style={{
            color: colors.black,
            fontFamily: "bold",
            fontSize: SIZE.large,
          }}
        >
          My Profile
        </Text>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: "medium",
                  fontSize: SIZE.medium,
                }}
              >
                Chausiku Bahati
              </Text>
              <Text
                style={{
                  color: colors.gray,
                  fontFamily: "regular",
                  fontSize: SIZE.small,
                }}
              >
                {user?.user?.email}
              </Text>
            </View>
            <View>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color={colors.gray}
              />
            </View>
          </View>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.lightgray,
              marginVertical: 10,
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("MyOrders")}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: "medium",
                  fontSize: SIZE.medium,
                }}
              >
                My Oders
              </Text>
              <Text
                style={{
                  color: colors.gray,
                  fontFamily: "regular",
                  fontSize: SIZE.small,
                }}
              >
                Already have 12 orders
              </Text>
            </View>
            <View>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color={colors.gray}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.lightgray,
              marginVertical: 10,
            }}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: "medium",
                  fontSize: SIZE.medium,
                }}
              >
                Shipping ddresses
              </Text>
              <ShippingAddressCard />
            </View>
            {/* <View>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color={colors.gray}
              />
            </View> */}
          </View>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.lightgray,
              marginVertical: 10,
            }}
          />
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: "medium",
                  fontSize: SIZE.medium,
                }}
              >
                Payment Methods
              </Text>
              <Text
                style={{
                  color: colors.gray,
                  fontFamily: "regular",
                  fontSize: SIZE.small,
                }}
              >
                Visa **34
              </Text>
            </View>
            <View>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color={colors.gray}
              />
            </View>
          </View>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.lightgray,
              marginVertical: 10,
            }}
          />
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  color: colors.black,
                  fontFamily: "medium",
                  fontSize: SIZE.medium,
                }}
              >
                Settings
              </Text>
              <Text
                style={{
                  color: colors.gray,
                  fontFamily: "regular",
                  fontSize: SIZE.small,
                }}
              >
                Notifications, Password, ...
              </Text>
            </View>
            <View>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color={colors.gray}
              />
            </View>
          </View>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.lightgray,
              marginVertical: 10,
            }}
          />
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={handlLogout}>
              <Text
                style={{
                  color: colors.red,
                  fontFamily: "regular",
                  fontSize: SIZE.small,
                }}
              >
                Log out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginVertical: 30 }}>
          <MyButton
            onPress={() => navigation.navigate("AddProduct")}
            title="Add Product"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
