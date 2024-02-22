import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SIZE, colors } from "../constants/constants";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";
import MyButton from "../components/MyButton";
import { useDispatch } from "react-redux";
import { login } from "../slices/userSlice";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const signinHandler = () => {
    if (!email || !password) {
      ToastAndroid.show("Please fill all", ToastAndroid.SHORT);
      return;
    }
    if (email.length !== 0) {
      if (email.match(!isValidEmail)) {
        setEmailError("Enter a valid email address");
        return;
      }
    } else {
      setEmailError("Enter a valid email address");
    }

    if (password.length === 0) {
      setPasswordError("Password must be more than 6 characters");
      return;
    }
    if (password.length > 0 && password.length < 6) {
      setPasswordError("Password must be more than 6 characters");
      return;
    }

    setDisabled(true);

    dispatch(login({ email: email }));
    sleep(2000).then(() => {
      setDisabled(false);
      ToastAndroid.show("Success!", ToastAndroid.SHORT);
      navigation.navigate("Home");
    });
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

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

  useEffect(() => {
    if (password.length === 0) {
      setPasswordError("Password must be more than 6 characters");
      return;
    }
    if (password.length > 0 && password.length < 6) {
      setPasswordError("Password must be more than 6 characters");
      return;
    }
  }, [password.length]);
  return (
    <KeyboardAvoidingView
      style={{ backgroundColor: colors.faintgray, flex: 1, height: "100%" }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
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
            Sign In
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
                  placeholder="Enter an Email"
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
                  <Text
                    style={{
                      color: colors.red,
                      fontFamily: "regular",
                      fontSize: SIZE.xSmall,
                    }}
                  >
                    {emailError}
                  </Text>
                </View>
              )
            ) : null}
          </View>
          <View>
            <View
              style={{
                marginTop: 10,
                backgroundColor: colors.white,
                paddingHorizontal: 14,
                paddingVertical: 8,
                borderRadius: 8,
                borderColor:
                  password.length > 0 && password.length < 6
                    ? colors.red
                    : colors.white,
                borderWidth: 0.8,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ color: colors.gray, fontFamily: "regular" }}>
                  Password
                </Text>
                <TextInput
                  secureTextEntry
                  style={{
                    fontFamily: "medium",
                    color: colors.black,
                  }}
                  placeholder="Enter a Password"
                  onChangeText={(newTx) => setPassword(newTx)}
                />
              </View>
              {password.length > 0 && password.length < 6 ? (
                <Feather name="x" size={24} color={colors.red} />
              ) : (
                password.length > 5 && (
                  <Ionicons
                    name="checkmark-outline"
                    size={24}
                    color={colors.green}
                  />
                )
              )}
            </View>
            {password.length > 0 && password.length < 6 ? (
              <View
                style={{
                  justifyContent: "center",
                  flex: 1,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: colors.red,
                    fontFamily: "regular",
                    fontSize: SIZE.xSmall,
                  }}
                >
                  {passwordError}
                </Text>
              </View>
            ) : null}
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              style={{
                color: colors.black,
                fontFamily: "medium",
                fontSize: SIZE.small,
                marginVertical: 30,
              }}
            >
              Forgot your password?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Forgotpassword")}
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Text
                style={{
                  color: colors.red,
                  fontFamily: "medium",
                  fontSize: SIZE.small,
                  marginVertical: 30,
                }}
              >
                Reset
              </Text>
              <FontAwesome
                name="long-arrow-right"
                size={20}
                color={colors.red}
              />
            </TouchableOpacity>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <MyButton
              onPress={signinHandler}
              disabled={disabled}
              title="SIGN IN"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
