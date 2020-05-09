import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, AsyncStorage, StyleSheet,Alert,ScrollView, FlatList} from 'react-native'
export default class Personal extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            sex:'',
            birthday:'',
            class:'',
            sign:'',
            userImage:''
        }
    }
    usernamehandle=(text)=>{
        console.log(text);
        this.setState({
          username:text
        })
    }
    sexhandle=(text)=>{
        console.log(text);
        this.setState({
            sex:text
        })
    }
    birthdayhandle=(text)=>{
        console.log(text);
        this.setState({
            birthday:text
        })
    }
    classhandle=(text)=>{
        console.log(text);
        this.setState({
            class:text
        })
    }
    signhandle=(text)=>{
        console.log(text);
        this.setState({
            sign:text
        })
    }
    componentDidMount(){
        fetch('http://172.17.100.2:3000/users/my')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            var d0 = [];
            var tupian = '';
            (res[0].userImage=='-' || res[0].userImage==null)?tupian="http://img2.3png.com/eebe5ef277285d150546fd77d248786d2a9e.png":tupian=res[0].userImage;
            this.setState({
                username:res[0].userName,
                sex:res[0].userSex,
                birthday:res[0].userBir,
                class:res[0].userStudy,
                sign:res[0].userSign,
                userImage:tupian
            })
        })
    }
    render() {
        return (
            <ScrollView style={{backgroundColor:'#fff',width:'100%',height:'100%'}}>
                <View style={{flex:1,alignItems:'center'}}>
                    <View style={styles.touxiang}>
                        <Image source={{uri:this.state.userImage}} style={{width:100,height:100}}/>
                    </View>
                    <TouchableOpacity style={styles.huan}>
                        <Text>更换头像</Text>
                    </TouchableOpacity>
                    <View style={{width:'80%',marginTop:40}}>
                        <View style={styles.own}>
                            <Text style={styles.owntxt}>昵称</Text>
                            <TextInput 
                                placeholder='用户名'
                                placeholderTextColor='#ccc'
                                style={{marginLeft:'5%'}}
                                onChangeText={this.usernamehandle}
                                value={this.state.username}
                            />
                        </View>
                        <View style={styles.own}>
                            <Text style={styles.owntxt}>性别</Text>
                            <TextInput 
                                placeholder='性别'
                                placeholderTextColor='#ccc'
                                style={{marginLeft:'5%'}}
                                onChangeText={this.sexhandle}
                                value={this.state.sex}
                            />
                        </View>
                        <View style={styles.own}>
                            <Text style={styles.owntxt}>生日</Text>
                            <TextInput 
                                placeholder='生日'
                                placeholderTextColor='#ccc'
                                style={{marginLeft:'5%'}}
                                onChangeText={this.birthdayhandle}
                                value={this.state.birthday}
                            />
                        </View>
                        <View style={styles.own}>
                            <Text style={styles.owntxt}>学段</Text>
                            <TextInput 
                                placeholder='学段'
                                placeholderTextColor='#ccc'
                                style={{marginLeft:'5%'}}
                                onChangeText={this.classhandle}
                                value={this.state.class}
                            />
                        </View>
                        <View style={styles.own}>
                            <Text style={styles.owntxt}>签名</Text>
                            <TextInput 
                                placeholder='签名'
                                placeholderTextColor='#ccc'
                                style={{marginLeft:'5%'}}
                                onChangeText={this.signhandle}
                                value={this.state.sign}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.sure}>
                        <Text style={{color:'#fff',fontSize:20}}>确认</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    touxiang:{
        width:100,
        height:100,
        borderRadius:50,
        backgroundColor:'#fff',
        overflow:'hidden',
        borderColor:'#79be3b',
        borderWidth:1,
        marginTop:30,
    },
    huan:{
        width:'25%',
        height:30,
        borderWidth:1,
        borderColor:'#79be3b',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:10
    },
    own:{
        width:'100%',
        height:50,
        borderBottomWidth:1,
        borderBottomColor:'#ccc',
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'red',
        paddingLeft:'5%',
        marginTop:5
    },
    owntxt:{
        fontSize:17
    },
    sure:{
        width:'50%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'#79be3b',
        marginTop:40
    }
})
