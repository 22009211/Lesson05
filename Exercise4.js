import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button, SectionList } from 'react-native';
import React from "react";

const datasource = [
    {data:[
            {name: 'It', author: 'Stephen King', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/It_%281986%29_front_cover%2C_first_edition.jpg/800px-It_%281986%29_front_cover%2C_first_edition.jpg'},
            {name: 'Dracula', author: 'Bram Stoker', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dracula_1st_ed_cover_reproduction.jpg/800px-Dracula_1st_ed_cover_reproduction.jpg'},
            {name: 'The Haunting of Hill House', author: ' Shirley Jackson', img:'https://assets.teenvogue.com/photos/57edd165b1d2161b7c70d075/master/w_1920%2Cc_limit/6.jpg'},
            {name: 'The Damnation Game', author: 'Clive Barker', img:'https://hachette.imgix.net/books/9780751505955.jpg?auto=compress,format'}
        ],
        title:"Horror", bgcolor:"red"
    },
    {data:[
            {name: 'The Fellowship of the Ring', author: 'J. R. R. Tolkien', img:'https://upload.wikimedia.org/wikipedia/en/8/8e/The_Fellowship_of_the_Ring_cover.gif'},
            {name: 'Harry Potter and the Sorcerer’s Stone', author: 'J. K. Rowling', img:'https://media1.popsugar-assets.com/files/thumbor/NLkbPmVVhV389_mnQ_UjrwRON2w=/fit-in/1584x2534/filters:format_auto():upscale()/2018/06/27/228/n/1922283/95e939cb14dd65be_img.jpeg'},
            {name: 'The Lightning Thief', author: 'Rick Riordan', img:'https://foreverbookish.com/wp-content/uploads/2014/02/lightning-thief1.jpg'},
            {name: 'The Lion, the Witch and the Wardrobe', author: 'C. S. Lewis', img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a0c39048873339.58a470c427a06.jpg'}
        ],
        title:"Fantasy", bgcolor:"green"
    },
    {data:[
            {name: 'Dune', author: 'Frank Herbert', img:'https://i.pinimg.com/originals/0a/b7/c6/0ab7c69f2a96ab1d034bf036b9e95e9b.jpg'},
            {name: 'Ender’s Game', author: 'Orson Scott Card', img:'https://smwrightauthor.com/wp-content/uploads/2014/07/enders-game.jpg'},
            {name: 'Hyperion', author: 'Dan Simmons', img:'https://i.pinimg.com/originals/bd/7c/d8/bd7cd856de98997f3889cff8e4aeac07.jpg'},
            {name: 'Do Androids Dream of Electric Sheep?', author: ' Philip K. Dick', img:'https://th.bing.com/th/id/R.f80907beb3e229000ac241104ca747c6?rik=aOgZRpRzH35c9Q&riu=http%3a%2f%2f2.bp.blogspot.com%2f-rV1QZ4zVoEA%2fTonAvjWE-qI%2fAAAAAAAAAIw%2fDD545vn92-g%2fs1600%2fdo-androids-dream-of-electric-sheep.jpg&ehk=we3RdoR9R0%2beS0AbKMlw5e1%2b4AuGPfV9nBL5pjbWp%2fQ%3d&risl=&pid=ImgRaw&r=0'}
        ],
        title:"Science Fiction", bgcolor:"blue"
    },
];

const renderItem = ({item}) => {
    let bookImg = item.img
    return (
        <TouchableOpacity style={{borderWidth: 1}}>
            <View style={styles.listItemStyle}>
                <Image source={{uri:bookImg}} style={styles.imageStyle}/>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Text style={styles.textStyle}>{item.author}</Text>
            </View>
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
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={renderSection}/>
        </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',

    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
    },
    listItemStyle: {
        alignItems: 'center'
    },
    imageStyle: {
        width: 300,
        height: 400,
        margin: 10,
        resizeMode: 'contain'
    },
});