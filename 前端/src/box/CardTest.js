import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity,Dimensions, StyleSheet } from 'react-native'
import {Icon} from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const {width,scale,height}=Dimensions.get('window');
const w=width,h=height;
export default class CardTest extends Component {
    constructor(){
        super();
        this.state={
            num:0
        }
    }
    remCard=()=>{
        this.setState({
            num:2
        })
    }
    unremCard=()=>{
        this.setState({
            num:3
        })
    }
    seeCard=()=>{
        this.setState({
            num:1
        })
    }
    render() {
        return (
            <View style={{flex:1,width:w,height:h,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
               <Image source={require('../../images/pic1.jpg')} style={{width:w,height:h*0.95,resizeMode:'stretch',position:'relative'}}/>
               <TouchableOpacity onPress={()=>{Actions.pop()}} style={{position:'absolute',right:40,top:60}}><Icon name='close' color="black"/></TouchableOpacity>
                {/* <View style={{position:'absolute',alignItems:'center',top:'30%',width:'100%'}}>
                    <Text style={{fontSize:35}}>Apple的中文释义是</Text>
                    <TouchableOpacity style={{marginTop:70}}><Text style={{color:'#B5B4AA'}}>查看正确答案</Text></TouchableOpacity>
                    <View style={{flexDirection:'row',width:'100%',justifyContent:'space-evenly',marginTop:20,padding:10}}>
                        <TouchableOpacity disabled={this.state.num?false:true} onPress={this.remCard} style={styles.btn1}><Text>记得</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn1}><Text>不记得</Text></TouchableOpacity>
                    </View>
                </View> */}
                {
                    [1].map(()=>{
                        if(this.state.num==0){
                            return (
                                <View style={{position:'absolute',alignItems:'center',top:'30%',width:'100%'}}>
                                    <Text style={{fontSize:33}}>Apple的中文释义是</Text>
                                    <TouchableOpacity style={{marginTop:110}} onPress={this.seeCard}><Text style={{color:'#B5B4AA'}}>查看正确答案</Text></TouchableOpacity>
                                    <View style={{flexDirection:'row',width:'100%',justifyContent:'space-evenly',marginTop:10,padding:10}}>
                                        <TouchableOpacity onPress={this.remCard} style={styles.btn1}><Text>记得</Text></TouchableOpacity>
                                        <TouchableOpacity style={styles.btn1} onPress={this.unremCard}><Text>不记得</Text></TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }
                        if(this.state.num==1){
                            return (
                                <View style={{position:'absolute',alignItems:'center',top:'30%',width:'100%'}}>
                                    <Text style={{fontSize:33}}>Apple的中文释义是</Text>
                                    <Text style={{color:'red',marginTop:40}}>苹果</Text>
                                    <TouchableOpacity style={{marginTop:50}} onPress={this.seeCard}><Text style={{color:'#B5B4AA'}}>查看正确答案</Text></TouchableOpacity>
                                    <View style={{flexDirection:'row',width:'100%',justifyContent:'space-evenly',marginTop:10,padding:10}}>
                                        <TouchableOpacity onPress={this.remCard} style={styles.btn1}><Text>记得</Text></TouchableOpacity>
                                        <TouchableOpacity style={styles.btn1} onPress={this.unremCard}><Text>不记得</Text></TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }
                        if(this.state.num==2){
                            return(
                                <View style={{position:'absolute',alignItems:'center',top:'30%',width:'100%',height:'70%'}}>
                                    <Text style={{fontSize:33}}>Apple的中文释义是</Text>
                                    <TouchableOpacity style={{marginTop:110}} disabled={true}><Text style={{color:'#B5B4AA'}}>查看正确答案</Text></TouchableOpacity>
                                    <View style={{flexDirection:'row',width:'100%',justifyContent:'space-evenly',marginTop:10,padding:10}}>
                                        <TouchableOpacity onPress={this.remCard} style={styles.btn2}><Text>记得</Text></TouchableOpacity>
                                        <TouchableOpacity style={styles.btn1} disabled={true}><Text>不记得</Text></TouchableOpacity>
                                    </View>
                                    <View style={{flexDirection:'row',width:'23%',justifyContent:'center',alignItems:'center',marginRight:'37%'}}>
                                        <Text style={{color:'red',marginRight:5}}>+</Text>
                                        <Icon name='star' color='#FFD331'/>
                                    </View>
                                    <TouchableOpacity onPress={()=>{Actions.pop()}} style={{position:'absolute',right:50,bottom:110}}><Text>继续翻牌>></Text></TouchableOpacity>
                                </View>
                            )
                        }
                        if(this.state.num==3){
                            return(
                                <View style={{position:'absolute',alignItems:'center',top:'30%',width:'100%',height:'70%'}}>
                                    <Text style={{fontSize:33}}>Apple的中文释义是</Text>
                                    <Text style={{color:'red',marginTop:60,fontSize:35}}>苹果</Text>
                                    <TouchableOpacity onPress={()=>{Actions.pop()}} style={{position:'absolute',right:50,bottom:110}}><Text>继续翻牌>></Text></TouchableOpacity>
                                </View>
                            )
                        }
                    })
                }
            </View>
        )
    }
}
const styles=StyleSheet.create({
    btn1:{
        justifyContent:'center',
        alignItems:'center',
        width:'23%',
        height:h*0.06,
        borderRadius:7,
        marginTop:10,
        borderColor:'#79be3b',
        borderWidth:2
    },
    btn2:{
        justifyContent:'center',
        alignItems:'center',
        width:'23%',
        height:h*0.06,
        borderRadius:7,
        marginTop:10,
        backgroundColor:'#79be3b'
    }
})