import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, AsyncStorage, StyleSheet,Alert,ScrollView, FlatList} from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Send extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:'#fff',width:'100%',height:'100%'}}>
                <View style={{flex:1}}>
                    {/* <View style={styles.nav}>
                        <TouchableOpacity onPress={()=>{Actions.block()}}>
                            <Image source={require('../../images/my-cuo.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.navtxt}>发帖</Text>
                        <TouchableOpacity>
                            <Text style={styles.navtxtsubmit}>提交</Text>
                        </TouchableOpacity>
                    </View> */}
                    <View style={{width:'100%',height:650,borderTopColor:'#ccc',borderTopWidth:1}}>
                        <TextInput 
                            placeholder='XXXXXXXXXXXXX......'
                            placeholderTextColor={"#ccc"} 
                            style={styles.returntxt}
                            multiline={true}
                        />
                    </View>
                    <View style={styles.heng}>
                        <TouchableOpacity style={{marginLeft:'5%'}}>
                            <Image source={require('../../images/my-picture.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:'20%'}}>
                            <Image source={require('../../images/my-at.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:'20%'}}>
                            <Image source={require('../../images/my-topic.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:'20%'}}>
                            <Image source={require('../../images/my-emo.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    nav:{
        width:'100%',
        height:60,
        borderBottomColor:'#bbb',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center',
        padding:10,
    },
    navtxt:{
        fontSize:20,
        marginLeft:'35%',
        textAlign:'center'
    },
    navtxtsubmit:{
        fontSize:17,
        marginLeft:'40%',
        textAlign:'center',
        color:'#79be3b'
    },
    returntxt:{
        width:'100%',
        marginTop:20,
        fontSize:17
    },
    heng:{
        width:'100%',
        height:60,
        backgroundColor:'#dcd9d9',
        borderBottomColor:'#bbb',
        borderBottomWidth:1,
        borderTopColor:'#bbb',
        borderTopWidth:1,
        flexDirection:'row',
        alignItems:'center',
    }
})