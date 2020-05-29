import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
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
// const data=[
//     {
//         num:1,
//         content:'考试信息1',
//     },
//     {
//         num:2,
//         content:'考试信息2',
//     },
//     {
//         num:3,
//         content:'考试信息3',
//     },
//     {
//         num:4,
//         content:'考试信息4',
//     },
//     {
//         num:5,
//         content:'考试信息5',
//     },
//     {
//         num:6,
//         content:'考试信息6',
//     },
//     {
//         num:7,
//         content:'考试信息7',
//     },
//     {
//         num:8,
//         content:'考试信息8',
//     },
//     {
//         num:9,
//         content:'考试信息9',
//     },
//     {
//         num:10,
//         content:'考试信息10',
//     },
//     {
//         num:11,
//         content:'考试信息11',
//     },
//     {
//         num:12,
//         content:'考试信息12',
//     },
//     {
//         num:13,
//         content:'考试信息13',
//     },
//     {
//         num:14,
//         content:'考试信息14',
//     }

// ]
export default class Exam extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            isLoading:false
        }
    }
    componentDidMount(){
        fetch('http://172.17.100.2:3000/users/test')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res,
                isLoading:true
            })
        });
        console.log(this.state.data);
    }
    render() {
        return (
            <View style={{backgroundColor:'white'}}>
                <ScrollView>
                    <View style={styles.wrapper}>
                        <Image source={require('../../images/exam.jpg')} style={{width:"100%",height:"100%"}}/>
                    </View>
                    <View style={{marginBottom:10,marginTop:10}}></View>
                    {
                        this.state.isLoading == false
                        ?<View style={{width:'100%',height:250,backgroundColor:'white',justifyContent:'center'}}>
                            <ActivityIndicator color="red" size='large'/>
                        </View>
                        :<View>
                            <FlatList 
                                data={this.state.data}
                                renderItem={({index,item})=>
                                    <TouchableOpacity style={styles.line} onPress={()=>Actions.examContent({top:item.testTitle,content:item.testContent})}>
                                        <View style={styles.txt}>
                                            <Text style={{color:index<3?'red':'#E67D34',width:30,paddingLeft:10}}>{index+1}</Text>
                                            <Text style={{color:'black'}}>{item.testTitle}</Text>
                                        </View>
                                        <View style={{backgroundColor:'lightgrey',height:2,width:'100%'}}></View>
                                    </TouchableOpacity>
                            }/>
                        </View>
                    }
                </ScrollView> 
            </View>
        )
    }
}
