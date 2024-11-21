import React,{useState} from "react";
import {datasource} from "./Ex2_Data.js";
import {Button, View, Text, TextInput} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Add = ({navigation}) => {
    const[letter, setLetter] = useState("");
    const[type, setType] = useState("Vowels");

    return(
        <View>
            <Text>Letter:</Text>
            <TextInput
                placeholder="Enter a letter"
                maxLength={1} style={{borderWith: 1}}
                onChangeText={(text) => setLetter(text)}/>
            <RNPickerSelect
                itemKey={type}
                onValueChange={(value) => setType(value)}
                items={[
                    {label:"Vowels", value:"Vowels", key:"Vowels"},
                    {label:"Consonants", value:"Consonants", key:"Consonants"}
                ]}
            />

            <Button title="Submit"
                    onPress={() => {
                        let item = {key:letter};
                        let indexnum = 1;
                        if (type == "Vowels") {
                            indexnum = 0;
                        }
                        datasource[indexnum].data.push(item);
                        navigation.navigate("Ex2");
                    }
                    }
            />
        </View>
    );
}

export default Add;