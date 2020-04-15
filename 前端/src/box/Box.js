import React, { Component } from 'react'
import { Text, View, FlatList,TextInput, Image } from 'react-native'
import { Grid, Icon,SearchBar } from '@ant-design/react-native';

const list=[
    {
        num:'41',
        num2:'天',
        img:'clock-circle',
        text:'学习',
        color:'#FD8F71'
    },
    {
        num:'5',
        num2:'次',
        img:'snippets',
        text:'打卡',
        color:'#34C7FC'
    },
    {
        num:'6',
        num2:'个',
        img:'star',
        text:'星星',
        color:'#FFD331'
    },
    {
        num:'4',
        num2:'座',
        img:'trophy',
        text:'成就',
        color:'#FD84AB'
    }
]
export default class Box extends Component {
    render() {
        return (
            <View>
                <FlatList data={list} numColumns={4}  style={{paddingTop:10,paddingBottom:10,borderColor:'#BBBBBB',borderWidth:1,borderBottomLeftRadius:10,borderBottomRightRadius:10}} renderItem={({item})=>(
                    <View style={{alignItems:'center',width:'25%'}}>
                        <View style={{flexDirection:'row'}}><Text style={{color:item.color}}>{item.num}</Text><Text style={{color:'#807B7B'}}>{item.num2}</Text></View>
                        <Icon name={item.img} style={{marginTop:10,marginBottom:10}} color={item.color}/>
                        <Text style={{color:'#807B7B'}}>{item.text}</Text>
                    </View>
                )}/>
                <View style={{borderColor:'#BBBBBB',borderWidth:1,marginTop:10,borderTopLeftRadius:10,borderTopRightRadius:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-around',paddingBottom:10,margin:10,borderBottomWidth:1,borderBottomColor:'#BBBBBB',alignItems:'center'}}>
                        <Text>我的盒子</Text>
                        <View style={{flexDirection:'row',alignItems:'center',width:'30%',borderWidth:1,borderColor:'#BBBBBB',borderRadius:8}}>
                            <Icon name='search' style={{marginLeft:10}} color='#BBBBBB'/>
                            <TextInput placeholder='搜索' placeholderTextColor='#BBBBBB' style={{height:30}}/>
                        </View>
                    </View>
                </View>
                <FlatList data={list} numColumns={2}  renderItem={({item})=>(
                    <View style={{alignItems:'center',width:'50%',padding:10}}>
                        <Image source={require('../../images/box-1.png')}/>
                        <Text style={{color:'#807B7B'}}>英语</Text>
                    </View>
                )}/>
            </View>
        )
    }
}
