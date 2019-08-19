
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
                    <View style={sGuide.comingSoon}>
                         <Text>COMING SOON</Text>
                    </View>
                </SafeAreaView>
                </Fragment>
        )
    }
}

const sGuide = StyleSheet.create({
    scrollView: {
      backgroundColor: 'white',
      //marginBottom:80,
    },
    comingSoon:{
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        marginTop:300
    }

  });
  

