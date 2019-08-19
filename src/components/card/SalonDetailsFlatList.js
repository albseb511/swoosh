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

export default class SalonDetailsFlatList extends Component {
    static propTypes = {
     Array: PropTypes.array,
    
   }

   static defaultProps = {
    Array: [{key: 'a', serviceName:'HAIRCUT',price:'300'},
            {key: 'b', serviceName:'HAIR SPA',price:'500'},
            {key: 'c', serviceName:'HAIR COLOR',price:'1100'},
            {key: 'd', serviceName:'SHAVING',price:'100'}],

  }

   render(){
     return(
         <View>
            <FlatList
            data={this.props.Array}
            renderItem={({item}) => 
                <View style={salonFlatList.container}>
                    <View style={salonFlatList.details}>
                        <Text>
                            {item.serviceName}
                        </Text>
                    </View>
                    <View style={salonFlatList.details}>
                        <Text>
                            {item.price}
                        </Text>
                    </View>
                    <View style={salonFlatList.details}>
                        <TouchableOpacity onPress={this._onPressButton}
                                style={salonFlatList.btn}>
                            <Text style={salonFlatList.btnText}>SELECT</Text>
                        </TouchableOpacity>  
                    </View>
                    
                </View>}
            />
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


})