import React from "react";
import { Text } from "react-native";

const CustomText = ({ children, style, numberOfLines }:any) => (
  <Text style={style} numberOfLines={numberOfLines}>
    {children}
  </Text>
);

export { CustomText };