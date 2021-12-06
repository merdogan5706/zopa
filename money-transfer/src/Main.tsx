import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Banner } from "./components/Banner";
import { Button } from "./components/Button";
import { colors } from "./components/colors";
import List from "./components/List/List";
import { TextInput } from "./components/TextInput";
import { TTextInputType } from "./components/TextInput/TextInput";
import useForm, { IFieldStates } from "./hooks/useForm";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 48,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContainer: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  spacer: {
    marginVertical: 16,
  },
  sectionHeader: {
    backgroundColor: colors.brandLight,
    paddingTop: 24
  }
});
interface IInput {
  id: string
  label: string
  placeholder: string
  type?: TTextInputType
}

export const INPUTS: IInput[] = [
  { id: 'name', label: 'First name', placeholder: 'Please enter your first name', type: 'email' },
  { id: 'email', label: 'Email address', type: 'email', placeholder: 'Please enter your email address' },
  { id: 'amount', label: 'Amount', type: 'number', placeholder: 'Please enter amount' }
]


export default function Main() {
  const [itemsList, setItemsList] = useState<IFieldStates[]>([] as IFieldStates[])
  const [showBanner, setShowBanner] = useState<boolean>(false)
  const { fieldsState, fieldErrors, handleTextChange, isFormValid } = useForm(itemsList)

  const onSendButton = useCallback(() => {
    if (isFormValid) {
      if (!showBanner) {
        setShowBanner(true)
      }
      setItemsList([...itemsList, fieldsState])
    }
  }, [isFormValid, showBanner])

  useEffect(() => {
    let timer: null | NodeJS.Timeout = null
    if (showBanner) timer = setTimeout(() => setShowBanner(false), 3000);
    if (!showBanner && timer) clearTimeout(timer);
    return () => { if (timer) clearTimeout(timer); }
  }, [showBanner])


  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
      >
        {showBanner && <Banner type="success" size="regular">The money has been sent</Banner>}
        <>
          {INPUTS.map(({ id, label, placeholder, type }) => (<View key={id}>
            <Text>{label}</Text>
            <TextInput type={type} value={fieldsState[id]} placeholder={placeholder} onChangeText={(text) => handleTextChange(text, id)} error={Boolean(fieldErrors[id])} testID={label} />
            {fieldErrors[id] && <Text style={{ color: colors.alert }}>{fieldErrors[id]}</Text>}
            <View style={styles.spacer} />
          </View>
          ))}
          <Button width="full" type="primary" onPress={onSendButton}>
            Send
          </Button>
          <View style={styles.spacer} />
          <List itemsList={itemsList} />
        </>
      </ScrollView>
    </View>
  );
}
