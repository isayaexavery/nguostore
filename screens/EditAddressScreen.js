import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SIZE, colors } from "../constants/constants";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import InputCard from "../components/UserScreen/InputCard";
import { StatusBar } from "expo-status-bar";
import MyButton from "../components/MyButton";
import Toolbar from "../components/Toolbar";

const EditAddressScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("Chausiku");
  const [address, setAddress] = useState("Mabibo");
  const [city, setCity] = useState("Dar es Salaam");
  const [phone, setPhone] = useState("0717 3337777");

  const saveHandler = () => {};
  return (
    <SafeAreaView style={{ flex: 1, height: "100%" }}>
      <Toolbar title="Edit Shipping Address" />
      <ScrollView>
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
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
            Edit Shipping Address
          </Text>
          <View></View>
        </View> */}
        <View style={{ marginHorizontal: 10 }}>
          <InputCard label="Full Name" title={fullName} />
          <InputCard label="Address" title={address} />
          <InputCard label="City" title={city} />
          <InputCard label="Phone to Contact" title={phone} />
          <View style={{ marginVertical: 30 }}>
            <MyButton onPress={saveHandler} title="Save Address" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditAddressScreen;
