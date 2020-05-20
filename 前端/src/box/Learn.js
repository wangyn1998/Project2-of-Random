import React, { Component } from 'react'
import { Text, View, FlatList, Image,Dimensions,StyleSheet, ScrollView, TouchableOpacity,ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux';
const data1=[
    {
        que:'apple',
        ans:'苹果'
    },
    {
        que:'apple',
        ans:'苹果'
    },
    {
        que:'apple',
        ans:'苹果'
    },
    {
        que:'apple',
        ans:'苹果'
    },
    {
        que:'apple',
        ans:'苹果'
    },
    {
        que:'apple',
        ans:'苹果'
    },
    {
        que:'apple',
        ans:'苹果'
    },
    {
        que:'apple',
        ans:'苹果'
    },
    {
        que:'apple',
        ans:'苹果'
    }
]
const {width,scale,height}=Dimensions.get('window');
const w=width,h=height;
export default class Learn extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            isloading:true,
            num:1
        }
    }
     async componentDidMount(){
        await fetch('http://172.17.100.2:3000/users/allcard')
            .then((res)=>res.json())
            .then((res)=>{
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
                    isloading:false
                })
            })
    }
    changeNum=()=>{
        this.setState({
            num:2
        })
    }
    async componentDidUpdate(){
        if(this.state.num==2){
            await fetch('http://172.17.100.2:3000/users/allcard')
            .then((res)=>res.json())
            .then((res)=>{
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
                    isloading:false,
                    num:1
                })
            })
        }
    }
    render() {
        return (
            <View style={{backgroundColor:'#ffffff'}}>
                <ScrollView>
                {
                    this.state.isloading?<View style={{justifyContent:'center',alignItems:'center',width:'100%',flex:1}}><ActivityIndicator color='red' size='large'/><Text>加载中</Text></View>:(
                    <FlatList data={this.state.data} numColumns={3}  renderItem={({item})=>(
                        <TouchableOpacity style={{width:'33.3%',alignItems:'center',paddingTop:30,position:'relative'}} onPress={()=>{Actions.learnMsg({'que':item.que,'ans':item.ans,'id':item.id,'changeNum':this.changeNum});this.setState({num:2})}}>
                            <Image source={require('../../images/pic1.jpg')} style={{width:0.3*w,height:0.25*h}}/>
                            <View style={styles.card}>
                                <Text style={{marginBottom:10,fontSize:25}}>{item.que}</Text>
                                <Text style={{fontSize:17}}>{item.ans.length>7?item.ans.substr(0, 7) + "...":item.ans}</Text>
                            </View>
                        </TouchableOpacity>
                    )}/>)
                }
                </ScrollView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    card:{
        alignItems:'center',
        justifyContent:'center',
        fontSize:25,
        width:0.3*w,
        height:0.25*h,
        position:'absolute',
        top:30
    }
})