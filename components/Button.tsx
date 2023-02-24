import React, { useState } from "react";
import { TouchableHighlight, View,StyleSheet } from "react-native";
import { FONTS_SIZE, FONTWEIGHT, THEME } from "../constants/Common";
import { CustomText } from "./CustomText";

export const CustomButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
      setIsHovered(!isHovered);
    };
  
    return (
        <TouchableHighlight
        underlayColor="transparent"
        onShowUnderlay={handleHover}
        onHideUnderlay={handleHover}
        onPress={() => alert("Yala IT Solution")}
      >
        <View style={buttonStyle.container}>
          <CustomText style={buttonStyle.title}>Yala IT Solution</CustomText>
          {isHovered && <CustomText style={buttonStyle.subTitle}>Hello</CustomText>}
        </View>
      </TouchableHighlight>
    );
  };


 const buttonStyle = StyleSheet.create({
  container: {
    backgroundColor: THEME.primary_color,
  },
  subTitle: {
    fontSize: FONTS_SIZE.min,
    fontWeight: FONTWEIGHT.REGULAR,
    color: THEME.defaultText,
    textAlign: "center",
  },
  title: {
    fontSize: FONTS_SIZE.mid,
    fontWeight: FONTWEIGHT.BOLD,
    color: THEME.text.normal,
  },
  wrapper: {
    flex: 1,
    backgroundColor: THEME.primary_color,
    alignItems: "center",
    justifyContent: "center",
  },
});