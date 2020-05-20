import React, { Component } from 'react'
import { Text, View, Image,Dimensions, TouchableOpacity,StyleSheet, TextInput } from 'react-native'
import {Icon} from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const {width,scale,height}=Dimensions.get('window');
const w=width,h=height;
export default class UpdateLearn extends Component {
    constructor(){
        super();
        this.state={
            text1:'',
            text2:'',
            num:1
        }
    }
    async componentDidMount(){
        // var a=this.props.que,
        // b=this.props.ans;
        // this.state={
        //     text1:a,
        //     text2:b
        // }
        await fetch('http://172.17.100.2:3000/users/selcard')
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    text1:res[0].cardQues,
                    text2:res[0].cardAns
                })
            })
    }
    save=()=>{
        let text = {id:this.props.id,que:this.state.text1,ans:this.state.text2} 
        let send = JSON.stringify(text);
        fetch(`http://172.17.100.2:3000/users/updatecard`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        })
        .then(res => res.json())
        .then(
            data => {
                if(data.success){
                    Actions.pop({que:this.state.text1,ans:this.state.text2});
                    this.props.change();
                    this.setState({
                        num:2
                    })
                }
            }
        )
    }
    changeText1=(text)=>{
        var a=this.props.que;
        if(this.state.text1==''){
            this.setState({
                text1:a
            })
        }else{
            this.setState({
                text1:text
            })
        }
    }
    changeText2=(text)=>{
        console.log(this.state.text1);
        var b=this.props.ans;
        if(text==''){
            this.setState({
                text2:b
            })
        }else{
            this.setState({
                text2:text
            })
        }
    }
    render() {
        return (
            <View style={{flex:1,width:w,height:h,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
               <Image source={require('../../images/pic1.jpg')} style={{width:w,height:h*0.95,resizeMode:'stretch',position:'relative'}}/>
               <TouchableOpacity onPress={()=>{Actions.pop()}} style={{position:'absolute',right:40,top:60}}><Icon name='close' color="black"/></TouchableOpacity>
               <View style={{position:'absolute',top:'20%',width:'100%',alignItems:'center'}}>
                    <View style={styles.que}>
                        <Text style={{fontSize:27,marginRight:20}}>问题</Text>
                        <Image source={require('../../images/box-a1.png')} style={{position:'relative',width:'50%',height:h*0.2,resizeMode:'stretch'}}/>
                        <TextInput style={{left:w*0.36,top:10,position:'absolute',width:'45%',height:h*0.18,fontSize:16}} multiline={true} autoFocus={true} defaultValue={this.state.text1} onChangeText={this.changeText1}/>
                    </View>
                    <View style={styles.que}>
                        <Text style={{fontSize:27,marginRight:20}}>答案</Text>
                        <Image source={require('../../images/box-a1.png')} style={{position:'relative',width:'50%',height:h*0.2,resizeMode:'stretch'}}/>
                        <TextInput style={{left:w*0.36,top:10,position:'absolute',width:'45%',height:h*0.18,fontSize:16}} multiline={true} defaultValue={this.state.text2} onChangeText={this.changeText2}/>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={()=>{this.save()}}><Text style={{fontSize:20}}>保存</Text></TouchableOpacity>
               </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    btn:{
        justifyContent:'center',
        alignItems:'center',
        width:'23%',
        height:h*0.06,
        backgroundColor:'#79be3b',
        borderRadius:7,
        marginTop:10
    },
    que:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:30
    }
})