import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, AsyncStorage, StyleSheet,Alert} from 'react-native'
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'
import {myFetch} from './index'
let rootUrl = 'https://www.fastmock.site/mock/1942df50e67c8173257ad3826b39e159/api'
export default class Register extends Component {
    constructor(){
      super();
      this.state={
        phonenumber:'',
        username:'',
        pwd:'',
        repwd:'',
        isloading:false
      }
    }
    userhandle=(text)=>{
      console.log(text);
      this.setState({
        username:text
      })
    }
    pwdhandle=(text)=>{
      console.log(text);
      this.setState({
        pwd:text
      })
    }
    pnumberhandle=(text)=>{
        console.log(text);
        this.setState({
            phonenumber:text
        })
    }
    repwdhandle=(text)=>{
        console.log(text);
        this.setState({
            repwd:text
        })
    }
    register = () => {
      this.setState({isloading:true})
      myFetch.post('/register',{
        phonenumber:this.state.phonenumber,
        username:this.state.username,
        pwd:this.state.pwd,
        repwd:this.state.repwd
      }).then(res=>{
        if(res.data.username == '' || res.data.pwd == '' || res.data.repwd == ''){
          Alert.alert('用户名或密码或第二次密码为空','点击OK重新输入')
        }
        else if(res.data.username != '' && res.data.pwd == res.data.repwd){
          AsyncStorage.setItem('user',JSON.stringify(res.data))
            .then(()=>{
              this.setState({isloading:false})
              Actions.login();
            })
        }
        else if(res.data.pwd != res.data.repwd){
          Alert.alert('两次密码输入不一致','点击OK重新输入')
        }
        else{
          Alert.alert('输入错误','点击OK重新输入')
        }
      })
    }
    render() {
        return (
          <View style={{justifyContent:'center',flex:1}} >
            <View style={{alignItems:'center'}}>
              <View style={styles.every}>
                <Icon name="user" color="red"/>
                <TextInput placeholder='用户名'
                  onChangeText={this.userhandle}
                />
              </View>
            </View>
            <View style={{alignItems:'center'}}>
              <View style={styles.every}>
                <Icon name="form" color="red"/>
                <TextInput placeholder='密码'
                  onChangeText={this.pwdhandle}
                  secureTextEntry={true} 
                />
              </View>
            </View>
            <View style={{ alignItems:'center'}}>
              <View style={styles.every}>
                <Icon name="form" color="red"/>
                <TextInput placeholder='重新输入密码'
                  onChangeText={this.repwdhandle}
                  secureTextEntry={true} 
                />
              </View>
              
              <TouchableOpacity 
                style={styles.btn}
                onPress={this.register}
              >
                <Text>注册</Text>
              </TouchableOpacity>  
              <TouchableOpacity 
                style={styles.btn}
                onPress={()=>Actions.login()}
              >
                <Text>去登录</Text>
              </TouchableOpacity>  
            </View>
            {
              this.state.isloading?<View><Text style={{textAlign:'center',marginTop:50}}>正在注册...</Text></View>:null
            }      
          </View>
        )
    }
}
const styles = StyleSheet.create({
    every:{
        width:'80%',
        borderRadius:10,
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:20
    },
    btn:{
        width:'80%',
        height:40,
        backgroundColor:'#ccc',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,  
      }
})
