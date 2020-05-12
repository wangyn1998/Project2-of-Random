import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, AsyncStorage, StyleSheet,Alert,ScrollView, FlatList} from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Set extends Component {
    tuichu=()=>{
        console.log('111');
        let text = {logout:true} //获取数据
        let send = JSON.stringify(text);   //重要！将对象转换成json字符串
        fetch('http://172.17.100.2:3000/users/logout',{   //Fetch方法y
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        })
        .then(res => res.json())
        .then(
            res => {
                if(res.success){
                    Actions.login();
                }
                else{
                    ToastAndroid.show('出现错误，请重新退出登录', ToastAndroid.SHORT);
                }
            }
        )
        
    }
    render() {
        return (
            <ScrollView style={{backgroundColor:'#fff',width:'100%',height:'100%'}}>
                <View style={{flex:1,alignItems:'center'}}>
                <View style={styles.biglist}>
                        <TouchableOpacity style={styles.littlelist}
                            onPress={this.tuichu}
                        >
                            <Text style={styles.listtxt}>退出登录</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.littlelist}
                            onPress={()=>{Actions.alterpwd()}}>
                            <Text style={styles.listtxt}>修改密码</Text>
                            <Text style={styles.listtxt1}>详细信息 ></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    biglist:{
        alignItems:'center',
        width:'100%',
        borderTopColor:'#ccc',
        borderTopWidth:1,
    },
    littlelist:{
        width:'100%',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        height:45,
        paddingLeft:'5%',
        alignItems:'center',
        flexDirection:'row'
    },
    listtxt:{
        fontSize:17,
        width:'30%',
    },
    listtxt1:{
        fontSize:17,
        color:'#bbb',
        marginLeft:'45%'
    }
})
