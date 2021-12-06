import React, { memo, useCallback } from "react";
import { FlatList, StyleSheet } from "react-native";
import LineItem from "../LineItem/LineItem";
import { Section } from "../Section";
import { IFieldStates } from "../../hooks/useForm";
import { colors } from "../colors";

const styles = StyleSheet.create({

    sectionHeader: {
        backgroundColor: colors.greyLight,
        paddingTop: 24
    }
});

const List = ({itemsList}:{itemsList: IFieldStates[]}) => {

    const keyExtractor = useCallback((item: IFieldStates) => item.name, [])
    const renderItem = useCallback(({ item, index }: { item: IFieldStates, index: number }) => {
        return <LineItem
            key={index}
            title={item.name}
            subtitle={item.email}
            value={`£${parseFloat(item.amount.toString()).toFixed(2)}`}
        />
    }, [])
    
    if (!!itemsList.length)
        return (<FlatList
            ListHeaderComponent={<Section header="Transactions" customStyle={styles.sectionHeader}></Section>}
            data={itemsList}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />)
        return null
}

export default memo(List)

