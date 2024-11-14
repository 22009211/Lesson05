import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React from "react";

const datasource = [
    {key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}, {key: 'h'},
    {key: 'i'}, {key: 'j'}, {key: 'k'}, {key: 'l'}, {key: 'm'}, {key: 'n'}, {key: 'o'}, {key: 'p'},
    {key: 'q'}, {key: 'r'}, {key: 's'}, {key: 't'}, {key: 'u'}, {key: 'v'},{key: 'w'}, {key: 'x'},
    {key: 'y'}, {key: 'z'},
];

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};

export default function App() {
    return (
        <View>
            <FlatList data={datasource} renderItem={renderItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left'
    },
});