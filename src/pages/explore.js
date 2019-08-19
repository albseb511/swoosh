import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SalonCard from '../components/card/salonCard'
import HeaderBarPage from '../components/card/header'

const Array= [    {imgurl: 'https://s17026.pcdn.co/wp-content/uploads/sites/9/2016/06/1-229.jpg',
                title: 'Bronx',
                rating: '3.5',
                location: 'Domlur',
                latitude:'12.9705121',
                longitude:'77.6452835',
                services:[{service_name:'haircut',value:'300',id:'1',gender:'m'},
                          {service_name:'haircut',value:'300',id:'1',gender:'m'},
                          {service_name:'haircut',value:'300',id:'1',gender:'m'},
                          {service_name:'haircut',value:'300',id:'1',gender:'m'},],
                staff:[{staff_name:'Ritu Koshy',id:'1'},
                       {staff_name:'Ritu Koshy',id:'2'},
                       {staff_name:'Ritu Koshy',id:'3'},],
                phoneno:'08041221249',
                mobileno:'9952442211',
                openHours:[{day:'Sunday',startTime:'10:30',endTime:'19:30'},
                            {day:'Monday',startTime:'10:30',endTime:'19:30'},
                            {day:'Tuesday',startTime:'10:30',endTime:'19:30'},
                            {day:'Wednesday',startTime:'10:30',endTime:'19:30'},
                            {day:'Thursday',startTime:'10:30',endTime:'19:30'},
                            {day:'Friday',startTime:'10:30',endTime:'19:30'},
                            {day:'Saturday',startTime:'10:30',endTime:'19:30'},],                        
                id: '1'},
                {imgurl: 'https://image3.mouthshut.com/images/imagesp/925737963s.jpg',
                title: 'Green Trends',
                rating: '4',
                location: 'Koramangala',
                latitude:'12.9705121',
                longitude:'77.6452835',
                staffno:'3',
                services:[{service_name:'haircut',value:'300',id:'1',gender:'m'},
                          {service_name:'haircut',value:'300',id:'1',gender:'m'},
                          {service_name:'haircut',value:'300',id:'1',gender:'m'},
                          {service_name:'haircut',value:'300',id:'1',gender:'m'},],
                staff:  [{staff_name:'Ritu Koshy',id:'1'},
                        {staff_name:'Ritu Koshy',id:'2'},
                        {staff_name:'Ritu Koshy',id:'3'},],
                phoneno:'08041221249',
                mobileno:'9952442211',
                openHours:[{day:'Sunday',startTime:'10:30',endTime:'19:30'},
                            {day:'Monday',startTime:'10:30',endTime:'19:30'},
                            {day:'Tuesday',startTime:'10:30',endTime:'19:30'},
                            {day:'Wednesday',startTime:'10:30',endTime:'19:30'},
                            {day:'Thursday',startTime:'10:30',endTime:'19:30'},
                            {day:'Friday',startTime:'10:30',endTime:'19:30'},
                            {day:'Saturday',startTime:'10:30',endTime:'19:30'},],            
                id: '2'},
                {imgurl: 'https://www.bouncehere.com/wp-content/uploads/2018/09/kormangala-2.jpg',
                title: 'Bounce Unisex Salon',
                rating: '3.5',
                location: 'Indiranagar',
                latitude:'12.9705121',
                longitude:'77.6452835',
                staffno:'3',
                services:[{service_name:'haircut',value:'300',id:'1',gender:'m'},
                          {service_name:'haircut',value:'300',id:'1',gender:'m'},
                          {service_name:'haircut',value:'300',id:'1',gender:'m'},
                          {service_name:'haircut',value:'300',id:'1',gender:'m'},],
                staff:  [{staff_name:'Ritu Koshy',id:'1'},
                          {staff_name:'Ritu Koshy',id:'2'},
                          {staff_name:'Ritu Koshy',id:'3'},], 
                phoneno:'08041221249',
                mobileno:'9952442211',
                openHours:[{day:'Sunday',startTime:'10:30',endTime:'19:30'},
                            {day:'Monday',startTime:'10:30',endTime:'19:30'},
                            {day:'Tuesday',startTime:'10:30',endTime:'19:30'},
                            {day:'Wednesday',startTime:'10:30',endTime:'19:30'},
                            {day:'Thursday',startTime:'10:30',endTime:'19:30'},
                            {day:'Friday',startTime:'10:30',endTime:'19:30'},
                            {day:'Saturday',startTime:'10:30',endTime:'19:30'},],                           
                id: '3'},
                {imgurl: 'https://images.squarespace-cdn.com/content/598e177dcd0f68d5c0676a17/1504880594164-KQIOY8K5X8EFEMMDOV4K/jta2.jpg?format=1500w&content-type=image%2Fjpeg',
                title: 'Toni and Guy Salon',
                rating: '3.5',
                location: 'Indiranagar',
                latitude:'12.9705121',
                longitude:'77.6452835',
                staffno:'3',
                services:[{service_name:'haircut',value:'300',id:'1',gender:'m'},
                          {service_name:'haircut',value:'300',id:'1',gender:'m'},
                          {service_name:'haircut',value:'300',id:'1',gender:'m'},
                          {service_name:'haircut',value:'300',id:'1',gender:'m'},],
                staff:  [{staff_name:'Ritu Koshy',id:'1'},
                          {staff_name:'Ritu Koshy',id:'2'},
                          {staff_name:'Ritu Koshy',id:'3'},], 
                id: '4'},
                {imgurl: 'http://www.tandjsalon.com/n/images/branches/eastwood-cyber-mall/4.jpg',
                title: 'Lakme Salon',
                rating: '4.5',
                location: 'Indiranagar',
                latitude:'12.9705121',
                longitude:'77.6452835',
                staffno:'3',
                services:[{service_name:'haircut',value:'300',id:'1',gender:'m'},
                          {service_name:'haircut',value:'300',id:'1',gender:'m'},
                          {service_name:'haircut',value:'300',id:'1',gender:'m'},
                          {service_name:'haircut',value:'300',id:'1',gender:'m'},],
                staff:  [{staff_name:'Ritu Koshy',id:'1'},
                          {staff_name:'Ritu Koshy',id:'2'},
                          {staff_name:'Ritu Koshy',id:'3'},], 
                phoneno:'08041221249',
                mobileno:'9952442211',
                openHours:[{day:'Sunday',startTime:'10:30',endTime:'19:30'},
                            {day:'Monday',startTime:'10:30',endTime:'19:30'},
                            {day:'Tuesday',startTime:'10:30',endTime:'19:30'},
                            {day:'Wednesday',startTime:'10:30',endTime:'19:30'},
                            {day:'Thursday',startTime:'10:30',endTime:'19:30'},
                            {day:'Friday',startTime:'10:30',endTime:'19:30'},
                            {day:'Saturday',startTime:'10:30',endTime:'19:30'},], 
                id: '5'},
            ]

export default class Explore extends React.Component {
  constructor(props){
    super(props)
    this.state={
      city:'Bangalore',
      area: ''

    }
  }
    render(){
        return(
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <View style={styles.sectionContainer}>
                    <HeaderBarPage title={'Bangalore'}/>
                    </View>
                    
                    <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>

                    
                    <View style={styles.body}>
                    <Text>{this.state.area}</Text>
                    
                    
                    <FlatList
                            data={Array}
                            renderItem={({item}) =>{
                                return(
                                    <SalonCard imgurl={item.imgurl}
                                                title={item.title}
                                                rating={item.rating}
                                                location={item.location}
                                                navigation={this.props.navigation}
                                                data={item}/>
                                )
                            }}
                            keyExtractor = {(item) => item.id}
                            />
                    </View>
                    </ScrollView>
                </SafeAreaView>
                </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
      marginBottom:80,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
  });
  