
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


import UserInput from '../components/login/userinput';

export default class Login extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            password:'',
            showPass: true,
            press: false,
          };
          this.showPass = this.showPass.bind(this);
    }

    showPass() {
        this.state.press === false
          ? this.setState({showPass: false, press: true})
          : this.setState({showPass: true, press: false});
      }

      
    render(){
        return(
            <View style={LogScreen.container}>
            <UserInput
                placeholder="Username"
                autoCapitalize={'none'}
                returnKeyType={'done'}
                autoCorrect={false}
                />
            <UserInput
                placeholder="Password"
                autoCapitalize={'none'}
                returnKeyType={'done'}
                autoCorrect={false}
                />    

        <TouchableOpacity style={LogScreen.btnSubmit}  onPress={()=>this.props.navigation.navigate('Profile')}>
            <Text style={LogScreen.btnText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={LogScreen.btnSubmit}  onPress={()=>{}}>
            <Text style={LogScreen.btnText}>SIGNUP</Text>
        </TouchableOpacity>

            </View>
        )
    }
}

const LogScreen = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    btnSubmit:{
        backgroundColor:'#e91e63',
        width: 180,
        height: 60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        marginBottom:15
    },
    btnText:{
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    }
})