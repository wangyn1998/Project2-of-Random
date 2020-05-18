import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
const styles = StyleSheet.create({
    line:{
        height:1,
        backgroundColor:'white',
        width:'100%'
    },
    score:{
        height :300,
        marginLeft:'15%',
        width:'70%',
        marginTop:150,
        borderRadius:15,
        backgroundColor:'rgba(0,0,0,0.4)'
    },
    scoretext:{
        fontWeight:'bold',
        color:'white',
        width:'100%',
        textAlign:"center",
        marginTop:100,
        fontSize:30,
        lineHeight:50
    },
    btn:{
        marginTop:40,
        backgroundColor:'white',
        height:50,
        width:'70%',
        marginLeft:'15%',
        borderRadius:45,
    },
    btntxt:{
        textAlign:'center',
        fontSize:30,
        color:'black'
    }
})
export default class Score extends Component {
    render() {
        return (
            <View style={{height:'100%',width:'100%',backgroundColor:'rgba(121,190,59,0.8)'}}>
                <View style={styles.line}></View>
                <View style={styles.score}>
                    <Text style={styles.scoretext}>您的得分是：{this.props.score} </Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=>Actions.game()}>
                    <Text style={styles.btntxt}>返回主页</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
