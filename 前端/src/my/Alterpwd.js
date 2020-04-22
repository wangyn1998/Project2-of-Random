import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, AsyncStorage, StyleSheet,Alert,ScrollView, FlatList} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native'

export default class Alterpwd extends Component {
    constructor(){
        super();
        this.state={
          oldpwd:'',
          newpwd:'',
          oldeye:require('../../images/my-see.png'),
          oldsecure:false,
          newsecure:true,
          neweye:require('../../images/my-see.png'),
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
        if(this.state.oldeye == "20"){
            console.log('true')
            this.setState({
                oldeye:require('../../images/my-notsee.png'),
                oldsecure:true,
            })
        }
        if(this.state.oldeye == "23"){
            console.log('true')
            this.setState({
                oldeye:require('../../images/my-see.png'),
                oldsecure:false,
            })
        }
    }
    newpwdpress=()=>{
        if(this.state.neweye == "20"){
            console.log('true')
            this.setState({
                neweye:require('../../images/my-notsee.png'),
                newsecure:true,
            })
        }
        if(this.state.neweye == "23"){
            console.log('true')
            this.setState({
                neweye:require('../../images/my-see.png'),
                newsecure:false,
            })
        }
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
                                placeholder='8-16位，至少包含数字/字母/字符2种组合'
                                onChangeText={this.oldpwdhandle}
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
                            <Text style={styles.logintxt}>确定</Text>
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