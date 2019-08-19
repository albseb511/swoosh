import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';


export default class SectionListHeader extends Component {
    static propTypes = {
     title: PropTypes.string,
      rightMenu: PropTypes.string,
      
   }

   static defaultProps = {
    title: 'Location',
    rightMenu: '',

  }

   render(){
     return(
        <View style={styles.btnRow}>
        <TouchableOpacity onPress={this._onPressButton}
                            style={styles.btnRow}>
            <Text style={styles.btnH}>SERVICES</Text>
        </TouchableOpacity>                            

        <TouchableOpacity onPress={this._onPressButton}
                            style={styles.btnRow}>
            <Text style={styles.btnH}>DETAILS</Text>
        </TouchableOpacity>  
    </View>
     )
   }
}

const styles = StyleSheet.create({
    sectionContainer: {
        margin: 10,
        paddingHorizontal: 24,
      },
    btnRow:{
        flexDirection:'row',
        flex:1,
        height: 53,
        width: Dimensions.get('window').width,
        borderBottomWidth:0.5,
        borderColor:'gray'
    },
    btnH:{
        flex:1,
        backgroundColor:'white',
        paddingTop:15,
       textAlign:'center'
    },

   Text:{
    flexDirection: 'row',
    color: 'red',
    flex:1,
    height:20,
    width:322,
    fontSize:16,
    marginBottom:3,
  },
  TextSub:{
    paddingTop:0,
    flex:1,
    color:'gray',
    textAlign:'left',
    alignSelf:'flex-start',
    paddingLeft:3
  },


})