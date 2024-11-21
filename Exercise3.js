import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableOpacity, View, Button, SectionList} from 'react-native';
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome6';

const datasource = [
    {data:[
            {name: 'Pikachu', cardnumber: '25'},
            {name: 'Voltorb', cardnumber: '100'},
        ],
        title:"Electric", icon:"bolt", txtcolor:"goldenrod", bgcolor:"yellow"
    },
    {data:[
            {name: 'Squirtle', cardnumber: '7'},
            {name: 'Psyduck', cardnumber: '54'},
        ],
        title:"Water", icon:"droplet", txtcolor:"slateblue", bgcolor:"skyblue"
    },
    {data:[
            {name: 'Charizard', cardnumber: '6'},
            {name: 'Ninetales', cardnumber: '38'},
        ],
        title:"Fire", icon:"fire", txtcolor:"orangered", bgcolor:"lightsalmon"
    },
];

const renderItem = ({item}) => {
    let cardimg = 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' + item.cardnumber + '-2x.png'
    return (
        <TouchableOpacity style={{borderWidth: 1}}>
            <View style={styles.listItemStyle}>
                <Text style={styles.textStyle}>{item.name}</Text>
                <View style={{alignItems:"flex-end"}}>
                    <Image source={{uri:cardimg}} style={styles.imageStyle}/>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default function App() {
    return (
        <View style={{flex: 1}}>
            <StatusBar hidden={true}/>
            <View style={{borderWidth: 1}}>
                <View style={{padding: 20}}>
                    <Button title='Add Pokemon'/>
                </View>
            </View>
            <SectionList contentContainerStyle={{padding: 20}}
                         sections={datasource}
                         renderItem={renderItem}
                         renderSectionHeader={({section:{icon,title,bgcolor,txtcolor}})=>(
                             <Icon style={[styles.iconTxtStyle, {backgroundColor: bgcolor}]} name={icon} size={20} color={txtcolor}>
                                 <Text>{title}</Text>
                             </Icon>
                         )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        margin: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold'
    },
    iconTxtStyle: {
        textAlign: 'center',
        height: 30,
        textAlignVertical: 'center',
        borderWidth: 1
    },
    imageStyle: {
        width: 200,
        height: 300,
        margin: 10,
        resizeMode: 'contain'
    },
    listItemStyle: {
        flexDirection: 'row',
        backgroundColor: 'lavender'
    }
});