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
import Checkbox from "expo-checkbox";
import { Image } from "expo-image";
import { SIZE, colors } from "../constants/constants";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";
import MyButton from "../components/MyButton";
import Toolbar from "../components/Toolbar";

const SingupScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [checkError, setCheckError] = useState("");
  const [disabled, setDisabled] = useState(false);

  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const signupHandler = async () => {
    if (!name || !email || !password) {
      ToastAndroid.show("Please fill all", ToastAndroid.SHORT);
      return;
    }
    if (name.length < 4) {
      setNameError("A name must be more than 3 characters");
    }
    if (email.length !== 0) {
      if (email.match(!isValidEmail)) {
        setEmailError("Enter a valid email address");
      }
    } else {
      setEmailError("Enter a valid email address");
    }

    if (password.length === 0) {
      setPasswordError("Password must be more than 6 characters");
    }
    if (password.length > 0 && password.length < 6) {
      setPasswordError("Password must be more than 6 characters");
    }

    if (disabled === false && !isChecked) {
      setCheckError("Please agree to terms");
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    if (name.length < 4) {
      setNameError("A name must be more than 3 characters");
    }
  }, [name.length]);

  useEffect(() => {
    if (email.length !== 0) {
      if (email.match(!isValidEmail)) {
        setEmailError("Enter a valid email address");
      }
    } else {
      setEmailError("Enter a valid email address");
    }
  }, [email.length]);

  useEffect(() => {
    if (password.length === 0) {
      setPasswordError("Password must be more than 6 characters");
    }
    if (password.length > 0 && password.length < 6) {
      setPasswordError("Password must be more than 6 characters");
    }
  }, [password.length]);

  return (
    <KeyboardAvoidingView
      style={{ backgroundColor: colors.faintgray, flex: 1, height: "100%" }}
    >
      <SafeAreaView
        style={{ backgroundColor: colors.faintgray, flex: 1, height: "100%" }}
      >
        <Toolbar />
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
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
            Sign Up
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
                  name.length < 4 && name.length > 0
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
                  Name
                </Text>
                <TextInput
                  style={{
                    fontFamily: "medium",
                    color: colors.black,
                  }}
                  placeholder="Enter a name"
                  onChangeText={(newTx) => setName(newTx)}
                />
              </View>
              {name.length < 4 && name.length > 0 && (
                <Feather name="x" size={24} color={colors.red} />
              )}
              {name.length > 3 && (
                <Ionicons
                  name="checkmark-outline"
                  size={24}
                  color={colors.green}
                />
              )}
            </View>
            {name.length < 4 && name.length > 0 && (
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
                  {nameError}
                </Text>
              </View>
            )}
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
                  style={{
                    fontFamily: "medium",
                    color: colors.black,
                  }}
                  secureTextEntry
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
          <View style={{ marginVertical: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? colors.red : undefined}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
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
                  }}
                >
                  I agree to Terms and Conditons
                </Text>
              </TouchableOpacity>
            </View>
            {!isChecked ? (
              <Text
                style={{
                  color: colors.red,
                  fontFamily: "regular",
                  fontSize: SIZE.xSmall,
                }}
              >
                {checkError}
              </Text>
            ) : (
              <Text
                style={{
                  color: colors.red,
                  fontFamily: "regular",
                  fontSize: SIZE.xSmall,
                }}
              ></Text>
            )}
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
                marginVertical: 10,
              }}
            >
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
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
                  marginVertical: 10,
                }}
              >
                Login
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
              onPress={signupHandler}
              disabled={disabled}
              title="SIGN UP"
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                color: colors.black,
                fontFamily: "medium",
                fontSize: SIZE.small,
                marginVertical: 30,
              }}
            >
              Or Sign up with social accout
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <TouchableOpacity style={{ marginHorizontal: 30 }}>
                <Image
                  style={{ width: 26, height: 26, resizeMode: "center" }}
                  source={require("../assets/gmail.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 30 }}>
                <FontAwesome name="facebook-square" size={24} color="#1877F2" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SingupScreen;
