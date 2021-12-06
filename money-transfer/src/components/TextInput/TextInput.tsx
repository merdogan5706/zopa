import React, { useState, memo } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
} from "react-native";
import { colors } from "../colors";

export type TTextInputFocusEvent =
  NativeSyntheticEvent<TextInputFocusEventData>;
export type TTextInputType = "email" | "number";

export interface ITextInputProps extends TextInputProps {
  error?: boolean;
  clearButton?: boolean;
  onFocus?: (e: TTextInputFocusEvent) => void;
  onBlur?: (e: TTextInputFocusEvent) => void;
  onChangeText?: (text: string) => void;
  type?: TTextInputType;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.grey,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginVertical: 4,
    minHeight: 50,
    position: "relative",
    flexDirection: "row",
  },
  containerFocused: {
    borderColor: colors.brand,
    backgroundColor: colors.white,
  },
  containerError: {
    borderColor: colors.alert,
    backgroundColor: colors.white,
  },
  textInput: {
    padding: 12,
    paddingTop: 10,
    flex: 1,
    color: colors.greyDark,
    fontSize: 16,
  },
});

const messages = {
  clearTextAccessibilityLabel: "clear text",
};

const TextInput = ({
  error,
  onFocus,
  onBlur,
  onChangeText,
  type,
  value,
  ...rest
}: ITextInputProps) => {
  const [focused, setFocused] = useState(false);
  let typeProps: TextInputProps = {};

  switch (type) {
    case "email":
      typeProps = {
        keyboardType: "email-address",
        autoCapitalize: "none",
        autoCorrect: false,
      };
      break;
    case "number":
      typeProps = {
        autoCapitalize: "none",
        autoCorrect: false,
        keyboardType: "numeric",
      };
      break;
  }
  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(true);
    onFocus && onFocus(e);
  };

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(false);
    onBlur && onBlur(e);
  };

  const handleOnChangeText = (text: string) => {
    onChangeText && onChangeText(text);
  };
  return (
    <View
      style={[
        styles.container,
        error && styles.containerError,
        focused && styles.containerFocused,
      ]}
    >
      <RNTextInput
        {...rest}
        {...typeProps}
        style={styles.textInput}
        placeholderTextColor={colors.grey}
        underlineColorAndroid="transparent"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChangeText={handleOnChangeText}
        value={value}
      />
    </View>
  );
};

export default memo(TextInput);
