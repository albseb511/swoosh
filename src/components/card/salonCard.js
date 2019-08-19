import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
  Text,
  View,
  Platform,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

export default class SalonCard extends Component {
    static propTypes = {
     imgurl: PropTypes.string,
      title: PropTypes.string,
      rating: PropTypes.string,
      location: PropTypes.string,
      data: PropTypes.string

   }

   static defaultProps = {
    imgurl: 'https://s17026.pcdn.co/wp-content/uploads/sites/9/2016/06/1-229.jpg',
     title: 'Salon Name',
     rating: '5',
     location: 'location',
     data:{}
  }

   render(){
     return(
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Listing',
                                                          {url : this.props.imgurl,
                                                           name: this.props.title,
                                                           location: this.props.location,
                                                           salonDet:this.props.data
                                                              })
                                        console.log('Navigate to Salon'+this.props.title)}}>
        <View style={styles.MainContainer}> 

            <Image
            style={styles.Image}
            source={{uri: this.props.imgurl}}
            />

            <View style={styles.Text}>
                <View style={styles.left}>
                  <Text style={styles.left}>{this.props.title}</Text>
                </View>
                <View style={styles.right}>
                  <Text style={styles.right}>{this.props.rating}/5</Text>
                </View>
            </View>
            <View style={styles.location}>
                <Text style={styles.location}>{this.props.location}</Text>
            </View>
                              


        </View>
      </TouchableOpacity>

     )
   }
 }


 const styles = StyleSheet.create({
    
  MainContainer :{
  
   flex:1,
   marginTop: (Platform.OS) === 'ios' ? 10 : 10,
   marginBottom: (Platform.OS) === 'ios' ? 10 : 10,
   alignItems: 'center',
   alignContent: 'center',
   alignSelf:'center',
   justifyContent: 'center',
   height: 194,
   width: 335,
   backgroundColor: 'white',
   borderRadius:10,
   borderWidth:0.1,
   borderColor:'gray',
   
   },

   Text:{
     flexDirection: 'row',
     color: 'red',
     flex:1,
     height:20,
     width:322,
     paddingTop:7.5,
   },

   left:{
    alignSelf:'flex-start',
    //backgroundColor:'red',
    flex:1,
    fontSize:16,
    color:'red'
   },

   right:{
    alignContent:'flex-end',
    textAlign:'right',
    flex:1,
    fontSize:16,
    color:'red'
   },

   location:{
     paddingTop:0,
     flex:1,
     color:'gray',
     height:14,
     textAlign:'left',
     alignSelf:'flex-start',
     paddingLeft:3
   },

   Image:{
     height: 140,
     width:335,
     //backgroundColor:'blue',
     borderTopLeftRadius:10,
     borderTopRightRadius:10,
     resizeMode:'cover'
   }
  
 });

 