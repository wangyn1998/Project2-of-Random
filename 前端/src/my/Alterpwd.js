import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, AsyncStorage, StyleSheet,Alert,ScrollView, FlatList,ToastAndroid} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native'

export default class Alterpwd extends Component {
    constructor(){
        super();
        this.state={
          oldpwd:'',
          newpwd:'',
          oldeye:require('../../images/my-notsee.png'),
          oldeye1:'notsee',
          oldsecure:true,
          newsecure:true,
          neweye:require('../../images/my-notsee.png'),
          neweye1:'notsee',
        }
      }
    oldpwdhandle=(text)=>{
        console.log(text);
        this.setState({
            oldpwd:text
        })
    }
    newpwdhandle=(text)=>{
        console.log(text);
        this.setState({
            newpwd:text
        })
    }
    oldpwdpress=()=>{
        if(this.state.oldeye1 == "see"){
            console.log('true')
            this.setState({
                oldeye:require('../../images/my-notsee.png'),
                oldeye1:'notsee',
                oldsecure:true,
            })
        }
        if(this.state.oldeye1 == "notsee"){
            console.log('true')
            this.setState({
                oldeye:require('../../images/my-see.png'),
                oldeye1:'see',
                oldsecure:false,
            })
        }
    }
    newpwdpress=()=>{
        if(this.state.neweye1 == "see"){
            console.log('true')
            this.setState({
                neweye:require('../../images/my-notsee.png'),
                neweye1:'notsee',
                newsecure:true,
            })
        }
        if(this.state.neweye1 == "notsee"){
            console.log('true')
            this.setState({
                neweye:require('../../images/my-see.png'),
                neweye1:'see',
                newsecure:false,
            })
        }
    }
    alterpwd=()=>{
        let text = {oldpwd:this.state.oldpwd,newpwd:this.state.newpwd} //获取数据
        let send = JSON.stringify(text);   //重要！将对象转换成json字符串
        fetch('http://172.17.100.2:3000/users/alterpwd',{   //Fetch方法y
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        })
        .then(res => res.json())
        .then(
            res => {
                if(res.success){
                    ToastAndroid.show('密码修改成功！', ToastAndroid.SHORT);
                }
                else{
                    ToastAndroid.show('旧密码输入错误，或新密码输入不符合要求', ToastAndroid.SHORT);
                }
            }
        )
    }
    render() {
        return (
            <ScrollView style={{backgroundColor:'#fff',width:'100%',height:'100%'}}>
                <View style={{flex:1}}>
                    <Text style={styles.txt}>旧密码：</Text>
                    <View style={{alignItems:'center'}}>
                        <View style={styles.up}>
                            <TextInput 
                                placeholder='若包含字母，请注意区分大小写'
                                onChangeText={this.oldpwdhandle}
                                secureTextEntry={this.state.oldsecure} 
                                style={{width:'80%'}}
                            />
                            <TouchableOpacity onPress={this.oldpwdpress} style={{right:-40}}>
                                <Image source={this.state.oldeye} style={{width:20,height:20}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.txt}>新密码：</Text>
                    <View style={{alignItems:'center'}}>
                        <View style={styles.up}>
                            <TextInput 
                                placeholder='8-14位，至少包含数字/字母/字符2种组合'
                                onChangeText={this.newpwdhandle}
                                secureTextEntry={this.state.newsecure} 
                                style={{width:'80%'}}
                            />
                            <TouchableOpacity onPress={this.newpwdpress} style={{right:-40}}>
                                <Image source={this.state.neweye} style={{width:20,height:20}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{alignItems:'center'}}>
                       <TouchableOpacity 
                            style={styles.login}
                        >
                            <Text style={styles.logintxt} onPress={this.alterpwd}>确定</Text>
                        </TouchableOpacity>  
                    </View>
                    
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    txt:{
        fontSize:15,
        marginLeft:'10%',
        marginTop:20
    },
    up:{
      width:'80%',
      height:50,
      borderRadius:10,
      borderWidth:2,
      borderColor:'#79be3b',
      flexDirection:'row',
      alignItems:'center',
      paddingLeft:'2%',
      marginTop:15
    },
    login:{
        width:'40%',
        height:40,
        backgroundColor:'#79be3b',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,  
        borderRadius:10
    },
    logintxt:{
        color:'#fff'
    },
})