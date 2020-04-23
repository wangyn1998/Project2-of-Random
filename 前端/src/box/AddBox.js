import React, { Component } from 'react'
import { Text, View, Image,Dimensions, TouchableOpacity,StyleSheet, TextInput, FlatList } from 'react-native'
import {Icon} from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const {width,scale,height}=Dimensions.get('window');
const w=width,h=height;
const imglist=[
    {
        img:require('../../images/box-1.png'),
        num:1
    },
    {
        img:require('../../images/box-2.png'),
        num:2
    },
    {
        img:require('../../images/box-3.png'),
        num:3
    },
    {
        img:require('../../images/box-4.png'),
        num:4
    },
    {
        img:require('../../images/box-5.png'),
        num:5
    },
    {
        img:require('../../images/box-6.png'),
        num:6
    }
]
export default class AddBox extends Component {
    constructor(){
        super();
        this.state={
            num:1
        }
    }
    clickNum=(num1)=>{
        this.setState({
            num:num1
        },()=>{
            console.log(this.state.num)
        })
    }
    render() {
        return (
            <View style={{flex:1,width:w,height:h,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
               <Image source={require('../../images/pic1.jpg')} style={{width:w,height:h*0.95,resizeMode:'stretch',position:'relative'}}/>
               <TouchableOpacity onPress={()=>{Actions.pop()}} style={{position:'absolute',right:40,top:60}}><Icon name='close' color="black"/></TouchableOpacity>
               <View style={{position:'absolute',top:'20%',width:'100%',alignItems:'center'}}>
                    <View style={styles.que}>
                        <Text style={{fontSize:27,marginRight:20}}>盒子名</Text>
                        <Image source={require('../../images/box-a1.png')} style={{position:'relative',width:'50%',height:h*0.2,resizeMode:'stretch'}}/>
                        <TextInput style={{left:w*0.40,top:10,position:'absolute',width:'45%',height:h*0.18,fontSize:16}} placeholder='请输入名称' multiline={true} autoFocus={true}/>
                    </View>
                    <View style={styles.que1}>
                        <Text style={{fontSize:27,marginRight:20,marginTop:10}}>盒子图片</Text>
                        <View style={{width:'55%',height:h*0.25}}>
                            {
                                [1].map((item)=>{
                                    if(this.state.num==0){
                                        return (
                                            <FlatList data={imglist} numColumns={3} renderItem={({item})=>(
                                                <TouchableOpacity style={{margin:10}} onPress={()=>{this.clickNum(item.num)}}><Image source={item.img} style={{width:w*0.13,height:h*0.07}}/></TouchableOpacity>
                                            )}/>
                                        )
                                    }else{
                                        return (
                                            <FlatList data={imglist} numColumns={3} renderItem={({item})=>{
                                                if(item.num==this.state.num){
                                                    return (
                                                        <TouchableOpacity style={{margin:10,borderColor:'red',borderWidth:2}} onPress={()=>{this.clickNum(item.num)}}><Image source={item.img} style={{width:w*0.13,height:h*0.07}}/></TouchableOpacity>
                                                    )
                                                }
                                                else{
                                                    return (
                                                        <TouchableOpacity style={{margin:10}} onPress={()=>{this.clickNum(item.num)}}><Image source={item.img} style={{width:w*0.13,height:h*0.07}}/></TouchableOpacity>
                                                    )
                                                }
                                            }}/>
                                        )
                                    }
                                })
                            }
                            {/* <FlatList data={imglist} numColumns={3} renderItem={({item})=>(
                                <TouchableOpacity style={{margin:10,borderColor:'red',borderWidth:2}} onPress={()=>{this.clickNum(item.num)}}><Image source={item.img} style={{width:w*0.13,height:h*0.07}}/></TouchableOpacity>
                            )}/> */}
                        </View>
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
    },
    que1:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        marginBottom:30
    }
})