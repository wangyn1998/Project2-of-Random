import React, { Component } from 'react'
import {View,Text,StyleSheet,Button,Animated, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Icon} from '@ant-design/react-native';

export default class Selection extends Component {
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
        let text1 = {id:this.props.id} 
        let send = JSON.stringify(text1); 
        fetch(`http://172.17.100.2:3000/users/boxId`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        })
        .then(res => res.json())
        .then(
            data => {

            }
        )
    }
    back=()=>{
        Animated.timing(this.state.opacity,{
            toValue:0,
            duration:1000
        }).start(Actions.pop)
    }
    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.innerBox,{opacity:this.state.opacity}]}>
                    <TouchableOpacity onPress={this.back} style={{marginLeft:'90%',marginTop:10}}><Icon name='close' color="black"/></TouchableOpacity>
                    <View style={{justifyContent:'center',height:'70%'}}>
                    <Text style={{textAlign:'center',width:'100%',fontSize:19}}>请选择</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:30}}>
                        <TouchableOpacity style={styles.btn} onPress={()=>{Actions.pop();Actions.test({'change':this.props.change})}}><Text>自测</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btn1} onPress={()=>{Actions.pop();Actions.learn()}}><Text>积累</Text></TouchableOpacity>
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
        backgroundColor:'#79be3b',
        borderRadius:7
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