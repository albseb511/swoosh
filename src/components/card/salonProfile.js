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

export default class SalonProfile extends Component {
    static propTypes = {
        img:PropTypes.string,
        title: PropTypes.string,
        location: PropTypes.string,
        distance: PropTypes.string,
        staffno: PropTypes.string,
        data: PropTypes.string
   }

   static defaultProps = {
    img:'https://s17026.pcdn.co/wp-content/uploads/sites/9/2016/06/1-229.jpg',  
    title: 'Salon Name',
    location: 'location ',
    distance: ' -- ',
    staffno: ' -- ',
    data:{}

  }

   render(){
     return(
         <View>
            <Image style={styles.image} 
                            source={{uri:this.props.img}}/>

                    <View style={styles.sectionContainer}>
                        <Text style={styles.Text}>{this.props.title}</Text>
                        <Text style={styles.TextSub}>{
                            this.props.location}  {'   '} 
                            {this.props.distance}km  {'   '}  
                            {this.props.staffno} Staff
                            </Text>
                    </View>
            </View>
     )
   }
}

const styles = StyleSheet.create({
    sectionContainer: {
        margin: 10,
        paddingHorizontal: 24,
      },
    image:{
        height:380,
        width: Dimensions.get('window').width,
        resizeMode:'cover'
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