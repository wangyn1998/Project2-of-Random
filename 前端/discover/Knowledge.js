import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image 
} from 'react-native'
const styles = StyleSheet.create({
    wrapper:{
        height:250,
        width:"100%"
    },
    line:{
        height:50,
        width:'100%',
        backgroundColor:'white'
    },
    txt:{
        fontSize:40,
        flexDirection:'row',
        marginTop:10,
        marginBottom:10,
    }
})
const data=[
    {
        num:1,
        content:'知识1',
    },
    {
        num:2,
        content:'知识2',
    },
    {
        num:3,
        content:'知识3',
    },
    {
        num:4,
        content:'知识4',
    },
    {
        num:5,
        content:'知识5',
    },
    {
        num:6,
        content:'知识6',
    },
    {
        num:7,
        content:'知识7',
    },
    {
        num:8,
        content:'知识8',
    },
    {
        num:9,
        content:'知识9',
    },
    {
        num:10,
        content:'知识10',
    },
    {
        num:11,
        content:'知识11',
    },
    {
        num:12,
        content:'知识12',
    },
    {
        num:13,
        content:'知识13',
    },
    {
        num:14,
        content:'知识14',
    }

]
export default class Knowledge extends Component {
    render() {
        return (
            <View style={{backgroundColor:'white'}}>
                <ScrollView>
                    <View style={styles.wrapper}>
                        <Image source={require('../../images/knowledge.jpg')} style={{width:"100%",height:"100%"}}/>
                    </View>
                    <View style={{marginBottom:10,marginTop:10}}></View>
                    {
                        data.map((item)=>(
                            <View style={styles.line}>
                                <View style={styles.txt}>
                                    <Text style={{color:'#E67D34',width:30,paddingLeft:10}}>{item.num}</Text>
                                    <Text style={{color:'black'}}>{item.content}</Text>
                                </View>
                                <View style={{backgroundColor:'lightgrey',height:2,width:'100%'}}></View>
                            </View>
                        ))
                    }
                </ScrollView> 
            </View>
        )
    }
}
