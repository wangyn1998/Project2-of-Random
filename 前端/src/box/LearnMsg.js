import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity,Dimensions, StyleSheet } from 'react-native'
import {Icon} from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const {width,scale,height}=Dimensions.get('window');
const w=width,h=height;
export default class LearnMsg extends Component {
    render() {
        return (
            <View style={{flex:1,width:w,height:h,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
               <Image source={require('../../images/pic1.jpg')} style={{width:w,height:h*0.95,resizeMode:'stretch',position:'relative'}}/>
               <TouchableOpacity onPress={()=>{Actions.pop()}} style={{position:'absolute',right:40,top:60}}><Icon name='close' color="black"/></TouchableOpacity>
               <View style={{position:"absolute",width:'100%',alignItems:'center',top:'20%',padding:35}}>
                   <Text style={{fontSize:37}}>Apple</Text>
                   <Text style={{fontSize:32,padding:20}}>n. 苹果，苹果树，苹果似的东西；[美俚]炸弹，手榴弹，（棒球的）球；[美俚]人，家伙。[网络] 苹果；苹果公司；苹果电脑[专业] 苹果 [农业科学]；苹果 [机械工程]</Text>
               </View>
               <View style={styles.edit}>
                   <Icon name='edit' color='#FD8F71'/>
                   <Text style={{marginRight:10,marginLeft:5}}>编辑</Text>
                   <Icon name='delete' color="#FFD331"/>
                   <Text style={{marginRight:10,marginLeft:5}}>删除</Text>
               </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    edit:{
        position:'absolute',
        right:80,
        bottom:80,
        flexDirection:'row',
        alignItems:'center'
    }
})