
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  SectionList,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

export default class SignOut extends Component {
    constructor(props)
    {
        props.navigation.navigate('Login')
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
    render(){
        return(
            <TouchableOpacity>
            <View>
                <Text>Signing Out</Text>
            </View>
            </TouchableOpacity>
        )
    }
}
