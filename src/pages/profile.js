
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  SectionList,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';


export default class Listing extends React.Component {
    render(){
        return(
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>             
                  <ScrollView>       
                <SectionList style={userProfile.sList}
              renderItem={({item, index, section}) => 
              <TouchableOpacity>
              <View style={userProfile.sectionItemContainer}>
                <Text key={index}>{item}</Text>
              </View>
              </TouchableOpacity>
              }
              renderSectionHeader={({section: {title}}) => 
                
                  <View style={userProfile.sectionContainer}>
                    <Text style={{fontWeight: 'bold', fontSize:18}}>{title}</Text>
                  </View>
                
              }
              sections={[
                {title: 'Albert Sebastian ', data: ['+91 9901582145', 'albertsebastian511@gmail.com']},
                {title: 'Settings ', data: ['Payment Options','Refer','Support','About']},
              ]}
              keyExtractor={(item, index) => item + index}
            />

                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SignOut')}}>
                    <View style={userProfile.sectionItemContainer}>
                        <Text>Sign Out</Text>
                    </View>
                </TouchableOpacity>
                </ScrollView> 
                </SafeAreaView>
                </Fragment>
        )
    }
}

const userProfile = StyleSheet.create({
    scrollView: {
      backgroundColor: 'white',
      //marginBottom:80,
    },
    sList:{
        marginTop:20,
    },
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
      padding:25,
      borderBottomWidth:0.3,

    },
    sectionItemContainer:{
      height:65,
      width: Dimensions.get('window').width,
      justifyContent:'center',
      alignContent:'center',
      padding:20,
      paddingLeft:25,
      borderBottomWidth:0.3,
      borderColor:'gray'

    }

  });
  

