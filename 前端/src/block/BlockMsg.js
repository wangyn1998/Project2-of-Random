import React, { Component } from 'react'
import { Text, View,Dimensions, TouchableOpacity, Image, ScrollView,StyleSheet, FlatList } from 'react-native'
import {Icon} from '@ant-design/react-native';
const {width,scale,height}=Dimensions.get('window');
const w=width,h=height;

const data1=[
    {
        que:'apple',
        ans:'苹果'
    },
    {
        que:'apple',
        ans:'苹果'
    }
]
export default class BlockMsg extends Component {
    constructor(){
        super();
        this.state={
            isCare:false,
            isCare2:false
        }
    }
    changeCare=()=>{
        var a=!this.state.isCare;
        this.setState({
            isCare:a
        })
    }
    changeCare2=()=>{
        var a=!this.state.isCare2;
        this.setState({
            isCare2:a
        })
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <View>
                        <Image source={require('../../images/pic1.jpg')} style={{width:w,height:h*0.78,resizeMode:'stretch',position:'relative'}}/>
                        <View style={styles.msg}>
                            <View style={{borderRadius:80,borderWidth:1,borderColor:'red',width:w*0.13,height:h*0.08,overflow:'hidden'}}><Image source={require('../../images/block-pka.jpg')} style={{width:w*0.13,height:h*0.08,resizeMode:'stretch'}}/></View>
                            <View  style={{marginLeft:20,marginRight:16,width:'45%'}}>
                                <Text style={{fontSize:20}}>一只兔子</Text>
                                <Text style={{color:'#B5B4AA'}}>这个人很懒，什么也没留下</Text>
                            </View>
                            {
                                [1].map(()=>{
                                    if(this.state.isCare==true){
                                        return (
                                            <TouchableOpacity style={styles.btn1} onPress={()=>{this.changeCare()}}><Text style={{fontSize:19}}>已关注</Text></TouchableOpacity>
                                        )
                                    }else{
                                        return (
                                            <TouchableOpacity style={styles.btn} onPress={()=>{this.changeCare()}}><Text style={{fontSize:19}}>+关注</Text></TouchableOpacity>
                                        )
                                    }
                                })
                            }
                        </View>
                        <View style={styles.main}>
                            <Text style={{fontSize:19,marginBottom:20}}>今日分享我的卡片</Text>
                            <FlatList data={data1} numColumns={4}  renderItem={({item})=>(
                                    <TouchableOpacity style={{width:'25%',alignItems:'center',paddingTop:20,position:'relative'}}>
                                        <Image source={require('../../images/pic1.jpg')} style={{width:0.13*w,height:0.1*h}}/>
                                        <View style={styles.card}>
                                            <Text style={{marginBottom:5,fontSize:13}}>{item.que}</Text>
                                            <Text style={{fontSize:13}}>{item.ans}</Text>
                                        </View>
                                    </TouchableOpacity>
                            )}/>
                        </View>
                        <View style={styles.time}>
                            <Text style={{marginRight:15,color:'#B5B4AA'}}>1小时之前发布</Text>
                            <Text style={{color:'#B5B4AA'}}>浏览12000</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{margin:20,fontSize:18}}>评论 10</Text>
                        <View style={{width:w*0.99,borderWidth:1,borderColor:'#B5B4AA',borderRadius:3}}>
                            <View style={{flexDirection:'row',padding:10,paddingLeft:20}}>
                                <View style={{borderRadius:80,borderWidth:1,borderColor:'red',width:w*0.13,height:h*0.08,overflow:'hidden'}}><Image source={require('../../images/block-pka.jpg')} style={{width:w*0.13,height:h*0.08,resizeMode:'stretch'}}/></View>
                                <View  style={{marginLeft:20,marginRight:16,width:'45%'}}>
                                    <Text style={{fontSize:20}}>learning</Text>
                                    <Text>学到了，笔芯！！！</Text>
                                </View>
                                {
                                    [1].map(()=>{
                                        if(this.state.isCare2==true){
                                            return (
                                                <TouchableOpacity style={styles.btn2} onPress={()=>{this.changeCare2()}}><Icon name='like' color='#79be3b'/><Text style={{color:'#79be3b'}}>121</Text></TouchableOpacity>
                                            )
                                        }else{
                                            return (
                                                <TouchableOpacity  style={styles.btn2} onPress={()=>{this.changeCare2()}}><Icon name='like' color='#B5B4AA'/><Text style={{color:'#B5B4AA',marginLeft:2}}>120</Text></TouchableOpacity>
                                            )
                                        }
                                    })
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    btn:{
        justifyContent:'center',
        alignItems:'center',
        width:w*0.17,
        height:h*0.05,
        borderColor:'#79be3b',
        borderRadius:13,
        borderWidth:2,
        marginLeft:10,
        marginTop:10
    },
    btn1:{
        justifyContent:'center',
        alignItems:'center',
        width:w*0.17,
        height:h*0.05,
        backgroundColor:'#79be3b',
        borderRadius:13,
        marginLeft:10,
        marginTop:10
    },
    msg:{
        flexDirection:'row',
        position:'absolute',
        top:'10%',
        left:'13%'
    },
    main:{
        position:'absolute',
        left:'13%',
        top:'30%',
        width:'74%'
    },
    card:{
        alignItems:'center',
        justifyContent:'center',
        width:0.13*w,
        height:0.1*h,
        position:'absolute',
        top:'20%'
    },
    time:{
        flexDirection:'row',
        position:'absolute',
        bottom:'10%',
        right:'11%'
    },
    btn2:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:'15%'
    }
})