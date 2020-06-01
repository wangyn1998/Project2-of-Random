import React, { Component } from 'react'
import { Text, View ,Image,TouchableOpacity,ScrollView, StyleSheet,FlatList} from 'react-native'
import { Actions } from 'react-native-router-flux'
import {Icon} from '@ant-design/react-native';
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
    },
    btn2:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:'15%'
    },
})
export default class Block extends Component {
    constructor(){
        super();
        this.state={
            posts:[],
            iszan:false,
            result:[],
        }
    }
    componentDidMount(){
        fetch('http://172.17.100.2:3000/users/block')
        .then((res)=>res.json())
        .then((res)=>{
            // console.log(res);
            let result = [];
            for(let index in res){
                result.push({postId: res[index].postId, iszan: false});
            }
            this.setState({
                posts:res,
                result:result
            })
        })
    }
    zan=(postPointNumber,postId)=>{
        let len = this.state.result.length;
        for(let index = 0;index < len;index++){
            if(postId == this.state.result[index].postId){
                console.log(this.state.result[index].postId);
                if(this.state.result[index].iszan == false){
                    let zan = postPointNumber+1;
                    let text = {postPointNumber:zan,postId:postId} //获取数据
                    let send = JSON.stringify(text);   //重要！将对象转换成json字符串
                    fetch('http://172.17.100.2:3000/users/zan',{   //Fetch方法y
                        method: 'POST',
                        headers: {'Content-Type': 'application/json; charset=utf-8'},
                        body: send
                    })
                    .then(res => res.json())
                    .then(
                        res => {
                            if(res.success){
                                fetch('http://172.17.100.2:3000/users/block')
                                .then((res)=>res.json())
                                .then((res)=>{
                                    var jieguo = this.state.result;
                                    jieguo[index].iszan = true;
                                    console.log(jieguo)
                                    this.setState({
                                        result:jieguo,
                                        posts:res,
                                    })
                                })
                            }
                            else{
                                console.log('111')
                            }
                        }
                    )
                }
                else{
                    let zan = postPointNumber-1;
                    let text = {postPointNumber:zan,postId:postId} //获取数据
                    let send = JSON.stringify(text);   //重要！将对象转换成json字符串
                    fetch('http://172.17.100.2:3000/users/zan',{   //Fetch方法y
                        method: 'POST',
                        headers: {'Content-Type': 'application/json; charset=utf-8'},
                        body: send
                    })
                    .then(res => res.json())
                    .then(
                        res => {
                            if(res.success){
                                fetch('http://172.17.100.2:3000/users/block')
                                .then((res)=>res.json())
                                .then((res)=>{
                                    var jieguo1 = this.state.result;
                                    jieguo1[index].iszan = false;
                                    console.log(jieguo1);
                                    this.setState({
                                        result:jieguo1,
                                        posts:res,
                                    })
                                })
                               
                            }
                            else{
                                console.log('111')
                            }
                        }
                    )
                }
            }
            else{
                console.log('111')
            }
        }
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
                            renderItem={({item,index})=>(
                                <TouchableOpacity style={styles.kuang} onPress={()=>{Actions.blockMsg({xiangqing:item})}}>
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
                                        <View style={{flexDirection:'row',marginTop:'3%',width:'50%',height:'80%'}}>
                                            <Image source={{uri:item.postImage}} style={{width:'100%',height:'100%'}}/>
                                        </View>
                                    </View>
                                    <View style={styles.last}>
                                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}}>
                                            <Image source={require('../../images/block-zhuan.png')}/>
                                            <Text style={styles.numtxt}>{item.postRepostNum}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:'28%'}}>
                                            <Image source={require('../../images/block-pinglun.png')}/>
                                            <Text style={styles.numtxt}>{item.postReplyNum}</Text>
                                        </TouchableOpacity>
                                        {/* <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:'28%'}} onPress={()=>this.zan(postPointNumber=item.postPointNumber,postId=item.postId)}>
                                            <Image source={require('../../images/block-zan.png')}/>
                                            <Text style={styles.numtxt}>{item.postPointNumber}</Text>
                                        </TouchableOpacity> */}
                                        {
                                            [1].map(()=>{
                                                console.log(this.state.result[index])
                                                if(this.state.result[index].iszan){
                                                    return (
                                                        <TouchableOpacity 
                                                            style={{flexDirection:'row',alignItems:'center',marginLeft:'28%'}} 
                                                            onPress={()=>this.zan(postPointNumber=item.postPointNumber,postId=item.postId)}
                                                        >
                                                            <Icon name='like' color='#79be3b' size={35}/>
                                                            <Text style={{color:'#79be3b',marginLeft:'2%',fontSize:15,fontWeight:'bold'}}>{item.postPointNumber}</Text>
                                                        </TouchableOpacity>
                                                    )
                                                }else if(!this.state.result[index].iszan){
                                                    console.log('false')
                                                    return (
                                                        <TouchableOpacity  
                                                            style={{flexDirection:'row',alignItems:'center',marginLeft:'28%'}} 
                                                            onPress={()=>this.zan(postPointNumber=item.postPointNumber,postId=item.postId)}
                                                        >
                                                            <Icon name='like' color='#bbb' size={35}/>
                                                            <Text style={{color:'#bbb',marginLeft:'2%',fontSize:15,fontWeight:'bold'}}>{item.postPointNumber}</Text>
                                                        </TouchableOpacity>
                                                    )
                                                }
                                            })
                                        }
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
