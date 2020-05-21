import React, { Component } from 'react'
import { Text, View,Dimensions, TouchableOpacity, Image, ScrollView,StyleSheet, FlatList, TextInput, ToolbarAndroid, ToastAndroid } from 'react-native'
import {Icon,Accordion, List} from '@ant-design/react-native';
const {width,scale,height}=Dimensions.get('window');
const w=width,h=height;

const data1=[
    {
        que:'apple',
        ans:'苹果'
    }
]
export default class BlockMsg extends Component {
    constructor(){
        super();
        this.state={
            isCare:false,
            activeSections:[],
            isCare2:false,
            reply:[],
            text1:''
        }
        this.onChange = activeSections => {
            this.setState({ activeSections });
        };
    }
    async componentDidMount(){
        fetch('http://172.17.100.2:3000/users/reply')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                reply:res
            })
        })
    }
    changeCare=()=>{
        var a=!this.state.isCare;
        this.setState({
            isCare:a
        })
    }
    changeText1=(text)=>{
        this.setState({
            text1:text
        })
    }
    changeCare2=()=>{
        var a=!this.state.isCare2;
        this.setState({
            isCare2:a
        })
    }
    push=()=>{
        if(this.state.text1==''){
            ToastAndroid.show('发送内容不能为空',1000);
        }
        else{
            let text1 = {text:this.state.text1} 
            let send = JSON.stringify(text1); 
            fetch(`http://172.17.100.2:3000/users/postreply`,{
                method: 'POST',
                headers: {'Content-Type': 'application/json; charset=utf-8'},
                body: send
            })
            .then(res => res.json())
            .then(
                data => {
                    if(data.success){
                        fetch('http://172.17.100.2:3000/users/reply')
                        .then((res)=>res.json())
                        .then((res)=>{
                            console.log(res);
                            this.setState({
                                reply:res
                            })
                        })
                    }
                }
            )
        }
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <View>
                        <Image source={require('../../images/pic1.jpg')} style={{width:w,height:h*0.78,resizeMode:'stretch',position:'relative'}}/>
                        <View style={styles.msg}>
                            <View style={{borderRadius:80,borderWidth:1,borderColor:'#ccc',width:w*0.13,height:h*0.08,overflow:'hidden'}}><Image source={{uri:this.props.xiangqing.userImage}} style={{width:w*0.13,height:h*0.08,resizeMode:'stretch'}}/></View>
                            <View  style={{marginLeft:20,marginRight:16,width:'45%'}}>
                                <Text style={{fontSize:20}}>{this.props.xiangqing.userName}</Text>
                                <Text style={{color:'#B5B4AA'}}>这个人很懒，什么也没留下</Text>
                            </View>
                            {
                                [1].map(()=>{
                                    if(this.state.isCare==true){
                                        return (
                                            <TouchableOpacity style={styles.btn1} onPress={()=>{this.changeCare()}}><Text style={{fontSize:19}}>已关注</Text></TouchableOpacity>
                                        )
                                    }else{
                                        return (
                                            <TouchableOpacity style={styles.btn} onPress={()=>{this.changeCare()}}><Text style={{fontSize:19}}>+关注</Text></TouchableOpacity>
                                        )
                                    }
                                })
                            }
                        </View>
                        <View style={styles.main}>
                            <Text style={{fontSize:17,marginBottom:20}}>{this.props.xiangqing.postContent}</Text>
                            <FlatList data={data1} numColumns={4}  renderItem={({item})=>(
                                    <TouchableOpacity style={{width:'50%',alignItems:'center',paddingTop:20,position:'relative'}}>
                                        {/* <Image source={require('../../images/pic1.jpg')} style={{width:0.13*w,height:0.1*h}}/> */}
                                        {/* <View style={styles.card}>
                                            <Text style={{marginBottom:5,fontSize:13}}>{item.que}</Text>
                                            <Text style={{fontSize:13}}>{item.ans}</Text>
                                        </View> */}
                                        <Image source={{uri:this.props.xiangqing.postImage}} style={{width:0.5*w,height:0.2*h}}/>
                                    </TouchableOpacity>
                            )}/>

                        </View>
                        <View style={styles.time}>
                            <Text style={{marginRight:15,color:'#B5B4AA'}}>{this.props.xiangqing.postTime}发布</Text>
                            <Text style={{color:'#B5B4AA'}}>浏览12000</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{margin:20,fontSize:18}}>评论</Text>
                        <View style={{width:w*0.99,borderWidth:1,borderColor:'#B5B4AA',borderRadius:3,backgroundColor:'#fff',paddingBottom:20,margin:1}}>
                            {
                                this.state.reply.map((item,idx)=>{
                                    if(idx==0){
                                        return (
                                            <View style={{flexDirection:'row',padding:10,paddingLeft:20}}>
                                                <View style={{borderRadius:80,borderWidth:1,borderColor:'#ccc',width:w*0.13,height:h*0.08,overflow:'hidden'}}><Image source={{uri:item.userImage}} style={{width:w*0.13,height:h*0.08,resizeMode:'stretch'}}/></View>
                                                <View  style={{marginLeft:20,marginRight:16,width:'45%'}}>
                                                <Text style={{fontSize:20,color:'#79be3b'}}>{item.userName}</Text>
                                                <Text>{item.replyContent}</Text>
                                                </View>
                                                {
                                                    [1].map(()=>{
                                                        if(this.state.isCare2==true){
                                                            return (
                                                                <TouchableOpacity style={styles.btn2} onPress={()=>{this.changeCare2()}}><Icon name='like' color='#79be3b'/><Text style={{color:'#79be3b'}}>121</Text></TouchableOpacity>
                                                            )
                                                        }else{
                                                            return (
                                                                <TouchableOpacity  style={styles.btn2} onPress={()=>{this.changeCare2()}}><Icon name='like' color='#B5B4AA'/><Text style={{color:'#B5B4AA',marginLeft:2}}>120</Text></TouchableOpacity>
                                                            )
                                                        }
                                                    })
                                                }
                                            </View>
                                        )
                                    }
                                    else if(idx==1||idx==2){
                                        return (
                                            <View  style={{marginLeft:50,marginRight:16,width:'45%',flexDirection:'row',alignItems:'center',marginBottom:5}}>
                                                <Text style={{fontSize:17,marginRight:10,color:'#79be3b'}}>{item.userName}:</Text>
                                                <Text>{item.replyContent}</Text>
                                            </View>
                                        )
                                    }
                                })
                            }
                            <View style={{width:'70%',marginLeft:'6%'}}>
                            <Accordion
                                onChange={this.onChange}
                                activeSections={this.state.activeSections}
                                >
                                <Accordion.Panel header="查看更多回复" headerStyle={{color:'#79be3b'}}>
                                    <List>
                                        {
                                            this.state.reply.map((item,idx)=>{
                                                if(idx>2){
                                                    return (
                                                        <List.Item>
                                                            <View  style={{marginLeft:20,marginRight:16,width:'45%',flexDirection:'row',alignItems:'center'}}>
                                                                <Text style={{fontSize:17,marginRight:10,color:'#79be3b'}}>{item.userName}:</Text>
                                                                <Text>{item.replyContent}</Text>
                                                            </View>
                                                        </List.Item>
                                                    )
                                                }
                                            })
                                        }
                                    </List>
                                </Accordion.Panel>
                            </Accordion>
                            </View>
                        </View>
                    </View>
                    {/* <View style={{width:'100%',height:h*0.06,backgroundColor:'red',position:"absolute",bottom:0}}><Text>321</Text></View> */}
                </ScrollView>
                <View style={{width:'100%',height:h*0.06,backgroundColor:'#fff',position:"absolute",bottom:0,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                    <View style={{width:'60%',height:'65%',borderRadius:10,backgroundColor:'#BBB',opacity:0.5}}>
                        <TextInput placeholder='说点什么。。。' placeholderTextColor='#A2A2A2' onChangeText={(text)=>{this.changeText1(text)}}/>
                    </View>
                    <TouchableOpacity style={styles.btn3} onPress={()=>{this.push()}}><Text>发送</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    btn:{
        justifyContent:'center',
        alignItems:'center',
        width:w*0.17,
        height:h*0.05,
        borderColor:'#79be3b',
        borderRadius:13,
        borderWidth:2,
        marginLeft:10,
        marginTop:10
    },
    btn1:{
        justifyContent:'center',
        alignItems:'center',
        width:w*0.17,
        height:h*0.05,
        backgroundColor:'#79be3b',
        borderRadius:13,
        marginLeft:10,
        marginTop:10
    },
    msg:{
        flexDirection:'row',
        position:'absolute',
        top:'10%',
        left:'13%'
    },
    main:{
        position:'absolute',
        left:'13%',
        top:'30%',
        width:'74%'
    },
    card:{
        alignItems:'center',
        justifyContent:'center',
        width:0.13*w,
        height:0.1*h,
        position:'absolute',
        top:'20%'
    },
    time:{
        flexDirection:'row',
        position:'absolute',
        bottom:'10%',
        right:'11%'
    },
    btn2:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:'15%'
    },
    btn3:{
        justifyContent:'center',
        alignItems:'center',
        width:w*0.13,
        height:'60%',
        borderColor:'#79be3b',
        borderRadius:13,
        borderWidth:2,
        marginLeft:10
    }
})