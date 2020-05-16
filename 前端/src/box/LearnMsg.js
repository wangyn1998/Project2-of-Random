import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity,Dimensions, StyleSheet } from 'react-native'
import {Icon} from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const {width,scale,height}=Dimensions.get('window');
const w=width,h=height;
export default class LearnMsg extends Component {
    constructor(){
        super();
        this.state={
            num:1,
            que:'',
            ans:''
        }
    }
    changeNum=()=>{
        this.setState({
            num:2
        })
    }
    componentDidMount(){
        let text1 = {cardid:this.props.id} 
        let send = JSON.stringify(text1); 
        var a=this.props.que;
        var b=this.props.ans;
        this.setState({
            que:a,
            ans:b
        })
        fetch(`http://172.17.100.2:3000/users/cardId`,{
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
    async componentDidUpdate(){
        if(this.state.num==2){
            await fetch('http://172.17.100.2:3000/users/selcard')
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    que:res[0].cardQues,
                    ans:res[0].cardAns
                })
            })
            this.props.changeNum();
            this.setState({
                num:1
            })
        }
    }
    render() {
        return (
            <View style={{flex:1,width:w,height:h,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
               <Image source={require('../../images/pic1.jpg')} style={{width:w,height:h*0.95,resizeMode:'stretch',position:'relative'}}/>
               <TouchableOpacity onPress={()=>{Actions.pop()}} style={{position:'absolute',right:40,top:60}}><Icon name='close' color="black"/></TouchableOpacity>
               <View style={{position:"absolute",width:'100%',alignItems:'center',top:'20%',padding:35}}>
                    <Text style={{fontSize:37}}>{this.state.que}</Text>
                    <Text style={{fontSize:32,padding:20}}>{this.state.ans}</Text>
               </View>
               <View style={styles.edit}>
                   <TouchableOpacity style={styles.btn} onPress={()=>{Actions.updateLearn({que:this.props.que,ans:this.props.ans,id:this.props.id,'change':this.changeNum})}}>
                   <Icon name='edit' color='#FD8F71'/>
                   <Text style={{marginRight:10,marginLeft:5}}>编辑</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.btn} onPress={()=>{Actions.delCard({id:this.props.id,'change':this.props.changeNum})}}>
                   <Icon name='delete' color="#FFD331"/>
                   <Text style={{marginRight:10,marginLeft:5}}>删除</Text>
                   </TouchableOpacity>
               </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    edit:{
        position:'absolute',
        right:80,
        bottom:80,
        flexDirection:'row',
        alignItems:'center'
    },
    btn:{
        flexDirection:'row',
        alignItems:'center'
    }
})