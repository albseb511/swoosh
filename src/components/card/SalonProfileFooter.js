import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  DatePickerAndroid,
  Alert
} from 'react-native';


export default class SalonProfileFooter extends Component {
    static propTypes = {
     left: PropTypes.string,
     right:PropTypes.string,
    
   }

   static defaultProps = {
    left:'CALL',
    right:'BOOK',

  }
  booker(){
     Alert.alert('Booker')
     return ('5')

}

  async openAndroidDatePicker() {
    Alert.alert('Select Date')
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date()
      });
      console.log('End of Android Date Picker')
      
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
    Alert.alert('booker')
    var result =  booker()
    Alert.alert('result')
  }


  constructor(props){
      super(props)
      this.state = {
          date:[],
          dateOptions:[<FlatList
            data={[{key: 'a'}, {key: 'b'}]}
            renderItem={({item}) => <Text>{item.key}</Text>}
          />,
                        <Text>There</Text>,
                        'cancel']
      }
  }

   render(){
     return(

            <View style={salonFlatList.footer}>
            <TouchableOpacity onPress={this._onPressButton}
                                style={[salonFlatList.btn,salonFlatList.btnFooter,
                                    ,salonFlatList.btnQ]}>
                            <Text style={salonFlatList.btnText}>{this.props.left}</Text>
                        </TouchableOpacity>   
            <TouchableOpacity onPress={this.openAndroidDatePicker}
                            style={[salonFlatList.btn,salonFlatList.btnFooter]}>
                        <Text style={salonFlatList.btnText}>{this.props.right}</Text>
            </TouchableOpacity>     
                       
            </View>

     )
   }
}



const salonFlatList = StyleSheet.create({
    container:{
        height:60,
        width: Dimensions.get('window').width,
        justifyContent:'space-evenly',
        alignContent:'center',
        alignItems:'center',
        paddingLeft:10,
        //flex:1,
        flexDirection:'row',
        borderBottomWidth:0.5,
        borderColor:'gray'
        
        
    },
    details:{
        flex:1,
        paddingLeft:35,
        
    },
    btn:{
        height:50,
        marginLeft:-20,
        backgroundColor:'red',
        borderRadius:5,
        flex:0.5,
        width:60,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        

    },
    btnText:{
        color:'white',
        textAlign:'center',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    footer:{
        flexDirection:'row',
        width:Dimensions.get('window').width,
        alignItems:'center',
        paddingLeft:0,
    },

    btnFooter:{
        marginLeft:40,
        marginRight:40,
        marginTop:10,
        marginBottom:10

    },

    btnQ:{
        backgroundColor:'darkgray',
        color:'black'
    }



})