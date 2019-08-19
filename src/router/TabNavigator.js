import React from 'react';

import Explore from '../pages/explore'
import Listing from '../pages/listing'
import Profile from '../pages/profile'
import AlertsScreen from '../pages/alerts'
import SGuide from '../pages/guide'
import Login from '../pages/login'
import SignOut from '../pages/signout'

import Icon from 'react-native-vector-icons/Ionicons'

import {createBottomTabNavigator,
        createAppContainer,
        createDrawerNavigator, 
        createStackNavigator,
        createSwitchNavigator} from 'react-navigation'

//Stack Navigator        
const SalonProfileNav = createStackNavigator({
    Explore:{
        screen:Explore,
        navigationOptions: {
            headerVisible:false,
            header:null
          }},
    Listing:{
        screen:Listing,
        navigationOptions: {
            title: 'Salon Profile',
          }}
},
{
   // headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})

//Switch Navigator for Signout
const SignOutNav= createSwitchNavigator({
    Login:Login,    
    SignOut:SignOut,
})

//Switch Navigator for Login
const Switch_Login= createSwitchNavigator({
    Login:SignOutNav,
    Profile:Profile
})



//Bottom Navigator
const TabNavigator = createBottomTabNavigator({
    Explore: {screen: SalonProfileNav,
        navigationOptions: {       
          tabBarOptions: {
            activeTintColor: '#e91e63',
            labelStyle: {
              fontSize: 12,
              marginBottom:5
            }},
            tabBarIcon: ({tintColor}) => 
            ( <Icon name={'ios-search'} size={24} color={tintColor}/>)
         ,
         tabBarLabel:'Explore'
       },   },
    StyleGuide:{screen: SGuide,
        navigationOptions: {
            tabBarOptions: {
                activeTintColor: '#e91e63',
                labelStyle: {
                  fontSize: 12,
                  marginBottom:5
                }},
            tabBarIcon: ({tintColor}) => 
               ( <Icon name={'ios-color-wand'} size={24} color={tintColor}/>)
            ,
            tabBarLabel:'Styles'
          },},
    Alerts: {screen: AlertsScreen,
        navigationOptions: {
            tabBarOptions: {
                activeTintColor: '#e91e63',
                labelStyle: {
                  fontSize: 12,
                  marginBottom:5
                }},
            
            tabBarIcon: ({tintColor}) => 
               ( <Icon name={'ios-notifications-outline'} size={24} color={tintColor} />)
            ,
            tabBarLabel:'Alerts'
          }
        },
    Profile: {screen: Switch_Login,
        navigationOptions: {
            tabBarOptions: {
                activeTintColor: '#e91e63',
                labelStyle: {
                  fontSize: 12,
                  marginBottom:5
                }},
            tabBarIcon: ({tintColor}) => 
               ( <Icon name={'ios-person'} size={24} color={tintColor}/>)
            ,
            tabBarLabel:'Profile'
          }
        },

    
  });


//Drawer Navigator
  const MyDrawerNavigator = createDrawerNavigator({
    Explore: {
      screen: TabNavigator,
    },
//    Orders: {
//      screen: Listing,
//    },
    Alerts: {
        screen: AlertsScreen,
    },
//    Saved: {
//        screen: Listing,



//      },
    Profile: {
        screen: Profile,
    },

  });


//AppContainer

const TabNav =  createAppContainer(MyDrawerNavigator);


export default TabNav

