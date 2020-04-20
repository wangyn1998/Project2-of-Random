import React, { Component } from 'react'
import { Text, View, Image,Dimensions, TouchableOpacity,StyleSheet, TextInput } from 'react-native'
import {Icon} from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const {width,scale,height}=Dimensions.get('window');
const w=width,h=height;
export default class AddLearn extends Component {
    render() {
        return (
            <View style={{flex:1,width:w,height:h,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
               <Image source={require('../../images/pic1.jpg')} style={{width:w,height:h*0.95,resizeMode:'stretch',position:'relative'}}/>
               <TouchableOpacity onPress={()=>{Actions.pop()}} style={{position:'absolute',right:40,top:60}}><Icon name='close' color="black"/></TouchableOpacity>
               <View style={{position:'absolute',top:'20%',width:'100%',alignItems:'center'}}>
                    <View style={styles.que}>
                        <Text style={{fontSize:27,marginRight:20}}>问题</Text>
                        <Image source={require('../../images/box-a1.png')} style={{position:'relative',width:'50%',height:h*0.2,resizeMode:'stretch'}}/>
                        {/* <TextInput style={{left:w*0.4,top:40,position:'absolute',width:'40%',height:h*0.2}} placeholder='请输入问题'/> */}
                    </View>
                    <View style={styles.que}>
                        <Text style={{fontSize:27,marginRight:20}}>答案</Text>
                        <Image source={require('../../images/box-a1.png')} style={{position:'relative',width:'50%',height:h*0.2,resizeMode:'stretch'}}/>
                        {/* <TextInput style={{position:'absolute',top:10,left:10}} placeholder='请输入问题'/> */}
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={()=>{Actions.pop()}}><Text style={{fontSize:20}}>保存</Text></TouchableOpacity>
               </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    btn:{
        justifyContent:'center',
        alignItems:'center',
        width:'23%',
        height:h*0.06,
        backgroundColor:'#79be3b',
        borderRadius:7,
        marginTop:10
    },
    que:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:30
    }
})