import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, AsyncStorage, StyleSheet,Alert,ImageBackground,ToastAndroid} from 'react-native'
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'
import {myFetch} from './index'
let rootUrl = 'https://www.fastmock.site/mock/1942df50e67c8173257ad3826b39e159/api'
export default class Register extends Component {
    constructor(){
      super();
      this.state={
        phonenum:'',
        username:'',
        pwd:'',
        repwd:'',
        checknum:'',
        yanzheng:'点击获取验证码',
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
    phonenumhandle=(text)=>{
      console.log(text);
      this.setState({
        phonenum:text
      })
    }
    checknumhandle=(text)=>{
      console.log(text);
      this.setState({
        checknum:text
      })
    }
    register = () => {
      this.setState({isloading:true});
      var myDate = new Date();
      let text = {username:this.state.username,phonenum:this.state.phonenum,pwd:this.state.pwd,repwd:this.state.repwd,uday:myDate} //获取数据
      let send = JSON.stringify(text);
      if(this.state.checknum==""){
        Alert.alert('','验证码不能为空');
      }else if(this.state.checknum == this.state.yanzheng){
        console.log('正确')
        fetch('http://172.17.100.2:3000/users/register',{   //Fetch方法y
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            console.log(res.success);
            if(res.success==true){ 
              console.log('成功');
              ToastAndroid.show('注册成功，即将进入登录页面...', ToastAndroid.SHORT);
              Actions.login();
            }
            else if(res.success==false){
              console.log('失败');              
              ToastAndroid.show('注册失败！！！', ToastAndroid.SHORT)
            }
          }
        )
      }else{
        // Alert.alert('','验证码不正确');
        console.log(this.state.yanzheng);
        console.log(this.state.checknum);
      }
      // myFetch.post('/register',{
      //   phonenumber:this.state.phonenumber,
      //   username:this.state.username,
      //   pwd:this.state.pwd,
      //   repwd:this.state.repwd
      // }).then(res=>{
      //   if(res.data.username == '' || res.data.pwd == '' || res.data.repwd == ''){
      //     Alert.alert('用户名或密码或第二次密码为空','点击OK重新输入')
      //   }
      //   else if(res.data.username != '' && res.data.pwd == res.data.repwd){
      //     AsyncStorage.setItem('user',JSON.stringify(res.data))
      //       .then(()=>{
      //         this.setState({isloading:false})
      //         Actions.login();
      //       })
      //   }
      //   else if(res.data.pwd != res.data.repwd){
      //     Alert.alert('两次密码输入不一致','点击OK重新输入')
      //   }
      //   else{
      //     Alert.alert('输入错误','点击OK重新输入')
      //   }
      //   Actions.login();
      // })
    }
    getcode = () =>{
      function random(max,min){
        return Math.round(Math.random()*(max-min)+min);
      }
      var strData = "";
      for(var i=0;i<5;i++){
        var num = random(0,9);//生成0-9的随机数
        var az = String.fromCharCode(random(97,122));//生成a-z
        strData = strData + num + az
      }
      //从随机字符库中随机取4个
      var str = "";
      for(var i=0;i<4;i++){
        str = str + strData[random(0,strData.length-1)];
      }
      console.log(str);
      this.setState({
        yanzheng:str
      })
    }
    render() {
        return (
          <ImageBackground style={{ flex: 1 }}
          source={require('../../images/back.png')}>
            <View style={{flex:1,paddingTop:70}}>
              <View style={{alignItems:'center'}}>
                <View style={styles.every}>
                  <Icon name="user" color="#79be3b"/>
                  <TextInput placeholder='用户名'
                    placeholderTextColor='#79be3b'
                    onChangeText={this.userhandle}
                  />
                </View>
              </View>
              <View style={{alignItems:'center'}}>
                <View style={styles.every}>
                  <Icon name="form" color="#79be3b"/>
                  <TextInput placeholder='密码'
                    placeholderTextColor='#79be3b'
                    onChangeText={this.pwdhandle}
                    secureTextEntry={true} 
                  />
                </View>
              </View>
              <View style={{ alignItems:'center'}}>
                <View style={styles.every}>
                  <Icon name="form" color="#79be3b"/>
                  <TextInput placeholder='重新输入密码'
                    placeholderTextColor='#79be3b'
                    onChangeText={this.repwdhandle}
                    secureTextEntry={true} 
                  />
                </View>
              </View>  
              <View style={{alignItems:'center'}}>
                <View style={styles.every}>
                  <Icon name="phone" color="#79be3b"/>
                  <TextInput placeholder='手机号'
                    placeholderTextColor='#79be3b'
                    onChangeText={this.phonenumhandle}
                  />
                </View>
              </View>
              <View style={{alignItems:'center'}}>
                <View style={styles.every}>
                  <Icon name="form" color="#79be3b"/>
                  <TextInput placeholder='输入验证码'
                    placeholderTextColor='#79be3b'
                    onChangeText={this.checknumhandle}
                  />
                </View>
              </View>
              <View style={{ alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity 
                  style={styles.every1}
                  onPress={this.getcode}
                >
                  {/* <Icon name="form" color="#79be3b" style={{marginLeft:'25%'}}/> */}
                  <Text style={{color:'#79be3b',textAlign:'center'}}>{this.state.yanzheng}</Text>
                </TouchableOpacity>
              </View>  
              <View style={{flexDirection:'row',marginTop:30}}>
                <TouchableOpacity 
                  style={styles.btn}
                  onPress={()=>Actions.login()}
                >
                  <Text style={styles.btntxt}>去登录</Text>
                </TouchableOpacity> 
                <TouchableOpacity 
                  style={styles.btn}
                  onPress={this.register}
                >
                  <Text style={styles.btntxt}>注册</Text>
                </TouchableOpacity>  
              </View>
              {/* {
                this.state.isloading?<View><Text style={{textAlign:'center',marginTop:50,color:'#fff'}}>正在注册...</Text></View>:null
              }       */}
            </View>
          </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    every:{
      width:'60%',
      height:45,
      borderRadius:10,
      borderWidth:2,
      borderColor:'#79be3b',
      flexDirection:'row',
      alignItems:'center',
      paddingLeft:'2%',
      marginTop:20,
      backgroundColor:'#fff',
    },
    every1:{
      width:'60%',
      height:45,
      borderRadius:10,
      borderWidth:2,
      borderColor:'#79be3b',
      flexDirection:'row',
      alignItems:'center',
      paddingLeft:'2%',
      marginTop:20,
      backgroundColor:'#fff',
      justifyContent:'center'
    },
    btn:{
      width:'30%',
      height:45,
      borderRadius:10,
      backgroundColor:'#79be3b',
      justifyContent:'center',
      alignItems:'center',
      marginTop:20,
      marginLeft:'13%'
    },
    btntxt:{
      color:'#fff',
      fontWeight:'bold',
      fontSize:15
    }
})
