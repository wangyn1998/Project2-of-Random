import React, { Component } from 'react';
import Button from 'react-native-button';
import Swiper from 'react-native-swiper';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    AsyncStorage,
    ToastAndroid,
    BackHandler
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
    game:{
        height:180,
        width:'30%',
        marginLeft:'15%',
        marginRight:'5%',
        marginBottom:30,
        backgroundColor:'#00C2B2'
    },
    knowledge:{
        height:180,
        width:'30%',
        marginLeft:'5%',
        marginRight:'15%',
        marginBottom:30,
        backgroundColor:'#FFF162'
    },
    everyday:{
        height:180,
        width:'30%',
        marginLeft:'15%',
        marginRight:'5%',
        marginBottom:30,
        backgroundColor:'#FED2DF'
    },
    test:{
        height:180,
        width:'30%',
        marginLeft:'5%',
        marginRight:'15%',
        marginBottom:30,
        backgroundColor:'#B114E8'
    },
    txt1:{
        marginTop:70,
        fontSize:30,
        marginLeft:'30%'
    },
    txt2:{
        marginTop:70,
        fontSize:30,
        marginLeft:'10%'
    }
})

export default class Discover extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.wrapper}>
                        <Swiper>
                            <View >
                                <Image source={require('../../images/lb1.png')} style={{width:"100%",height:"100%"}} />
                            </View>
                            <View >
                                <Image source={require('../../images/lb2.png')} style={{width:"100%",height:"100%"}} />
                            </View>
                        </Swiper>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.game}>
                            <Button>
                                <Text style={styles.txt1}>游戏</Text>
                            </Button>
                        </View>
                        <View style={styles.knowledge}>
                            <Button>
                                <Text style={styles.txt1}>知识</Text>
                            </Button>
                        </View>
                        <View style={styles.everyday}>
                            <Button>
                                <Text style={styles.txt2}>每日推荐</Text>
                            </Button>
                        </View>
                        <View style={styles.test}>
                            <Button>
                                <Text style={styles.txt2}>考试信息</Text>
                            </Button>
                        </View>
                    </View>
                </ScrollView>
                
            </View>
        )
    }
}
