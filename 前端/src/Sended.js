import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, AsyncStorage, StyleSheet,Alert,ScrollView, FlatList} from 'react-native'
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'

export default class Sended extends Component {
    constructor(){
        super();
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        fetch('http://172.17.100.2:3000/users/sended')
        .then((res)=>res.json())
        .then((res)=>{
            // console.log(res);
            this.setState({
                posts:res,
            })
        })
    }
    render() {
        return (
            <View>
                <ScrollView style={{backgroundColor:'#fff',width:'100%',height:'100%',padding:10}}>
                    <View style={{flex:1,alignItems:'center',paddingBottom:50}}>
                        <FlatList
                            data = {this.state.posts}
                            numColumns = {1}
                            style={{width:'97%'}}
                            renderItem={({item})=>(
                                <TouchableOpacity style={styles.kuang}>
                                    <View style={styles.user}>
                                        <View style={styles.touxiang}>
                                            <Image source={{uri:item.userImage}} style={{width:80,height:80}}/>
                                        </View>
                                        <View style={{marginLeft:'5%'}}>
                                            <Text style={styles.intxt}>{item.userName}</Text>
                                            <Text style={styles.intxt1}>{item.postTime}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.content}>
                                        <Text>{item.postContent}</Text>
                                        <View style={{flexDirection:'row',marginTop:'3%'}}>
                                            <Image source={{uri:item.postImage}}/>
                                        </View>
                                    </View>
                                    <View style={styles.last}>
                                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}}>
                                            <Image source={require('../../images/block-zhuan.png')}/>
                                            <Text style={styles.numtxt}>{item.postRepostNum}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:'23%'}}>
                                            <Image source={require('../../images/block-pinglun.png')}/>
                                            <Text style={styles.numtxt}>{item.postReplyNum}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:'23%'}}>
                                            <Image source={require('../../images/block-zan.png')}/>
                                            <Text style={styles.numtxt}>{item.postPointNumber}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                        <Text style={{textAlign:'center',color:'#aaa',marginTop:10,fontSize:15}}>没有更多了...</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    kuang:{
        width:'100%',
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