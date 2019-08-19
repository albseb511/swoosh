import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
  Text,
  View,
  Platform,
  StyleSheet,
  Picker
} from 'react-native';

export default class HeaderBarPage extends Component {
    static propTypes = {
     title: PropTypes.string,
      rightMenu: PropTypes.string,
   }

   static defaultProps = {
    title: 'Location',
    rightMenu: '',

  }
  constructor(props){
      super(props)
        this.state = {
            area: '',
            index:''
        }
  }

   render(){
     return(
         <View>
            <View style={header.row}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>{this.props.title}</Text>
                <Picker style={header.pickerStyle}
                    selectedValue={this.state.area}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({area: itemValue,index: itemIndex})
                    }>
                    <Picker.Item label="Domlur" value="dlr" />
                    <Picker.Item label="KR Puram" value="krp" />
                    <Picker.Item label="Indiranagar" value="ind" />
                    <Picker.Item label="Koramangala" value="krm" />
                    <Picker.Item label="BTM" value="btm" />
                    <Picker.Item label="Jayanagar" value="jay" />
                    <Picker.Item label="Cox Town" value="cox" />
                    <Picker.Item label="Electronic City" value="elc" />
                    <Picker.Item label="RT Nagar" value="rtn" />
                    <Picker.Item label="Sadashiv Nagar" value="sdn" />
                    <Picker.Item label="CV Raman Nagar" value="cvn" />
                    <Picker.Item label="Wilson Garden" value="wlg" />
                    </Picker>
                    
            </View>
        </View>
     )
   }
}

const header = StyleSheet.create({
    pickerStyle:{  
        
        width: 200,  
        color: '#344953',  
        justifyContent: 'center',  
    }  ,
    row:{
        //flex:1,
        flexDirection:'row',
        alignItems:'center',

    }
})