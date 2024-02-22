import { View, Text, TextInput } from "react-native";
import React from "react";
import { colors } from "../../constants/constants";

const InputCard = ({
  label,
  title,
  error,
  keyboard,
  textArea,
  onChangeText,
}) => {
  return (
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
            {label}
          </Text>
          <TextInput
            style={{
              fontFamily: "medium",
              color: colors.black,
            }}
            placeholder={title}
            keyboardType={keyboard}
            onChangeText={onChangeText}
          />
        </View>
        {/* {error ? (
          <Feather name="x" size={24} color={colors.red} />
        ) : (
          <Ionicons name="checkmark-outline" size={24} color={colors.green} />
        )} */}
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
  );
};

export default InputCard;
