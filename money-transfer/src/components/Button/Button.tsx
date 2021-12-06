import React, { memo } from "react";
import { StyleSheet, View, TextStyle, Pressable, Text } from "react-native";
import { colors } from "../colors";

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    overflow: "hidden",
    borderRadius: 8,
    height: 50,
  },
  touchable: {
    alignSelf: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    minWidth: 50,
    height: 50,
    paddingHorizontal: 18,
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  buttonNoChildren: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.action,
    textAlign: "center",
  },
  leftIcon: {
    marginRight: 12,
  },
  leftIconNoChildren: {
    marginRight: 0,
  },
  typePrimaryButton: {
    backgroundColor: colors.action,
  },
  typePrimaryText: {
    color: colors.white,
  },
  typeDefaultButton: {
    backgroundColor: colors.actionLight,
  },
  typeDefaultText: {
    color: colors.actionDark,
  },
  typeWhiteButton: {
    backgroundColor: colors.white,
  },
  typeWhiteText: {
    color: colors.actionDark,
  },
  stretchContainer: {
    alignSelf: "stretch",
  },
  stretchTouchable: {
    alignSelf: "auto",
  },
  halfContainer: {
    width: "50%",
  },
  halfTouchable: {
    width: "100%",
  },
  halfButton: {
    width: "100%",
  },
});

export type TButtonType = "primary" | "default" | "white";

export type TButtonWidth = "relative" | "full" | "half";

export interface IButtonProps {
  type?: TButtonType;
  width?: TButtonWidth;
  children: string | string[];
  onPress?: () => any;
}

const Button = ({
  type = "default",
  width = "relative",
  children,
  onPress,
}: IButtonProps) => {
  let containerStyle;
  let touchableStyle;
  let buttonStyle;
  let textStyle;

  switch (type) {
    case "primary":
      buttonStyle = styles.typePrimaryButton;
      textStyle = styles.typePrimaryText;
      break;
    case "white":
      buttonStyle = styles.typeWhiteButton;
      textStyle = styles.typeWhiteText;
      break;
    default:
      buttonStyle = styles.typeDefaultButton;
      textStyle = styles.typeDefaultText;
      break;
  }

  if (width === "full") {
    containerStyle = styles.stretchContainer;
    touchableStyle = styles.stretchTouchable;
  } else if (width === "half") {
    containerStyle = styles.halfContainer;
    touchableStyle = styles.halfTouchable;
    buttonStyle = { ...buttonStyle, ...styles.halfButton };
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable style={[styles.touchable, touchableStyle]} onPress={onPress} testID='button'>
        <View
          style={[
            styles.button,
            !children && styles.buttonNoChildren,
            buttonStyle,
          ]}
        >
          <Text style={[styles.text, textStyle as TextStyle]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default memo(Button);
