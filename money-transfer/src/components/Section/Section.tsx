import React, { FC } from "react";
import { StyleSheet, View, Text, ViewStyle } from "react-native";
import { colors } from "../colors";

export interface ISectionProps {
  header?: string;
  customStyle?: ViewStyle
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 0,
  },
  header: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: colors.greyDark,
  },
  divider: {
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: StyleSheet.hairlineWidth,
  },
});

export const Section: FC<ISectionProps> = ({ children, header, customStyle }) => (
  <View style={[styles.container, customStyle]}>
    {header ? <Text style={styles.header}>{header}</Text> : <></>}
    <View style={styles.divider} />
    <View>{children}</View>
    <View style={styles.divider} />
  </View>
);

export default Section;
