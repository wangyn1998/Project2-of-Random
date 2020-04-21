import React, { Component } from 'react'
import {View,Text,Image,ImageBackground,TextInput,TouchableOpacity, AsyncStorage, StyleSheet,Alert,ScrollView, FlatList} from 'react-native'
const pai = [
    {name:'Enter',img:require('../../images/my-guanjun.png'),grade:98,tou:require('../../images/touxiang.png')},
    {name:'Coisini',img:require('../../images/my-yajun.png'),grade:93,tou:require('../../images/touxiang.png')},
    {name:'Coisini',img:require('../../images/my-jijun.png'),grade:89,tou:require('../../images/touxiang.png')},
]
const pai1 = [
    {name:'Coisini',mingci:4,grade:80,tou:require('../../images/touxiang.png')},
    {name:'Coisini',mingci:5,grade:80,tou:require('../../images/touxiang.png')},
    {name:'Coisini',mingci:6,grade:80,tou:require('../../images/touxiang.png')},
    {name:'Coisini',mingci:7,grade:80,tou:require('../../images/touxiang.png')},
    {name:'Coisini',mingci:8,grade:80,tou:require('../../images/touxiang.png')},
    {name:'Coisini',mingci:9,grade:80,tou:require('../../images/touxiang.png')},
    {name:'Coisini',mingci:10,grade:80,tou:require('../../images/touxiang.png')},
    {name:'Coisini',mingci:11,grade:80,tou:require('../../images/touxiang.png')},
    {name:'Coisini',mingci:12,grade:80,tou:require('../../images/touxiang.png')},
    {name:'Coisini',mingci:13,grade:80,tou:require('../../images/touxiang.png')},
    {name:'Coisini',mingci:14,grade:80,tou:require('../../images/touxiang.png')}
]
export default class Rank extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:'#fff',width:'100%',height:'100%'}}>
                <View style={{flex:1}}>
                    <ImageBackground 
                        source={require('../../images/my-back.png')} 
                        style={{width: '100%', height:200,alignItems:'center'}}
                        resizeMode={"stretch"}
                    >
                        {/* <View style={{width:'100%',height:'100%',backgroundColor:'black',opacity:0.3,alignItems:'center'}}> */}
                            <View style={styles.touxiang}>
                                <Image source={require('../../images/touxiang.png')} style={{width:80,height:80}}/>
                            </View>
                            <Text style={{marginTop:10,fontSize:20}}>Enter</Text>
                        {/* </View> */}
                        
                    </ImageBackground>
                    <FlatList
                        data = {pai}
                        numColumns = {1}
                        renderItem={({item})=>(
                            <View style={styles.every}>
                                <Image style={styles.paiimg0}
                                    resizeMode="contain"
                                    source={item.img}
                                />
                                <View style={styles.toukuang}>
                                    <Image style={styles.paiimg1}
                                        resizeMode="contain"
                                        source={item.tou}
                                    />
                                </View>
                                <Text style={styles.username}>{item.name}</Text>
                                <Text style={styles.grade}>{item.grade}</Text>
                                <Text style={styles.gradetxt}>分</Text>
                            </View>
                        )}
                    />
                    <FlatList
                        data = {pai1}
                        numColumns = {1}
                        renderItem={({item})=>(
                            <View style={styles.every}>
                                <View style={styles.mingci0}>
                                    <Text style={styles.mingci}>{item.mingci}</Text>
                                </View>
                                <View style={styles.toukuang}>
                                    <Image style={styles.paiimg1}
                                        resizeMode="contain"
                                        source={item.tou}
                                    />
                                </View>
                                <Text style={styles.username}>{item.name}</Text>
                                <Text style={styles.grade}>{item.grade}</Text>
                                <Text style={styles.gradetxt}>分</Text>
                            </View>
                        )}
                    />
                </View>
                
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    touxiang:{
        width:80,
        height:80,
        borderRadius:50,
        backgroundColor:'#fff',
        overflow:'hidden',
        marginTop:30,
    },
    every:{
        flexDirection:'row',
        width:'90%',
        height:70,
        alignItems:'center',
        marginLeft:'5%',
        borderBottomColor:'#eee',
        borderBottomWidth:1
    },
    mingci:{
    },
    mingci0:{
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center'
    },
    paiimg0:{
        width:40,
        height:40
    },
    paiimg1:{
        width:50,
        height:50
    },
    toukuang:{
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:'5%',
        overflow:'hidden',
        borderWidth:1,
        borderColor:'#ccc'
    },
    username:{
        fontSize:20,
        width:'20%',
        marginLeft:'10%',
        color:'#67e5fb'
    },
    grade:{
        fontSize:25,
        marginLeft:'23%',
        color:'orange'
    },
    gradetxt:{
        fontSize:15,
        marginLeft:'1%',
        color:'#aaa'
    },
})