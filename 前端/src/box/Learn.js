import React, { Component } from 'react'
import { Text, View, FlatList, Image,Dimensions,StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';

const data1=[
    {
        que:'apple',
        ans:'苹果'
    },
    {
        que:'apple',
        ans:'苹果'
    },
    {
        que:'apple',
        ans:'苹果'
    },
    {
        que:'apple',
        ans:'苹果'
    },
    {
        que:'apple',
        ans:'苹果'
    },
    {
        que:'apple',
        ans:'苹果'
    },
    {
        que:'apple',
        ans:'苹果'
    },
    {
        que:'apple',
        ans:'苹果'
    },
    {
        que:'apple',
        ans:'苹果'
    }
]
const {width,scale,height}=Dimensions.get('window');
const w=width,h=height;
export default class Learn extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#ffffff'}}>
                <ScrollView>
                <FlatList data={data1} numColumns={3}  renderItem={({item})=>(
                    <TouchableOpacity style={{width:'33.3%',alignItems:'center',paddingTop:30,position:'relative'}} onPress={()=>{Actions.learnMsg()}}>
                        <Image source={require('../../images/pic1.jpg')} style={{width:0.3*w,height:0.25*h}}/>
                        <View style={styles.card}>
                            <Text style={{marginBottom:10,fontSize:25}}>{item.que}</Text>
                            <Text style={{fontSize:20}}>{item.ans}</Text>
                        </View>
                    </TouchableOpacity>
                )}/>
                </ScrollView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    card:{
        alignItems:'center',
        justifyContent:'center',
        fontSize:25,
        width:0.3*w,
        height:0.25*h,
        position:'absolute',
        top:30
    }
})