import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    ImageBackground
} from 'react-native'
const styles = StyleSheet.create({
    wrapper:{
        height:200,
        width:"100%",
    },
    body:{
        height:540,
        marginTop:50,
        width:'90%',
        marginLeft:'10%'
    },
    txt:{
        color:'#888888',
        width:'60%',
        marginLeft:'15%',
        marginTop:80,
        fontSize:25,
        lineHeight:50
    },
    top:{
        fontWeight:'bold',
        color:'#888888',
        width:'100%',
        textAlign:"center",
        marginTop:40,
        fontSize:36,
        lineHeight:50
    }
})
export default class KnowledgeContent extends Component {
    render() {
        return (
            <View>
                <View style={{backgroundColor:'#f6f6f6',height:'100%',width:'100%'}}>
                    <ScrollView>
                        <Text  style={styles.top}>{this.props.top}</Text>
                        <ImageBackground
                            style={styles.body}
                            source={require('../../images/pic1.jpg')}
                        >
                            <Text style={styles.txt}>{this.props.content}</Text>
                        </ImageBackground>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
