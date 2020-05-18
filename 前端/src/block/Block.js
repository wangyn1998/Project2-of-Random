import React, { Component } from 'react'
import { Text, View ,Image,TouchableOpacity,ScrollView, StyleSheet,FlatList} from 'react-native'
import { Actions } from 'react-native-router-flux'
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
export default class Block extends Component {
    constructor(){
        super();
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        fetch('http://172.17.100.2:3000/users/block')
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
                        <TouchableOpacity style={styles.kuang} onPress={()=>{Actions.blockMsg()}}>
                            <View style={styles.user}>
                                <View style={styles.touxiang}>
                                    <Image source={require('../../images/touxiang.png')} style={{width:80,height:80}}/>
                                </View>
                                <View style={{marginLeft:'5%'}}>
                                    <Text style={styles.intxt}>用户名</Text>
                                    <Text style={styles.intxt1}>2020-01-01</Text>
                                </View>
                            </View>
                            <View style={styles.content}>
                                <Text>今日分享我的卡片</Text>
                                <View style={{flexDirection:'row',marginTop:'3%'}}>
                                    <Image source={require('../../images/block-card1.png')}/>
                                    <Image source={require('../../images/block-card1.png')}/>
                                </View>
                            </View>
                            <View style={styles.last}>
                                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}}>
                                    <Image source={require('../../images/block-zhuan.png')}/>
                                    <Text style={styles.numtxt}>10</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:'28%'}}>
                                    <Image source={require('../../images/block-pinglun.png')}/>
                                    <Text style={styles.numtxt}>10</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:'28%'}}>
                                    <Image source={require('../../images/block-zan.png')}/>
                                    <Text style={styles.numtxt}>10</Text>
                                </TouchableOpacity>
                            </View>  
                        </TouchableOpacity>
                        <FlatList
                            data = {this.state.posts}
                            numColumns = {1}
                            style={{width:'97%'}}
                            renderItem={({item})=>(
                                <View style={styles.kuang}>
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
                                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:'28%'}}>
                                            <Image source={require('../../images/block-pinglun.png')}/>
                                            <Text style={styles.numtxt}>{item.postReplyNum}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:'28%'}}>
                                            <Image source={require('../../images/block-zan.png')}/>
                                            <Text style={styles.numtxt}>{item.postPointNumber}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />
                        <Text style={{textAlign:'center',color:'#aaa',marginTop:10,fontSize:15}}>没有更多了...</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
