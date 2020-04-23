import React, { Component } from 'react'
import { Text, View, Image,Dimensions, TouchableOpacity,StyleSheet, TextInput } from 'react-native'
import {Icon} from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const {width,scale,height}=Dimensions.get('window');
const w=width,h=height;
export default class UpdateLearn extends Component {
    render() {
        return (
            <View style={{flex:1,width:w,height:h,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
               <Image source={require('../../images/pic1.jpg')} style={{width:w,height:h*0.95,resizeMode:'stretch',position:'relative'}}/>
               <TouchableOpacity onPress={()=>{Actions.pop()}} style={{position:'absolute',right:40,top:60}}><Icon name='close' color="black"/></TouchableOpacity>
               <View style={{position:'absolute',top:'20%',width:'100%',alignItems:'center'}}>
                    <View style={styles.que}>
                        <Text style={{fontSize:27,marginRight:20}}>问题</Text>
                        <Image source={require('../../images/box-a1.png')} style={{position:'relative',width:'50%',height:h*0.2,resizeMode:'stretch'}}/>
                        <TextInput style={{left:w*0.36,top:10,position:'absolute',width:'45%',height:h*0.18,fontSize:16}} multiline={true} autoFocus={true} defaultValue='Apple'/>
                    </View>
                    <View style={styles.que}>
                        <Text style={{fontSize:27,marginRight:20}}>答案</Text>
                        <Image source={require('../../images/box-a1.png')} style={{position:'relative',width:'50%',height:h*0.2,resizeMode:'stretch'}}/>
                        <TextInput style={{left:w*0.36,top:10,position:'absolute',width:'45%',height:h*0.18,fontSize:16}} multiline={true} defaultValue='n. 苹果，苹果树，苹果似的东西；[美俚]炸弹，手榴弹，（棒球的）球；[美俚]人，家伙。[网络] 苹果；苹果公司；苹果电脑[专业] 苹果 [农业科学]；苹果 [机械工程]'/>
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