import {StatusBar, StyleSheet, Text, View, SectionList, TouchableOpacity, Button} from 'react-native';
import React from "react";
import {datasource} from "./Ex2_Data.js";

const Ex2 = ({navigation}) => {

const renderItem = ({item, index, section}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}
                          onPress={() => {navigation.navigate("Edit", {index:index, type:section.title, key:item.key});
                          }}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};

    return (
        <View>
            <StatusBar/>
            <Button title='Add Letter' onPress={() => {navigation.navigate("Add")}}/>
            <SectionList sections={datasource} renderItem={renderItem}
                         renderSectionHeader={({section:{title,bgcolor}})=>(
                             <Text style={[styles.headerText,{backgroundColor:bgcolor}]}>
                                 {title}
                             </Text>
                         )}/>
        </View>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    opacityStyle: {
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left'
    }
});

export default Ex2;