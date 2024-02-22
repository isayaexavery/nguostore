import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { colors, SIZE } from "../../constants/constants";

const OrderCard = () => {
  return (
    <View>
      <View
        style={{
          height: 164,
          width: "100%",
          backgroundColor: colors.white,
          borderRadius: 10,
          padding: 10,
          marginTop: 14,
          elevation: 3,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.text}>Oder No 123245</Text>
          <Text style={styles.faintText}>5-12-2019</Text>
        </View>
        {/* <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.faintText}>Tracking number:</Text>
                <Text style={styles.text}>123W232Q634</Text>
              </View> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.faintText}>Quantity:</Text>
            <Text style={styles.text}>3</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={styles.faintText}>Total Amount:</Text>
          <Text style={styles.text}>3,44,222Tsh</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              height: 40,
              width: 100,
              borderColor: colors.black,
              borderWidth: 0.5,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "regular",
                fontSize: SIZE.small - 2,
                color: colors.black,
              }}
            >
              Details
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              // height: 50,
              // borderColor: colors.black,
              // borderWidth: 0.5,
              // borderRadius: 25,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                fontFamily: "regular",
                fontSize: SIZE.small - 2,
                color: colors.green,
              }}
            >
              Delivered
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  text: { fontFamily: "medium", fontSize: SIZE.small },
  faintText: {
    fontFamily: "regular",
    fontSize: SIZE.small,
    color: colors.gray,
  },
});
