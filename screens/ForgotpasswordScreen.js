import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SIZE, colors } from "../constants/constants";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";
import MyButton from "../components/MyButton";
import { Image } from "expo-image";

const ForgotpasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const forgotPassHandler = () => {
    if (email.length !== 0) {
      if (email.match(!isValidEmail)) {
        setEmailError("Enter a valid email address");
        return;
      }
    } else {
      setEmailError("Enter a valid email address");
    }
  };

  useEffect(() => {
    if (email.length !== 0) {
      if (email.match(!isValidEmail)) {
        setEmailError("Enter a valid email address xx");
        return;
      }
    } else {
      setEmailError("Enter a valid email address");
    }
  }, [email.length]);
  return (
    <KeyboardAvoidingView
      style={{ backgroundColor: colors.faintgray, flex: 1, height: "100%" }}
    >
      <SafeAreaView
        style={{ backgroundColor: colors.faintgray, flex: 1, height: "100%" }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 40,
            marginHorizontal: 10,
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
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: "100%", flex: 1, marginHorizontal: 20 }}
        >
          <Text
            style={{
              color: colors.black,
              fontFamily: "bold",
              fontSize: SIZE.large,
              marginVertical: 30,
            }}
          >
            Forgot password
          </Text>

          <Text
            style={{
              color: colors.black,
              fontFamily: "regular",
              fontSize: SIZE.small,
              marginTop: 30,
            }}
          >
            Please, enter your email address. You will receive a link to create
            a new password via email
          </Text>
          <View>
            <View
              style={{
                marginTop: 10,
                backgroundColor: colors.white,
                paddingHorizontal: 14,
                paddingVertical: 8,
                borderRadius: 8,
                borderColor:
                  email.length > 3
                    ? email.match(isValidEmail)
                      ? colors.white
                      : colors.red
                    : colors.white,
                borderWidth: 0.8,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ color: colors.gray, fontFamily: "regular" }}>
                  Email
                </Text>
                <TextInput
                  style={{
                    fontFamily: "medium",
                    color: colors.black,
                  }}
                  placeholder="Enter a Email"
                  onChangeText={(newTx) => setEmail(newTx)}
                />
              </View>
              {email.length > 3 ? (
                email.match(isValidEmail) ? (
                  <Ionicons
                    name="checkmark-outline"
                    size={24}
                    color={colors.green}
                  />
                ) : (
                  <Feather name="x" size={24} color={colors.red} />
                )
              ) : null}
            </View>
            {email.length > 3 ? (
              email.match(isValidEmail) ? null : (
                <View
                  style={{
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: colors.red, fontFamily: "regular" }}>
                    {emailError}
                  </Text>
                </View>
              )
            ) : null}
          </View>
          <View style={{ paddingVertical: 10, marginTop: 20 }}>
            <MyButton onPress={forgotPassHandler} title="SEND" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ForgotpasswordScreen;
