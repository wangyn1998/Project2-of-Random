import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';
const styles = StyleSheet.create({
    wrapper:{
        height:250,
        width:"100%"
    },
    body:{
        height:420,
        width:'100%',
        marginTop:50,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    word:{
        height:180,
        width:'40%',
        marginLeft:'5%',
        marginRight:'5%',
        marginBottom:30,
        backgroundColor:'#55DBD0'
    },
    phrase:{
        height:180,
        width:'40%',
        marginLeft:'5%',
        marginRight:'5%',
        marginBottom:30,
        backgroundColor:'#FFF162'
    },
    answer:{
        height:180,
        width:'90%',
        marginLeft:'5%',
        marginRight:'5%',
        marginBottom:30,
        backgroundColor:'white'
    },

    txt1:{
        fontSize:25,
        marginLeft:'20%',
        marginTop:'15%'
    },
    txt2:{
        marginTop:70,
        fontSize:30,
        marginLeft:'10%'
    }
})

export default class Game extends Component {
    render() {
        return (
            <View>
                <View style={styles.wrapper}>
                    <Image source={require('../../images/lb1.png')} style={{width:"100%",height:"100%"}}/>
                </View>
                <View style={styles.body}>
                        <View style={styles.word}>
                            <TouchableOpacity>
                                <Image source={require('../../images/word.png')} style={{width:"60%",height:"60%",marginLeft:"20%"}} />
                                <Text style={styles.txt1}>我爱记单词</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.phrase}>
                            <TouchableOpacity>
                                <Image source={require('../../images/phrase.png')} style={{width:"60%",height:"60%",marginLeft:"20%"}} />
                                <Text style={styles.txt1}>成语大闯关</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.answer}>
                            <TouchableOpacity>
                                <Image source={require('../../images/answer.jpg')} style={{width:"100%",height:"80%"}} />
                                <Text style={styles.txt2}>闯关答题</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        )
    }
}
