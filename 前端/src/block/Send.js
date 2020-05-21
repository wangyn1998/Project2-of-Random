import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, AsyncStorage, StyleSheet,Alert,ScrollView, FlatList,ToastAndroid} from 'react-native'
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: '请选择',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'从相册中选择',
    cancelButtonTitle:'取消',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    }
};
export default class Send extends Component {
    constructor(){
        super();
        this.state ={
            content : '',
            imgUrl: '',
            user:{}
        }
    }
    componentDidMount(){
        fetch('http://172.17.100.2:3000/users/my')
        .then((res)=>res.json())
        .then((res)=>{
            
            this.setState({
                user:res[0]
            })
            console.log(this.state.user);
        })
    }
    submit = ()=> { 
        // console.log(this.state.content);
        
        // console.log(this.state.user)
        let text = this.state;
        let send = JSON.stringify(text);
        console.log(send);
        fetch(`http://172.17.100.2:3000/users/addpost`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        })
        .then(res => res.json())
        .then(
            res => {
                if(res.success){
                    Actions.block();
                    
                }
            }
        )
        let text2 = {userName:this.state.user.userName,updateTime:new Date(),taskId:4,taskContent:'发帖',taskScore:10,phone:this.state.user.userPhone} //获取数据
        let send2 = JSON.stringify(text2);   //重要！将对象转换成json字符串
        fetch('http://172.17.100.2:3000/users/getscore',{   //Fetch方法y
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send2
        })
        .then(res => res.json())
        .then(
            res => {
                if(res.success){
                    ToastAndroid.show('发帖子成功，积分+10',ToastAndroid.SHORT);
                }
                else{
                    ToastAndroid.show('发帖子发生错误！！！',ToastAndroid.SHORT);
                }
            }
        )
    }
    addPost = (text) => {
        this.setState({
            content:text
        })
    }
    takephoto = ()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else {
                const source = { uri: response.uri };
                console.log(response.uri);
                this.setState({
                    imgUrl: response.uri
                });
            }
        });
    }
    render() {
        return (
            <ScrollView style={{backgroundColor:'#fff',width:'100%',height:'100%'}}>
                <View style={{flex:1}}>
                    <View style={styles.nav}>
                        <TouchableOpacity onPress={()=>{Actions.block()}}>
                            <Image source={require('../../images/my-cuo.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.navtxt}>发帖</Text>
                        <TouchableOpacity onPress={this.submit}>
                            <Text style={styles.navtxtsubmit}>发布</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:'100%',height:710,borderTopColor:'#ccc',borderTopWidth:1}}>
                        <TextInput 
                            onChangeText={(text)=>{this.addPost(text)}}
                            placeholder='XXXXXXXXXXXXX......'
                            placeholderTextColor={"#ccc"} 
                            style={styles.returntxt}
                            multiline={true}
                        />
                        <Image style={{width:'70%',height:300}} source={{uri:this.state.imgUrl}} />
                    </View>
                    <View style={styles.heng}>
                        <TouchableOpacity style={{marginLeft:'5%'}} onPress={this.takephoto}>
                            <Image source={require('../../images/my-picture.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:'20%'}}>
                            <Image source={require('../../images/my-at.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:'20%'}}>
                            <Image source={require('../../images/my-topic.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:'20%'}}>
                            <Image source={require('../../images/my-emo.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    nav:{
        width:'100%',
        height:60,
        backgroundColor:'white',
        borderBottomColor:'#bbb',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center',
        padding:10,
    },
    navtxt:{
        fontSize:20,
        marginLeft:'35%',
        textAlign:'center'
    },
    navtxtsubmit:{
        fontSize:17,
        marginLeft:'50%',
        textAlign:'center',
        color:'#79be3b',
        zIndex:999
    },
    returntxt:{
        width:'100%',
        marginTop:20,
        fontSize:17
    },
    heng:{
        width:'100%',
        height:60,
        backgroundColor:'#dcd9d9',
        borderBottomColor:'#bbb',
        borderBottomWidth:1,
        borderTopColor:'#bbb',
        borderTopWidth:1,
        flexDirection:'row',
        alignItems:'center',
    }
})