import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { colors } from "../colors";

export type TLineItemProps = {
  /** shows a divider at the bottom */
  divider?: boolean;
  /** title text on the left */
  title: string;
  /** subtitle text under the title */
  subtitle?: string;
  /** value text on the right */
  value?: string;
  /** sub value text on the right */
  subValue?: string;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 17,
    position: "relative",
    paddingLeft: 16,
    paddingRight: 16,
    ...Platform.select({
      ios: {
        paddingTop: 17,
        paddingHorizontal: 0,
      },
      android: {
        marginHorizontal: 0,
      },
    }),
    backgroundColor: colors.white,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: colors.greyDarkest,
    fontSize: 16,
  },
  subtitle: {
    color: colors.greyDark,
    fontSize: 14,
    marginTop: 2,
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "center",
    flexWrap: "wrap",
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingLeft: 16,
  },
  divider: {
    flex: 1,
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: StyleSheet.hairlineWidth,
    marginLeft: 16,
  },
  valueContainer: {
    alignItems: "flex-end",
    alignSelf: "flex-start",
  },
  value: {
    fontSize: 16,
    color: colors.greyDarkest,
  },
  subValue: {
    marginTop: 2,
    fontSize: 14,
    color: colors.greyDark,
  },
});

const LineItem = ({
  title,
  subtitle = undefined,
  value = undefined,
  subValue = undefined,
  divider = true,
}: TLineItemProps) => (
  <>
    <View style={styles.content} testID='lineItem'>
      <View style={styles.leftContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : <></>}
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>{value}</Text>
          {subValue ? <Text style={styles.subValue}>{subValue}</Text> : <></>}
        </View>
      </View>
    </View>
    {divider && <View style={styles.divider}></View>}
  </>
);

export default LineItem;
