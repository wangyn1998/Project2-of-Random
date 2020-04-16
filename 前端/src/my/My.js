import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, AsyncStorage, StyleSheet,Alert,ScrollView, FlatList} from 'react-native'
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'
import Xian from './Xian';
const boxes = [
    {name:'盒子',num:6,img:require('../../images/my-box1.png'),unit:'个',txtcolor:'#ff8e14'},
    {name:'卡片',num:6,img:require('../../images/my-box2.png'),unit:'个',txtcolor:'#67e5fb'},
    {name:'积分',num:6,img:require('../../images/my-box3.png'),unit:'分',txtcolor:'#fed2df'},

]
export default class My extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:'#fff',width:'100%',height:'100%'}}>
                <View style={{flex:1,alignItems:'center'}}>
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
                    <View style={styles.bigbox}>
                        <FlatList
                            data = {boxes}
                            numColumns = {3}
                            renderItem={({item})=>(
                                <View style={styles.boxes}>
                                    <Text style={{color:`${item.txtcolor}`,fontSize:17}}>{item.num}{item.unit}</Text>
                                    <Image style={styles.boximg}
                                            resizeMode="contain"
                                            source={item.img}
                                    />
                                    <Text style={styles.boxname}>{item.name}</Text>
                                </View>
                            )}
                        />
                        <TouchableOpacity onPress={()=>{
                                Actions.signin()}}
                                style={styles.sign}
                        >
                            <Text style={{color:'#79be3b'}}>签到领积分></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.studystu}>
                        <Text style={{color:'#79be3b',fontSize:15}}>我的学习情况</Text>
                        <View style={styles.tu}>
                            <TouchableOpacity onPress={()=>{Actions.xian()}}
                                style={{
                                    width:'35%',
                                    height:'100%',
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}
                            >
                                <Image source={require('../../images/my-xian.png')}/>
                                <Text>线形图</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{Actions.bing()}}
                                style={{
                                    marginLeft:'20%',
                                    width:'35%',
                                    height:'100%',
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}
                            >
                                <Image source={require('../../images/my-bing.png')}/>
                                <Text>饼状图</Text>
                            </TouchableOpacity>
                        </View>
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
    bigbox:{
        width:'80%',
        height:170,
        borderRadius:30,
        backgroundColor:'#fff',
        borderWidth:2,
        borderColor:'#eee',
        marginTop:-80,
    },
    boxes:{
        width:'25%',
        height:120,
        marginLeft:'7%',
        marginTop:10,
        paddingTop:10,
        alignItems:'center',
        // backgroundColor:'red'
    },
    boximg:{
        width:50,
        height:50
    },
    boxname:{
        fontSize:15,
        color:'#aaa'
    },
    sign:{
        borderWidth:1,
        borderColor:'#79be3b',
        width:'25%',
        borderRadius:5,
        alignItems:'center',
        marginBottom:10,
        marginLeft:'70%'
    },
    studystu:{
        width:'90%',
        height:170,
        borderRadius:30,
        backgroundColor:'#fff',
        borderWidth:3,
        borderColor:'#79be3b',
        marginTop:20,
        alignItems:'center',
    },
    tu:{
        width:'90%',
        height:'80%',
        // backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
})
