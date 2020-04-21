import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity,Dimensions, StyleSheet,ScrollView,FlatList } from 'react-native'
import {Icon} from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const data1=[
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    }
]
const {width,scale,height}=Dimensions.get('window');
const w=width,h=height;
export default class Test extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#ffffff'}}>
                <ScrollView>
                <FlatList data={data1} numColumns={3}  renderItem={({item})=>(
                    <TouchableOpacity style={{width:'33.3%',alignItems:'center',paddingTop:30,position:'relative'}} onPress={()=>{Actions.cardTest()}}>
                        <Image source={require('../../images/box-pic2.jpg')} style={{width:0.3*w,height:0.25*h,resizeMode:'stretch'}}/>
                    </TouchableOpacity>
                )}/>
                </ScrollView>
            </View>
        )
    }
}
