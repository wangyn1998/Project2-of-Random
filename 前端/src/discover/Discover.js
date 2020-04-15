import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    AsyncStorage,
    ToastAndroid,
    BackHandler
  } from 'react-native';

const styles = StyleSheet.create({
    wrapper:{
        height:250,
        width:"100%"
    },
    body:{
        height:400,
        width:'100%',
        marginTop:50,
        backgroundColor:'red'
    }
})

export default class Discover extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.wrapper}>
                        <Swiper>
                            <View >
                                <Image source={require('../../images/lb1.png')} style={{width:"100%",height:"100%"}} />
                            </View>
                            <View >
                                <Image source={require('../../images/lb2.png')} style={{width:"100%",height:"100%"}} />
                            </View>
                        </Swiper>
                    </View>
                    <View style={styles.body}>
                        
                    </View>
                </ScrollView>
                
            </View>
        )
    }
}
