import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, AsyncStorage, ToastAndroid, Alert,StyleSheet} from 'react-native'
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'
import {myFetch} from './index'
let rootUrl = 'https://www.fastmock.site/mock/1942df50e67c8173257ad3826b39e159/api'
export default class Login extends Component {
    constructor(){
      super();
      this.state={
        username:'',
        pwd:'',
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
    login = () => {
      let text = {username:this.state.username,pwd:this.state.pwd} //获取数据
      let send = JSON.stringify(text);   //重要！将对象转换成json字符串
      fetch('http://172.17.100.2:3000/users/login',{   //Fetch方法y
          method: 'POST',
          headers: {'Content-Type': 'application/json; charset=utf-8'},
          body: send
      })
      .then(res => res.json())
      .then(
        res => {
          if(res.success){
            let text2 = {username:this.state.username} 
            let send = JSON.stringify(text2); 
            fetch(`http://172.17.100.2:3000/users/postday`,{
                method: 'POST',
                headers: {'Content-Type': 'application/json; charset=utf-8'},
                body: send
            })
            .then(res => res.json())
            .then(
                data => {
                    
                }
            )
            AsyncStorage.setItem('user',this.state.username);
            AsyncStorage.setItem('logif',true);
            ToastAndroid.show('即将进入主页面...', ToastAndroid.SHORT);
            Actions.boxPage();
          }
          else{
            ToastAndroid.show('用户名或密码错误，请重新输入', ToastAndroid.SHORT);
          }
        }
      )
    }
    render() {
        return (
          <View style={{flex:1,backgroundColor:'#fff',paddingTop:110}} 
      
          >
            <View style={{alignItems:'center'}}>
              <View style={styles.up}>
                <Icon name="user" color="#79be3b"/>
                <TextInput placeholder='用户名'
                  onChangeText={this.userhandle}
                />
              </View>
            </View>
            <View
              style={{
                alignItems:'center'
              }}
            >
              <View style={styles.up}>
                <Icon name="form" color="#79be3b"/>
                <TextInput placeholder='密码'
                  onChangeText={this.pwdhandle}
                  secureTextEntry={true} 
                />
              </View>
              <TouchableOpacity 
                style={styles.login}
                onPress={this.login}
              >
                <Text style={styles.logintxt}>登录</Text>
              </TouchableOpacity>  
              <View style={{flexDirection:'row',alignItems:'center',marginTop:30}}>
                <TouchableOpacity>
                  <Text style={styles.goto}
                        onPress={()=>Actions.findpwd()}
                  >忘记密码</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:'40%'}}>
                  <Text style={styles.goto}
                        onPress={()=>Actions.register()}
                  >去注册</Text>
                </TouchableOpacity>
              </View>
              {/* <View style={{width:'100%',height:'30%',backgroundColor:'red'}}> */}
                <Image source={require('../../images/girl.jpg')} style={styles.girl}/>
              {/* </View> */}
            </View>   
            {/* {
              this.state.isloading?<View><Text style={{textAlign:'center',marginTop:50}}>正在登录...</Text></View>:null
            }       */}
          </View>
        )
    }
}
const styles = StyleSheet.create({
  up:{
    width:'60%',
    height:50,
    borderRadius:10,
    borderWidth:2,
    borderColor:'#79be3b',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:'2%',
    marginTop:20
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
  goto:{
    color:'#79be3b',
    borderBottomWidth:1,
    borderBottomColor:'#79be3b'
  },
  girl:{
    marginTop:40,
    width:'100%',
    height:'45%'
  }
})
