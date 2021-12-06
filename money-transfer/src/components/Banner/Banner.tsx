import React, { FC, memo, useState } from "react";
import { StyleSheet, View, ViewStyle, TextStyle, Text } from "react-native";
import { colors } from "../colors";

export type TBannerType = "error" | "success";
export type TBannerSize = "small" | "regular";

export interface IBannerProps {
  type?: TBannerType;
  size?: TBannerSize;
  title?: string;
  children: string | string[];
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconContainer: {
    marginLeft: -3,
    marginRight: -3,
    marginTop: -1,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    paddingBottom: 2,
  },
  dismissContainer: {
    marginTop: 3,
    paddingLeft: 4,
  },
  footer: {
    flexDirection: "row",
    paddingTop: 2,
    marginLeft: -2,
  },
  footerText: {
    marginRight: 16,
    textDecorationLine: "underline",
  },
  typeSuccessContainer: {
    backgroundColor: colors.successLight,
  },
  typeErrorContainer: {
    backgroundColor: colors.alertLight,
  },
  typeSuccessText: {
    color: colors.successDark,
  },
  typeErrorText: {
    color: colors.alertDark,
  },
  sizeRegularContainer: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  sizeSmallContainer: {
    borderRadius: 4,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
  },
  sizeRegularText: {
    fontSize: 16,
  },
  sizeSmallText: {
    fontSize: 14,
  },
});

const Banner: FC<IBannerProps> = ({
  type = "info",
  size = "regular",
  children,
}) => {
  let typeContainerStyle: ViewStyle;
  let typeTextStyle: TextStyle;
  let sizeContainerStyle: ViewStyle;
  let sizeTextStyle: TextStyle;

  switch (type) {
    case "success":
      typeContainerStyle = styles.typeSuccessContainer;
      typeTextStyle = styles.typeSuccessText;
      break;
    case "error":
    default:
      typeContainerStyle = styles.typeErrorContainer;
      typeTextStyle = styles.typeErrorText;
      break;
  }

  switch (size) {
    case "small":
      sizeContainerStyle = styles.sizeSmallContainer;
      sizeTextStyle = styles.sizeSmallText;
      break;
    case "regular":
    default:
      sizeContainerStyle = styles.sizeRegularContainer;
      sizeTextStyle = styles.sizeRegularText;
      break;
  }

  return (
    <View style={[typeContainerStyle, sizeContainerStyle]} testID='banner'>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={[sizeTextStyle, typeTextStyle]}>{children}</Text>
        </View>
      </View>
    </View>
  );
};

export default memo(Banner);
