import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, AsyncStorage, StyleSheet,Alert,ScrollView, FlatList} from 'react-native'
const data0=[
    {date:'星期一',num:10,img:require('../../images/my-xiaofen.png')},
    {date:'星期二',num:10,img:require('../../images/my-xiaofen.png')},
    {date:'星期三',num:10,img:require('../../images/my-xiaofen.png')},
    {date:'星期四',num:10,img:require('../../images/my-xiaofen.png')},
    {date:'星期五',num:10,img:require('../../images/my-xiaofen.png')},
    {date:'星期六',num:10,img:require('../../images/my-xiaofen.png')},
    
]
const data1=[
    {date:'星期日',num:10,img:require('../../images/my-dafen.png')},
]
export default class Signin extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:'#fff',width:'100%',height:'100%'}}>
                <View style={{flex:1}}>
                    <Text style={{marginLeft:'5%',color:'#79be3b',fontSize:20,marginTop:20}}>每日签到</Text>
                    <View style={{alignItems:'center'}}>
                        <View style={styles.bkuang}>
                            <View style={styles.leftkuang}>
                                <FlatList
                                    data={data0}
                                    numColumns = {3}
                                    renderItem={({item})=><View style={styles.lkuang1}>
                                        <Text style={{color:'#fff'}}>{item.date}</Text>
                                        <Image source={item.img}/>
                                        <Text style={{color:'#fff'}}>{item.num}分</Text>
                                    </View>}
                                />
                            </View>
                            <View style={styles.rightkuang}>
                                <Text style={{color:'#fff'}}>{data1[0].date}</Text>
                                <Image source={data1[0].img}/>
                                <Text style={{color:'#fff'}}>{data1[0].num}分</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    bkuang:{
        width:'90%',
        height:200,
        borderRadius:20,
        borderWidth:2,
        borderColor:'#79be3b',
        marginTop:20,
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    leftkuang:{
        width:'75%',
        height:'100%',
    },
    rightkuang:{
        width:'25%',
        height:'95%',
        backgroundColor:'#79be3b',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    lkuang1:{
        width:'30%',
        height:80,
        marginLeft:'2%',
        borderRadius:10,
        backgroundColor:'#79be3b',
        alignItems:'center',
        marginTop:5,
        paddingTop:5
    }
})
