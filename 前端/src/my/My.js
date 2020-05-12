import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity, AsyncStorage, StyleSheet,Alert,ScrollView, FlatList,ToastAndroid} from 'react-native'
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux'
export default class My extends Component {
    constructor(){
        super();
        this.state={
            scores:[],
            user:{},
            boxes:[
                {name:'盒子',num:0,img:require('../../images/my-box1.png'),unit:'个',txtcolor:'#ff8e14'},
                {name:'卡片',num:0,img:require('../../images/my-box2.png'),unit:'个',txtcolor:'#67e5fb'},
                {name:'积分',num:0,img:require('../../images/my-box3.png'),unit:'分',txtcolor:'#fed2df'},
            ],
            taskId:'',
            taskContent:'',
            score:0,
            isClick:true,
        }
    }
    componentDidMount(){
        // 发起请求
        fetch('http://172.17.100.2:3000/users/rank')
        .then((res)=>res.json())
        .then((res)=>{
            var d0 = [];
            for(var i = 0;i<res.length;i++){
                var tupian = '';
                (res[i].userImage=='-' || res[i].userImage==null)?tupian="http://img2.3png.com/eebe5ef277285d150546fd77d248786d2a9e.png":tupian=res[i].userImage
                d0[i] = Object.assign({},res[i],{userImage:tupian},{mingci:i+1});
            }
            this.setState({
                scores:d0.slice(0,3),
            })
        })
        fetch('http://172.17.100.2:3000/users/my')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            var d0 = [];
            var tupian = '';
            (res[0].userImage=='-' || res[0].userImage==null)?tupian="http://img2.3png.com/eebe5ef277285d150546fd77d248786d2a9e.png":tupian=res[0].userImage;
            d0[0] = Object.assign({},res[0],{userImage:tupian});
            this.setState({
                user:d0[0],
                // username:res[0].userName,
                // phone:res[0].userPhone,
            })
        })
        fetch('http://172.17.100.2:3000/users/fen')
        .then((res)=>res.json())
        .then((res)=>{
            var box = this.state.boxes;
            box[2].num = res[0].sum;
            this.setState({
                boxes:box,
                score:res[0].sum
            })
        })
        fetch('http://172.17.100.2:3000/users/hezi')
        .then((res)=>res.json())
        .then((res)=>{
            if(res.success == false){
                console.log('没有该用户')
            }
            else{
                console.log('有该用户')
                var box = this.state.boxes;
                box[0].num = res.length;
                this.setState({
                    boxes:box
                })
            }
        })
    }
    successToast=()=> {
        if (this.state.isClick==true) {   //如果为true 开始执行
            ToastAndroid.show('签到成功，积分+10', ToastAndroid.SHORT);
            let s = this.state.score;
            s=s+10;
            this.setState({
                score:s,
                taskId:1,
                taskContent:'签到',
                isClick: false
            })
            const that = this   // 为定时器中的setState绑定this
            const now = new Date().getHours();
            const now1 = new Date().getMinutes();
            const now2 = new Date().getSeconds();
            const hour = (23-now)*60*60*1000;
            const minutes = (59-now1)*60*1000;
            const seconds = (60-now2)*1000;
            const time = hour+minutes+seconds;
            let text = {userName:this.state.user.userName,updateTime:new Date(),taskId:1,taskContent:'签到',taskScore:10,phone:this.state.user.userPhone} //获取数据
            let send = JSON.stringify(text);   //重要！将对象转换成json字符串
            fetch('http://172.17.100.2:3000/users/getscore',{   //Fetch方法y
                method: 'POST',
                headers: {'Content-Type': 'application/json; charset=utf-8'},
                body: send
            })
            .then(res => res.json())
            .then(
                res => {
                    if(res.success){
                        fetch('http://172.17.100.2:3000/users/rank')
                        .then((res)=>res.json())
                        .then((res)=>{
                            var d0 = [];
                            for(var i = 0;i<res.length;i++){
                                var tupian = '';
                                (res[i].userImage=='-' || res[i].userImage==null)?tupian="http://img2.3png.com/eebe5ef277285d150546fd77d248786d2a9e.png":tupian=res[i].userImage
                                d0[i] = Object.assign({},res[i],{userImage:tupian},{mingci:i+1});
                            }
                            this.setState({
                                scores:d0.slice(0,3),
                            })
                        })
                        fetch('http://172.17.100.2:3000/users/my')
                        .then((res)=>res.json())
                        .then((res)=>{
                            console.log(res);
                            var d0 = [];
                            var tupian = '';
                            (res[0].userImage=='-' || res[0].userImage==null)?tupian="http://img2.3png.com/eebe5ef277285d150546fd77d248786d2a9e.png":tupian=res[0].userImage;
                            d0[0] = Object.assign({},res[0],{userImage:tupian});
                            this.setState({
                                user:d0[0],
                                // username:res[0].userName,
                                // phone:res[0].userPhone,
                            })
                        })
                        fetch('http://172.17.100.2:3000/users/fen')
                        .then((res)=>res.json())
                        .then((res)=>{
                            var box = this.state.boxes;
                            box[2].num = res[0].sum;
                            this.setState({
                                boxes:box,
                                score:res[0].sum
                            })
                        })
                    }
                    else{
                        console.log('失败')
                    }
                }
            )
            setTimeout(function () {       // 设置延迟事件，1秒后将执行
                that.setState({ isClick: true })   // 将isClick设置为true
            }, time);
        }
        else{
            ToastAndroid.show('今日已签到，明日再来叭',ToastAndroid.SHORT);
            // Toast.success('今日已签到，明日再来叭', 1);
        }
    }
    render() {
        return (
            <ScrollView style={{backgroundColor:'#fff',width:'100%',height:'100%'}}>
                <View style={{flex:1,alignItems:'center'}}>
                    <View style={styles.introduce}>
                        <View style={styles.touxiang}>
                            <Image source={{uri:this.state.user.userImage}} style={{width:80,height:80}}/>
                        </View>
                        <View style={{marginLeft:'10%'}}>
                            <Text style={styles.intxt}>{this.state.user.userName}</Text>
                            <TouchableOpacity onPress={()=>{
                                Actions.personal()}}>
                                <Text style={styles.intxt}>点击编辑个人资料></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bigbox}>
                        <FlatList
                            data = {this.state.boxes}
                            numColumns = {3}
                            renderItem={({item})=>(
                                <View style={styles.boxes}>
                                    <Text style={{color:`${item.txtcolor}`,fontSize:17}}>{item.num}{item.unit}</Text>
                                    <Image style={styles.boximg}
                                            resizeMode="contain"
                                            source={item.img}
                                    />
                                    <Text style={styles.boxname}>{item.name}</Text>
                                </View>
                            )}
                        />
                        <TouchableOpacity onPress={()=>this.successToast()}
                                style={styles.sign}
                        >
                            <Text style={{color:'#79be3b'}}>点击签到领积分</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.studystu}>
                        <Text style={{color:'#79be3b',fontSize:20}}>我的学习情况</Text>
                        <View style={styles.tu}>
                            <TouchableOpacity onPress={()=>{Actions.xian()}}
                                style={{
                                    width:'35%',
                                    height:'100%',
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}
                            >
                                <Image source={require('../../images/my-xian.png')}/>
                                <Text>柱状图</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{Actions.bing()}}
                                style={{
                                    marginLeft:'20%',
                                    width:'35%',
                                    height:'100%',
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}
                            >
                                <Image source={require('../../images/my-bing.png')}/>
                                <Text>饼状图</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.studystu0}>
                        <Text style={{color:'#79be3b',fontSize:20,textAlign:'center',marginBottom:10}}>积分排行榜</Text>
                        <FlatList
                            data = {this.state.scores}
                            numColumns = {1}
                            renderItem={({item})=>(
                                <View style={styles.every}>
                                    <View style={styles.mingci0}>
                                        <Text style={styles.mingci}>{item.mingci}</Text>
                                    </View>
                                    <View style={styles.toukuang}>
                                        <Image style={styles.paiimg1}
                                            resizeMode="contain"
                                            source={{uri:item.userImage}}
                                        />
                                    </View>
                                    <Text style={styles.username}>{item.userName}</Text>
                                    <Text style={styles.grade}>{item.sum}</Text>
                                    <Text style={styles.gradetxt}>分</Text>
                                </View>
                            )}
                        />
                        <TouchableOpacity onPress={()=>{
                                Actions.rank()}}
                                style={styles.sign}
                        >
                            <Text style={{color:'#79be3b'}}>点击查看更多></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.biglist}>
                        {/* <TouchableOpacity style={styles.littlelist}>
                            <Text style={styles.listtxt}>夜间模式</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity 
                            style={styles.littlelist}
                            onPress={()=>{Actions.box()}}
                        >
                            <Text style={styles.listtxt}>去添加盒子</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.littlelist}
                            onPress={()=>{Actions.send()}}
                        >
                            <Text style={styles.listtxt}>去发帖</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.littlelist}
                            onPress={()=>{Actions.set()}}
                        >
                            <Text style={styles.listtxt}>设置</Text>
                            <Text style={styles.listtxt1}>详细信息 ></Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.littlelist}
                            onPress={()=>{Actions.hand()}}
                        >
                            <Text style={styles.listtxt}>帮助反馈</Text>
                            <Text style={styles.listtxt1}>详细信息 ></Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.littlelist}
                            onPress={()=>{Actions.about()}}
                        >
                            <Text style={styles.listtxt}>关于我们</Text>
                            <Text style={styles.listtxt1}>详细信息 ></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    mingci:{
        fontSize:20,
        color:'#fff'
    },
    mingci0:{
        width:30,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        backgroundColor:'orange'
    },
    studystu0:{
        width:'90%',
        height:280,
        borderRadius:30,
        backgroundColor:'#fff',
        borderWidth:3,
        borderColor:'#79be3b',
        marginTop:20,
    },
    every:{
        flexDirection:'row',
        width:'90%',
        height:70,
        alignItems:'center',
        marginLeft:'5%',
    },
    paiimg0:{
        width:40,
        height:40
    },
    paiimg1:{
        width:50,
        height:50
    },
    toukuang:{
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:'5%',
        overflow:'hidden',
        borderWidth:1,
        borderColor:'#ccc'
    },
    username:{
        width:'10%',
        fontSize:20,
        marginLeft:'10%',
        color:'#67e5fb'
    },
    grade:{
        fontSize:25,
        marginLeft:'30%',
        color:'orange'
    },
    gradetxt:{
        fontSize:15,
        marginLeft:'1%',
        color:'#aaa'
    },
    introduce:{
        flexDirection:'row',
        width:'100%',
        height:200,
        backgroundColor:'#79be3b',
        marginTop:2,
        borderBottomRightRadius:70,
        borderBottomLeftRadius:70,
        paddingTop:20,
        zIndex:0
    },
    touxiang:{
        width:80,
        height:80,
        borderRadius:50,
        backgroundColor:'#fff',
        marginLeft:'10%',
        overflow:'hidden'
    },
    intxt:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold',
        marginTop:'7%'
    },
    bigbox:{
        width:'80%',
        height:170,
        borderRadius:30,
        backgroundColor:'#fff',
        borderWidth:2,
        borderColor:'#eee',
        marginTop:-80,
    },
    boxes:{
        width:'25%',
        height:120,
        marginLeft:'7%',
        marginTop:10,
        paddingTop:10,
        alignItems:'center',
        // backgroundColor:'red'
    },
    boximg:{
        width:50,
        height:50
    },
    boxname:{
        fontSize:15,
        color:'#aaa'
    },
    sign:{
        borderWidth:1,
        borderColor:'#79be3b',
        width:'30%',
        borderRadius:5,
        alignItems:'center',
        marginBottom:10,
        marginLeft:'65%'
    },
    studystu:{
        width:'90%',
        height:170,
        borderRadius:30,
        backgroundColor:'#fff',
        borderWidth:3,
        borderColor:'#79be3b',
        marginTop:20,
        alignItems:'center',
    },
    tu:{
        width:'90%',
        height:'80%',
        // backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    biglist:{
        alignItems:'center',
        marginTop:20,
        width:'100%',
        borderTopColor:'#ccc',
        borderTopWidth:1,
    },
    littlelist:{
        width:'100%',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        height:45,
        paddingLeft:'5%',
        alignItems:'center',
        flexDirection:'row'
    },
    listtxt:{
        fontSize:17,
        width:'30%',
    },
    listtxt1:{
        fontSize:17,
        color:'#bbb',
        marginLeft:'45%'
    }
})
