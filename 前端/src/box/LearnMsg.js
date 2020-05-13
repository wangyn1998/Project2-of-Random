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
                    <Text style={{fontSize:37}}>{this.props.que}</Text>
                    <Text style={{fontSize:32,padding:20}}>{this.props.ans}</Text>
               </View>
               <View style={styles.edit}>
                   <TouchableOpacity style={styles.btn} onPress={()=>{Actions.updateLearn({que:this.props.que,ans:this.props.ans,id:this.props.id})}}>
                   <Icon name='edit' color='#FD8F71'/>
                   <Text style={{marginRight:10,marginLeft:5}}>编辑</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.btn} onPress={()=>{Actions.delCard({id:this.props.id})}}>
                   <Icon name='delete' color="#FFD331"/>
                   <Text style={{marginRight:10,marginLeft:5}}>删除</Text>
                   </TouchableOpacity>
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
    },
    btn:{
        flexDirection:'row',
        alignItems:'center'
    }
})