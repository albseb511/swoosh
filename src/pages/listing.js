
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';

//import SalonCard from '../components/card/salonCard'
import SalonProfile from '../components/card/salonProfile'
import SectionListHeader from '../components/card/SectionListHeader' 
import SalonDetailsFlatList from '../components/card/SalonDetailsFlatList' 
import SalonProfileFooter from '../components/card/SalonProfileFooter' 
import {SalonMoreDetails} from '../components/card/salonMoreDetails'




export default class Listing extends React.Component {
    render(){
        return(
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>                    
                    <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>

                    <SalonProfile img={this.props.navigation.getParam('url')}
                                  title={this.props.navigation.getParam('name')}
                                  location={this.props.navigation.getParam('location')}
                                  //distance={this.props.navigation.getParam('distance','2')}
                                  //staffno={this.props.navigation.getParam('staffno',3)}
                                  />
                    <SectionListHeader/>
                    <SalonDetailsFlatList/>
                    <SalonMoreDetails/>
                    <SalonProfileFooter/>
                    </ScrollView>
                </SafeAreaView>
                </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: 'white',
      //marginBottom:80,
    },
  });
  