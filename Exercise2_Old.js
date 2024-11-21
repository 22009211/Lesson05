import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, SectionList, TouchableOpacity} from 'react-native';
import React from "react";

const datasource = [
    {data:[
            {key: 'a'}, {key: 'e'}, {key: 'i'}, {key: 'o'}
        ],
        title:"Vowels",
        bgcolor:"skyblue"
    },
    {data:[
            {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'f'}, {key: 'g'},
            {key: 'h'}, {key: 'j'}, {key: 'k'}, {key: 'l'}, {key: 'm'},
            {key: 'n'}, {key: 'p'}, {key: 'q'}, {key: 'r'}, {key: 's'}
        ],
        title:"Consonants",
        bgcolor:"khaki"}
];

const renderItem = ({item, index, section}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};

const renderSection = ({section}) => {
    return (
        <Text style={[styles.headerText, {backgroundColor:section.bgcolor} ]}>
            {section.title}
        </Text>
    );
};

export default function App() {
    return (
        <View>
            <StatusBar hidden={true}/>
            <SectionList sections={datasource}
                         renderItem={renderItem}
                         renderSectionHeader={renderSection}/>
        </View>
    );
}

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