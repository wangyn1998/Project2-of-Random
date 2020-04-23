import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, AsyncStorage, StyleSheet,Alert,ScrollView, FlatList} from 'react-native'
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'

export default class Sended extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:'#fff',width:'100%',height:'100%',padding:10}}>
                <View style={{flex:1,alignItems:'center',paddingBottom:50}}>
                    <View style={styles.kuang}>
                        <View style={styles.user}>
                            <View style={styles.touxiang}>
                                <Image source={require('../../images/touxiang.png')} style={{width:80,height:80}}/>
                            </View>
                            <View style={{marginLeft:'5%'}}>
                                <Text style={styles.intxt}>用户名</Text>
                                <Text style={styles.intxt1}>2020-01-01</Text>
                            </View>
                        </View>
                        <View style={styles.content}>
                            <Text>今日分享我的卡片</Text>
                            <View style={{flexDirection:'row',marginTop:'3%'}}>
                                <Image source={require('../../images/block-card1.png')}/>
                                <Image source={require('../../images/block-card1.png')}/>
                            </View>
                        </View>
                        <View style={styles.last}>
                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}}>
                                <Image source={require('../../images/block-zhuan.png')}/>
                                <Text style={styles.numtxt}>10</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:'28%'}}>
                                <Image source={require('../../images/block-pinglun.png')}/>
                                <Text style={styles.numtxt}>10</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:'28%'}}>
                                <Image source={require('../../images/block-zan.png')}/>
                                <Text style={styles.numtxt}>10</Text>
                            </TouchableOpacity>
                        </View>  
                    </View>
                    <View style={styles.kuang}>
                        <View style={styles.user}>
                            <View style={styles.touxiang}>
                                <Image source={require('../../images/touxiang.png')} style={{width:80,height:80}}/>
                            </View>
                            <View style={{marginLeft:'5%'}}>
                                <Text style={styles.intxt}>用户名</Text>
                                <Text style={styles.intxt1}>2019-12-31</Text>
                            </View>
                        </View>
                        <View style={styles.content}>
                            <Text>今日分享我的卡片</Text>
                            <View style={{flexDirection:'row',marginTop:'3%'}}>
                                <Image source={require('../../images/block-card1.png')}/>
                                <Image source={require('../../images/block-card1.png')}/>
                            </View>
                        </View>
                        <View style={styles.last}>
                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}}>
                                <Image source={require('../../images/block-zhuan.png')}/>
                                <Text style={styles.numtxt}>10</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:'28%'}}>
                                <Image source={require('../../images/block-pinglun.png')}/>
                                <Text style={styles.numtxt}>10</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:'28%'}}>
                                <Image source={require('../../images/block-zan.png')}/>
                                <Text style={styles.numtxt}>10</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.kuang}>
                        <View style={styles.user}>
                            <View style={styles.touxiang}>
                                <Image source={require('../../images/touxiang.png')} style={{width:80,height:80}}/>
                            </View>
                            <View style={{marginLeft:'5%'}}>
                                <Text style={styles.intxt}>用户名</Text>
                                <Text style={styles.intxt1}>2019-12-30</Text>
                            </View>
                        </View>
                        <View style={styles.content}>
                            <Text>今日分享我的卡片</Text>
                            <View style={{flexDirection:'row',marginTop:'3%'}}>
                                <Image source={require('../../images/block-card1.png')}/>
                                <Image source={require('../../images/block-card1.png')}/>
                            </View>
                        </View>
                        <View style={styles.last}>
                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}}>
                                <Image source={require('../../images/block-zhuan.png')}/>
                                <Text style={styles.numtxt}>10</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:'28%'}}>
                                <Image source={require('../../images/block-pinglun.png')}/>
                                <Text style={styles.numtxt}>10</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:'28%'}}>
                                <Image source={require('../../images/block-zan.png')}/>
                                <Text style={styles.numtxt}>10</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{textAlign:'center',color:'#aaa',marginTop:10,fontSize:15}}>没有更多了...</Text>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    kuang:{
        width:'97%',
        height:400,
        borderColor:'#bbb',
        borderWidth:1,
        borderRadius:20,
        padding:20,
        marginTop:10,
    },
    touxiang:{
        width:80,
        height:80,
        borderRadius:50,
        backgroundColor:'#fff',
        overflow:'hidden',
        borderWidth:1,
        borderColor:'#ccc'
    },
    intxt:{
        fontSize:17,
    },
    intxt1:{
        fontSize:15,
        color:'#bbb',
        marginTop:'30%'
    },
    user:{
        flexDirection:'row',
        width:'100%',
        height:80,
        alignItems:'center'
    },
    content:{
        width:'100%',
        height:'65%',
        marginTop:20
    },
    last:{
        width:'100%',
        height:'10%',
        marginTop:'1%',
        borderTopColor:'#ccc',
        borderTopWidth:1,
        flexDirection:'row',
        alignItems:'center'
    },
    numtxt:{
        marginLeft:'2%',
        color:'#bbb',
        fontSize:15,
        fontWeight:'bold',
    }
})