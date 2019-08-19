import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  SectionList,
} from 'react-native';


class SalonMoreDetails extends Component {
    static propTypes = {
     gmapsEnable: PropTypes.string,
      rightMenu: PropTypes.string,
   }

   static defaultProps = {
    gmapsEnable: 'false',
    rightMenu: '',
    imgurl:'../../assets/img/gmapsLocation.png'
    
  }

   render(){
     return(
        <View>
            <Image style={moreDetails.img} source={require('../../assets/img/gmapsLocation.png')}/>

            <SectionList
              renderItem={({item, index, section}) => 
              <TouchableOpacity>
              <View style={moreDetails.sectionItemContainer}>
                <Text key={index}>{item}</Text>
              </View>
              </TouchableOpacity>
              }
              renderSectionHeader={({section: {title}}) => 
                
                  <View style={moreDetails.sectionContainer}>
                    <Text style={{fontWeight: 'bold'}}>{title}</Text>
                  </View>
                
              }
              sections={[
                {title: 'Staff Members', data: ['Rahul Kumar', 'Ritu Mani']},
                {title: 'Business Details', data: ['080 4122 1439',
                 'Mon-Sun' +'                                                         '+ '10:30 - 11:30']},
              ]}
              keyExtractor={(item, index) => item + index}
            />

        </View>
     )
   }
}

export {SalonMoreDetails}

const moreDetails = StyleSheet.create({
    img:{
        height:380,
        width: Dimensions.get('window').width,
        resizeMode:'cover'
    },
    sectionContainer:{
      height:40,
      width: Dimensions.get('window').width,
      justifyContent:'center',
      alignContent:'center',
      padding:15,
      borderBottomWidth:0.8,
      borderTopWidth:0.8,
      borderColor:'gray'
    },
    sectionItemContainer:{
      height:35,
      width: Dimensions.get('window').width,
      justifyContent:'center',
      alignContent:'center',
      padding:10,
      borderBottomWidth:0.2,
      borderColor:'gray'
    }
})
