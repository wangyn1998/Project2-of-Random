import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, AsyncStorage, StyleSheet,Alert,ScrollView} from 'react-native'
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'

export default class My extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:'#fff',width:'100%',height:'100%'}}>
                <View style={{flex:1,position:'relative'}}>
                    <View style={styles.introduce}>
                        <View style={styles.touxiang}>
                            <Image source={require('../../images/touxiang.png')} style={{width:80,height:80}}/>
                        </View>
                        <View style={{marginLeft:'10%'}}>
                            <Text style={styles.intxt}>用户名</Text>
                            <TouchableOpacity onPress={()=>{
                                Actions.personal()}}>
                                <Text style={styles.intxt}>点击查看个人资料></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.boxes}>

                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    introduce:{
        flexDirection:'row',
        width:'100%',
        height:200,
        backgroundColor:'#79be3b',
        marginTop:2,
        borderBottomRightRadius:70,
        borderBottomLeftRadius:70,
        paddingTop:20,
        zIndex:0
    },
    touxiang:{
        width:80,
        height:80,
        borderRadius:50,
        backgroundColor:'#fff',
        marginLeft:'10%',
        overflow:'hidden'
    },
    intxt:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold',
        marginTop:'7%'
    },
    boxes:{
        width:'80%',
        height:200,
        borderRadius:30,
        backgroundColor:'red',
        borderWidth:2,
        borderColor:'#eee',
        position:'absolute',
        top:110,
        left:'9.5%'
    }
})
