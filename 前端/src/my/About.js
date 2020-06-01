import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, AsyncStorage, StyleSheet,Alert,ScrollView, FlatList} from 'react-native'
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'
const members= [
    {name:'王予诺（项目经理、UI设计师、开发工程师、测试工程师）',email:'Email：928069834@qq.com',github:'Github：https://github.com/wangyn1998'},
    {name:'杨迪（技术总监、UI设计师、开发工程师、测试工程师）',email:'Email：736208296@qq.com',github:'Github：https://github.com/YangDiaa'},
    {name:'郑尚姿（技术总监、UI设计师、开发工程师、测试工程师）',email:'Email：1643613240@qq.com',github:'Github：https://github.com/zhengshangzi'},
    {name:'范钰敏（技术总监、、UI设计师、开发工程师、测试工程师）',email:'Email：1668576168@qq.com',github:'Github：https://github.com/fym1'},
    {name:'杜瑜萌（产品经理、UI设计师、开发工程师、测试工程师）',email:'Email：272780382@qq.com',github:'Github：https://github.com/duyumengdym'},
    {name:'张宇娟（市场总监、、UI设计师、开发工程师、测试工程师）',email:'Email：1123243305@qq.com',github:'Github：https://github.com/zhangyujuan123'},
]
export default class About extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:'#fff',width:'100%',height:'100%',padding:10}}>
                <View style={{flex:1}}>
                    <Text style={styles.ltxt}>项目简介</Text>
                    <Text style={styles.mtxt}>盒我学App是一款方便用户复习知识以及摄取新知识的软件。</Text>
                    <Text style={styles.mtxt}>盒我学App努力让不同年龄阶段的用户体验在娱乐中学习，提高学生这一阶层用户对于课本知识（特别是英语单词）的记忆强度。</Text>
                    <Text style={styles.mtxt}>对于学生阶层来说，每天以及每周在学校学习很多课本上的知识，在复习的时候无法判断自己对于知识掌握的情况，这款APP模仿放在盒子中的卡片，卡片的正面写问题，背面写答案，学生用户可以通过卡片的这种手段判断自己对于知识点掌握的情况。对于其他用户可以通过小游戏以及知识推送，丰富自己的知识储备，还可以通过发表言论交到好朋友。</Text>
                    <Text style={styles.ltxt}>项目成员</Text>
                    <FlatList 
                        data={members}
                        numColumns = {1}
                        renderItem={({item})=>(
                            <View>
                                <Text style={styles.member}>{item.name}</Text>
                                <Text style={styles.member1}>{item.email}</Text>
                                <Text style={styles.member1}>{item.github}</Text>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    ltxt:{
        fontSize:20,
        marginTop:15
    },
    mtxt:{
        fontSize:15,
        marginTop:10
    },
    member:{
        marginTop:10
    },
    member1:{
        marginLeft:'5%'
    }
})