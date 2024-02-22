import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { colors } from "../constants/constants";

const MyButton = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        height: 46,
        backgroundColor: disabled ? colors.gray : colors.red,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 23,
        elevation: 4,
      }}
    >
      {disabled ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <Text style={{ color: colors.white, fontFamily: "medium" }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default MyButton;
