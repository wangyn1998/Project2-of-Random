import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
const styles = StyleSheet.create({
    wrapper:{
        height:200,
        width:"100%",
    },
    body:{
        height:540,
        marginTop:10,
        width:'90%',
        marginLeft:'10%'
    },
    txt:{
        color:'#888888',
        width:'60%',
        marginLeft:'15%',
        marginTop:80,
        fontSize:24,
        lineHeight:50
    }
})
export default class Everyday extends Component {
    render() {
        return (
            <View style={{backgroundColor:'white'}}>
                <ScrollView>
                <View style={styles.wrapper}>
                        <Image source={require('../../images/recommend.png')} style={{width:"100%",height:"100%"}}/>
                    </View>
                    <ImageBackground
                        style={styles.body}
                        source={require('../../images/pic1.jpg')}
                    >
                        <Text style={styles.txt}>与其羡慕他人智慧，不如自己勤奋补拙；与其羡慕他人优秀，不如自己奋斗不止；与其羡慕他人坚强，不如自己百炼成钢；与其羡慕他人成功，不如自己厚积薄发。</Text>
                    </ImageBackground>
                </ScrollView>
            </View>
        )
    }
}
