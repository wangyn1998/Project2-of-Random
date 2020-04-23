import React, { Component } from 'react'
import { Text, View, FlatList,TextInput, Image, TouchableOpacity, ScrollView,Dimensions } from 'react-native'
import { Grid, Icon,SearchBar } from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux'

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
const list1=[
    {
        num:'41',
        img:require('../../images/box-1.png'),
        text:'英语'
    },
    {
        num:'41',
        img:require('../../images/box-1.png'),
        text:'英语'
    },
    {
        num:'41',
        img:require('../../images/box-1.png'),
        text:'英语'
    },
    {
        num:'41',
        img:require('../../images/box-1.png'),
        text:'数学'
    },
    {
        num:10,
        img:require('../../images/box-jia.png'),
        text:'+'
    }
]
const {width,scale,height}=Dimensions.get('window');
const w=width,h=height;
export default class Box extends Component {
    constructor(){
        super();
        this.state={
            text:'',
            data:list1
        }
    }
    submit=(text)=>{
        var arr=[];
        for(var i=0;i<list1.length;i++){
            if(list1[i].text==text){
                arr.push(list1[i]);
            }
        }
        this.setState({
            data:arr
        })
    }
    clearText=(text)=>{
        if(text==''){
            this.setState({
                data:list1
            })
        }
    }
    render() {
        return (
            <View>
                <ScrollView>
                <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:10,paddingBottom:10,borderColor:'#BBBBBB',borderWidth:1,borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:'#FFFFFF'}}>
                {
                    list.map((item)=>(
                        <View style={{alignItems:'center',width:'25%'}}>
                            <View style={{flexDirection:'row'}}><Text style={{color:item.color}}>{item.num}</Text><Text style={{color:'#807B7B'}}>{item.num2}</Text></View>
                            <Icon name={item.img} style={{marginTop:10,marginBottom:10}} color={item.color}/>
                            <Text style={{color:'#807B7B'}}>{item.text}</Text>
                        </View>
                    ))
                }
                </View>
                <View style={{borderColor:'#BBBBBB',borderWidth:1,marginTop:10,borderTopLeftRadius:10,borderTopRightRadius:10,backgroundColor:'#FFFFFF',marginBottom:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-around',paddingBottom:10,margin:10,borderBottomWidth:1,borderBottomColor:'#BBBBBB',alignItems:'center'}}>
                        <Text style={{fontSize:17}}>我的盒子</Text>
                        <View style={{flexDirection:'row',alignItems:'center',width:'30%',borderWidth:1,borderColor:'#BBBBBB',borderRadius:8}}>
                            <Icon name='search' style={{marginLeft:10}} color='#BBBBBB'/>
                            <TextInput placeholder='搜索' placeholderTextColor='#BBBBBB' style={{height:30}} onEndEditing={(event)=>{this.submit(event.nativeEvent.text)}} onChangeText={(text)=>{this.clearText(text)}}/>
                        </View>
                    </View>
                    <FlatList data={this.state.data} numColumns={2}  renderItem={({item})=>{
                        if(item.text=='+'){
                            return (
                                <View style={{width:'50%',padding:10,alignItems:'center',justifyContent:'center',height:h*0.2}}>
                                    <TouchableOpacity onPress={()=>{Actions.addBox()}}><Image source={item.img} style={{width:w*0.2,height:h*0.1}}/></TouchableOpacity>
                                </View>
                            )
                        }
                        return (
                            <TouchableOpacity onPress={()=>{Actions.light()}} style={{alignItems:'center',width:'50%',padding:10}}>
                                    <Image source={item.img}/>
                                    <Text style={{color:'#E81414',marginTop:10}}>{item.text}</Text>
                            </TouchableOpacity>
                        )
                    }}/>
                </View>
                </ScrollView>
            </View>
        )
    }
}
