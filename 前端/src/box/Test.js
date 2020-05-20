import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity,Dimensions, StyleSheet,ScrollView,FlatList } from 'react-native'
import {Icon} from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const data1=[
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    }
]
const {width,scale,height}=Dimensions.get('window');
const w=width,h=height;
export default class Test extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            num:1
        }
    }
    changeNum=()=>{
        this.setState({
            num:2
        })
    }
    getRandomArrayElements(arr, count) {
        var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    }
    async componentDidMount(){
        await fetch('http://172.17.100.2:3000/users/allcard')
            .then((res)=>res.json())
            .then((res)=>{
                if(res.length<=9){
                    res=this.getRandomArrayElements(res,res.length);
                }else{
                    res=this.getRandomArrayElements(res,9);
                }
                console.log(res);
                var list=[];
                for(var i=0;i<res.length;i++){
                    list.push({
                        que:res[i].cardQues,
                        ans:res[i].cardAns,
                        id:res[i].cardId
                    })
                }
                this.setState({
                    data:list
                })
            })
    }
    async componentDidUpdate(){
        if(this.state.num==2){
            await fetch('http://172.17.100.2:3000/users/allcard')
                .then((res)=>res.json())
                .then((res)=>{
                    if(res.length<=9){
                        res=this.getRandomArrayElements(res,res.length);
                    }else{
                        res=this.getRandomArrayElements(res,9);
                    }
                    console.log(res);
                    var list=[];
                    for(var i=0;i<res.length;i++){
                        list.push({
                            que:res[i].cardQues,
                            ans:res[i].cardAns,
                            id:res[i].cardId
                        })
                    }
                    this.setState({
                        data:list,
                        num:1
                    })
                })
        }
    }
    render() {
        return (
            <View style={{backgroundColor:'#ffffff'}}>
                <ScrollView>
                <FlatList data={this.state.data} numColumns={3}  renderItem={({item})=>(
                    <TouchableOpacity style={{width:'33.3%',alignItems:'center',paddingTop:30,position:'relative'}} onPress={()=>{Actions.cardTest({'que':item.que,'ans':item.ans,'change':this.changeNum,'changenum':this.props.change})}}>
                        <Image source={require('../../images/box-pic2.jpg')} style={{width:0.3*w,height:0.25*h,resizeMode:'stretch'}}/>
                    </TouchableOpacity>
                )}/>
                </ScrollView>
            </View>
        )
    }
}
