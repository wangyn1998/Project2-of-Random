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
            data:[]
        }
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
                res=this.getRandomArrayElements(res,9);
                var list=[];
                for(var i=0;i<res.length;i++){
                    list.push({
                        que:res[i].cardQues,
                        ans:res[i].cardAns,
                        id:res[i].cardId
                    })
                }
                console.log(list);
                this.setState({
                    data:list
                })
            })
    }
    render() {
        return (
            <View style={{backgroundColor:'#ffffff'}}>
                <ScrollView>
                <FlatList data={data1} numColumns={3}  renderItem={({item})=>(
                    <TouchableOpacity style={{width:'33.3%',alignItems:'center',paddingTop:30,position:'relative'}} onPress={()=>{Actions.cardTest()}}>
                        <Image source={require('../../images/box-pic2.jpg')} style={{width:0.3*w,height:0.25*h,resizeMode:'stretch'}}/>
                    </TouchableOpacity>
                )}/>
                </ScrollView>
            </View>
        )
    }
}
