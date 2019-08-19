
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  SectionList,
  View,
  TouchableOpacity
} from 'react-native';


export default class AlertsScreen extends React.Component {
    render(){
        return(
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>                    
                <SectionList style={alerts.sList}
              renderItem={({item, index, section}) => 
              
              <View style={alerts.sectionItemContainer}>
                <Text key={index}>{item}</Text>
              </View>
              
              }
              renderSectionHeader={({section: {title}}) => 
                
                  <View style={alerts.sectionContainer}>
                    <Text style={{fontWeight: 'bold', fontSize:16}}>{title}</Text>
                  </View>
                
              }
              sections={[
                {title: 'Booking Successful', data: ['Your booking at Bronz was successful']},
                {title: 'Changes to App ', data: ['We have made some changes!. Click to learn more']},
              ]}
              keyExtractor={(item, index) => item + index}
            />
                    
                </SafeAreaView>
                </Fragment>
        )
    }
}

const alerts = StyleSheet.create({
    scrollView: {
      backgroundColor: 'white',
      //marginBottom:80,
    },
    sList:{
        marginTop:20,
        padding:20
    },
    sectionContainer:{
      height:20,
      width: Dimensions.get('window').width-40,
      justifyContent:'center',
      alignContent:'center',
      borderWidth:0.5,
      borderBottomWidth:0,
      padding:5,
      


    },
    sectionItemContainer:{
      height:40,
      width: Dimensions.get('window').width-40,
      justifyContent:'center',
      alignContent:'center',
      borderWidth:0.5,
      borderTopWidth:0,
      borderColor:'gray',
      marginBottom:10,
      padding:5,

    }

  });
  

