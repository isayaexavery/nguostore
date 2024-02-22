import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { SIZE, colors } from "../constants/constants";
import { Image } from "expo-image";
import InputCard from "../components/UserScreen/InputCard";
import MyButton from "../components/MyButton";
import { useNavigation } from "@react-navigation/native";
import Toolbar from "../components/Toolbar";

const AddProductScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [descriptions, setDescriptions] = useState();
  const [image, setImage] = useState();
  const [error, setError] = useState();
  const [disabled, setDisabled] = useState(false);

  //Method for selecting the image from device gallery
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      // console.log(result);
      setImage(result.assets[0].uri);
    }
  };

  const sendHandler = () => {
    if (!title || !price || !descriptions) {
      ToastAndroid.show("Please fill all", ToastAndroid.SHORT);
      return;
    }

    setDisabled(true);
    sleep(2000).then(() => {
      setDisabled(false);
      ToastAndroid.show("Success!", ToastAndroid.SHORT);
    });
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <SafeAreaView style={{ flex: 1, height: "100%" }}>
      <Toolbar title="Add Product" />
      <ScrollView>
        <View
          style={{
            flex: 2,
            justifyContent: "flex-start",
            alignItems: "center",
            display: "flex",
            width: "100%",
            flexDirecion: "row",
            padding: 5,
          }}
        >
          <View style={styles.imageContainer}>
            {image ? (
              <TouchableOpacity style={styles.imageHolder} onPress={pickImage}>
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200 }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.imageHolder} onPress={pickImage}>
                <AntDesign name="pluscircle" size={50} color={colors.gray} />
              </TouchableOpacity>
            )}
          </View>

          <View></View>
        </View>

        <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
          <InputCard onChangeText={(newTx) => setTitle(newTx)} label="Title" />

          <InputCard
            onChangeText={(newTx) => setPrice(newTx)}
            label="Price"
            keyboard="numeric"
          />
          {/* <InputCard label="Quantity" keyboard="numeric" /> */}

          <View>
            <View
              style={{
                marginTop: 10,
                backgroundColor: colors.white,
                paddingHorizontal: 14,
                paddingVertical: 8,
                borderRadius: 8,
                borderColor: error ? colors.red : colors.white,
                borderWidth: 0.8,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                elevation: 3,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ color: colors.gray, fontFamily: "regular" }}>
                  Descriptions
                </Text>
                <TextInput
                  multiline
                  style={{
                    fontFamily: "medium",
                    color: colors.black,
                    height: 80,
                  }}
                  onChangeText={(newTx) => setDescriptions(newTx)}
                />
              </View>
            </View>
            {error && (
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
                  {error}
                </Text>
              </View>
            )}
          </View>
          <View style={{ marginVertical: 20 }}>
            <MyButton onPress={sendHandler} title="Send" disabled={disabled} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddProductScreen;
const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: 250,
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 2,
  },
  imageHolder: {
    height: 200,
    width: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
    elevation: 2,
  },
});
