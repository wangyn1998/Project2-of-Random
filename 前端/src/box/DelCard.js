import React, { Component } from 'react'
import {View,Text,StyleSheet,Button,Animated, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Icon} from '@ant-design/react-native';

export default class DelCard extends Component {
    constructor(){
        super();
        this.state={
            opacity:new Animated.Value(0)
        }
    }
    componentDidMount(){
        Animated.timing(this.state.opacity,{
            toValue:1,
            duration:1000
        }).start()
    }
    back=()=>{
        Animated.timing(this.state.opacity,{
            toValue:0,
            duration:1000
        }).start(Actions.pop)
    }
    del=()=>{
        let text1 = {id:this.props.id} 
        let send = JSON.stringify(text1); 
        fetch(`http://172.17.100.2:3000/users/delcard`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        })
        .then(res => res.json())
        .then(
            data => {
                if(data.success){
                    Actions.popTo('learn');
                    Actions.refresh({'key':'1111'});

                }
            }
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.innerBox,{opacity:this.state.opacity}]}>
                    <TouchableOpacity onPress={this.back} style={{marginLeft:'90%',marginTop:10}}><Icon name='close' color="black"/></TouchableOpacity>
                    <View style={{justifyContent:'center',height:'70%'}}>
                    <Text style={{textAlign:'center',width:'100%',fontSize:19}}>确定要删除吗</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:30}}>
                        <TouchableOpacity style={styles.btn} onPress={()=>{this.del()}}><Text>确定</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={()=>{Actions.pop()}}><Text>取消</Text></TouchableOpacity>
                    </View>
                    </View>
                </Animated.View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        // backgroundColor:'transparent',
        backgroundColor:'rgba(50,50,50,.5)',
        position:'absolute',
        left:0,
        top:0,
        right:0,
        bottom:0,
        justifyContent:'center',
        alignItems:'center'
    },
    innerBox:{
        width:'60%',
        height:'22%',
        backgroundColor:'#ffffff',
        margin:15
    },
    btn:{
        justifyContent:'center',
        alignItems:'center',
        width:'30%',
        height:'80%',
        borderColor:'#79be3b',
        borderRadius:7,
        borderWidth:2
    },
    btn1:{
        justifyContent:'center',
        alignItems:'center',
        width:'30%',
        height:'80%',
        backgroundColor:'#FFD331',
        borderRadius:7
    }
})