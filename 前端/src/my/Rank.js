import React, { Component } from 'react'
import {View,Text,Image,ImageBackground,TextInput,TouchableOpacity, AsyncStorage, StyleSheet,Alert,ScrollView, FlatList} from 'react-native'
export default class Rank extends Component {
    constructor(){
        super();
        this.state={
            scores:[],
            first:{}
        }
    }
    componentDidMount(){
        // 发起请求
        fetch('http://172.17.100.2:3000/users/rank')
        .then((res)=>res.json())
        .then((res)=>{
            var d0 = [];
            for(var i = 0;i<res.length;i++){
                var tupian = '';
                (res[i].userImage=='-' || res[i].userImage==null)?tupian="http://img2.3png.com/eebe5ef277285d150546fd77d248786d2a9e.png":tupian=res[i].userImage
                d0[i] = Object.assign({},res[i],{userImage:tupian},{mingci:i+1});
                // d0[i] = Object.assign({},res[i],{mingci:i+1});
            }
            this.setState({
                scores:d0
            })
            this.setState({
                first:d0[0]
            })
            console.log(d0);
            console.log(this.state.scores[0]);
            // pai = this.state.scores.slice(0,3);
            // pai1 = this.state.scores.slice(3);
            // console.log(fpai);
            // console.log(fpai1);
        })
    }
    render() {
        return (
            <ScrollView style={{backgroundColor:'#fff',width:'100%',height:'100%'}}>
                <View style={{flex:1}}>
                    <ImageBackground 
                        source={require('../../images/my-back.png')} 
                        style={{width: '100%', height:200,alignItems:'center'}}
                        resizeMode={"stretch"}
                    >
                        {/* <View style={{width:'100%',height:'100%',backgroundColor:'black',opacity:0.3,alignItems:'center'}}> */}
                            <View style={styles.touxiang}>
                                <Image source={{uri:this.state.first.userImage}} style={{width:80,height:80}}/>
                            </View>
                            <Text style={{marginTop:10,fontSize:20}}>{this.state.first.userName}</Text>
                        {/* </View> */}
                        
                    </ImageBackground>
                    {/* <FlatList
                        data = {pai}
                        numColumns = {1}
                        renderItem={({item})=>(
                            <View style={styles.every}>
                                <Image style={styles.paiimg0}
                                    resizeMode="contain"
                                    source={item.img}
                                />
                                <View style={styles.toukuang}>
                                    <Image style={styles.paiimg1}
                                        resizeMode="contain"
                                        source={item.tou}
                                    />
                                </View>
                                <Text style={styles.username}>{item.name}</Text>
                                <Text style={styles.grade}>{item.grade}</Text>
                                <Text style={styles.gradetxt}>分</Text>
                            </View>
                        )}
                    /> */}
                    <FlatList
                        data = {this.state.scores}
                        numColumns = {1}
                        renderItem={({item})=>(
                            <View style={styles.every}>
                                <View style={styles.mingci0}>
                                    <Text style={styles.mingci}>{item.mingci}</Text>
                                </View>
                                <View style={styles.toukuang}>
                                    <Image style={styles.paiimg1}
                                        resizeMode="contain"
                                        source={{uri:item.userImage}}
                                    />
                                </View>
                                <Text style={styles.username}>{item.userName}</Text>
                                <Text style={styles.grade}>{item.sum}</Text>
                                <Text style={styles.gradetxt}>分</Text>
                            </View>
                        )}
                    />
                </View>
                
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    touxiang:{
        width:80,
        height:80,
        borderRadius:50,
        backgroundColor:'#fff',
        overflow:'hidden',
        marginTop:30,
    },
    every:{
        flexDirection:'row',
        width:'90%',
        height:70,
        alignItems:'center',
        marginLeft:'5%',
        borderBottomColor:'#eee',
        borderBottomWidth:1
    },
    mingci:{
    },
    mingci0:{
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center'
    },
    paiimg0:{
        width:40,
        height:40
    },
    paiimg1:{
        width:50,
        height:50
    },
    toukuang:{
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:'5%',
        overflow:'hidden',
        borderWidth:1,
        borderColor:'#ccc'
    },
    username:{
        fontSize:20,
        width:'20%',
        marginLeft:'10%',
        color:'#67e5fb'
    },
    grade:{
        fontSize:25,
        marginLeft:'23%',
        color:'orange'
    },
    gradetxt:{
        fontSize:15,
        marginLeft:'1%',
        color:'#aaa'
    },
})