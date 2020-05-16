import React, { Component } from 'react'
import { Text, View, FlatList,TextInput, Image, TouchableOpacity, ScrollView,Dimensions } from 'react-native'
import { Grid, Icon,SearchBar } from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux'

var list=[
    {
        num:0,
        num2:'天',
        img:'clock-circle',
        text:'学习',
        color:'#FD8F71'
    },
    {
        num:0,
        num2:'次',
        img:'snippets',
        text:'打卡',
        color:'#34C7FC'
    },
    {
        num:0,
        num2:'个',
        img:'star',
        text:'星星',
        color:'#FFD331'
    },
    {
        num:0,
        num2:'座',
        img:'trophy',
        text:'成就',
        color:'#FD84AB'
    }
]
const list1=[
    {
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAzCAYAAAA+VOAXAAACEUlEQVRoge2ZS0sCURTHzzx8ZYYpQi83plBEiwKDatO2RZta9AVa1r5tn6GW9QnatGtTEEQQLRIyahE9KCpqelhU2uho3gsazVyV0atdh/sDUe4Bz/8HM3fOzAi5PNDkiP8dgAZcghW4BCvI9fjTD/UVvrVPSGfV30aiDeyiE9ocAer9qEukMp+wdbkGl4lDUL6ui+t+Vzd0tIZhum8RXLKHak/qEvHHbTi42zCsPydv8SfkHYbRnhmqPamfE6dPu2XrZy/7tFvSl1C1VE31arDE7sQlWIFLsAKXYAUuwQqWkCg5AKpaEjL5UTqby1JvikZ1s9gkBzikFmKNKIHGaTSNoqkT/TYDkq9UR6O6Wbo8EejzjxHvRwT9I5tsToO9m3XYPF8x3ajeDAYmYHZgCURB+rNuOCfevhUmBRBxZQfn02OQeE3eNyRQtZDyWWJ3MkjojzfWIOUzSHidAXDK7oYEMosk2nA+PQSJToh2TWERQWDnaEN5wu1RnE8P8Tox2TuPv68Sx5DWvkw1e0ndl71W2CUX+AhBKhHxjxRz6TFcJ2plNbYAF4lYyXrIOwRzQ8s0W1p0d2pGuAQrcAlW4BKswCVYgUuQsImOmurVQF0i7IuWvB+RRTuu04b6i8fx4Cy8qwocPWyDlssU10VBhqCnH9dpQ30UL3Ci7GKZAm67Dz9yqQd1k2gkfHdiBUtI/ACe6Z+VsrbPGgAAAABJRU5ErkJggg==",
        text:'+'
    }
]
const {width,scale,height}=Dimensions.get('window');
const w=width,h=height;
var list2=[];
export default class Box extends Component {
    constructor(){
        super();
        this.state={
            text:'',
            data:list1,
            list:list,
            num:1
        }
    }
    async componentDidMount(){
        await fetch('http://172.17.100.2:3000/users/record')
            .then((res)=>res.json())
            .then((res)=>{
                var list=[
                    {
                        num:res[0].recordDay,
                        num2:'天',
                        img:'clock-circle',
                        text:'学习',
                        color:'#FD8F71'
                    },
                    {
                        num:res[0].recordClockIn,
                        num2:'次',
                        img:'snippets',
                        text:'打卡',
                        color:'#34C7FC'
                    },
                    {
                        num:res[0].recordStars,
                        num2:'个',
                        img:'star',
                        text:'星星',
                        color:'#FFD331'
                    },
                    {
                        num:res[0].recordAchievement,
                        num2:'座',
                        img:'trophy',
                        text:'成就',
                        color:'#FD84AB'
                    }
                ]
                this.setState({
                    list:list
                })
            })
            list2=[];
            await fetch('http://172.17.100.2:3000/users/box')
                .then((res)=>res.json())
                .then((res)=>{
                    for(var i=0;i<res.length;i++){
                        var obj={
                            text:res[i].boxName,
                            img:res[i].boxImg,
                            id:res[i].boxId
                        }
                        list2.push(obj);
                    }
                    list2.push({
                        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAzCAYAAAA+VOAXAAACEUlEQVRoge2ZS0sCURTHzzx8ZYYpQi83plBEiwKDatO2RZta9AVa1r5tn6GW9QnatGtTEEQQLRIyahE9KCpqelhU2uho3gsazVyV0atdh/sDUe4Bz/8HM3fOzAi5PNDkiP8dgAZcghW4BCvI9fjTD/UVvrVPSGfV30aiDeyiE9ocAer9qEukMp+wdbkGl4lDUL6ui+t+Vzd0tIZhum8RXLKHak/qEvHHbTi42zCsPydv8SfkHYbRnhmqPamfE6dPu2XrZy/7tFvSl1C1VE31arDE7sQlWIFLsAKXYAUuwQqWkCg5AKpaEjL5UTqby1JvikZ1s9gkBzikFmKNKIHGaTSNoqkT/TYDkq9UR6O6Wbo8EejzjxHvRwT9I5tsToO9m3XYPF8x3ajeDAYmYHZgCURB+rNuOCfevhUmBRBxZQfn02OQeE3eNyRQtZDyWWJ3MkjojzfWIOUzSHidAXDK7oYEMosk2nA+PQSJToh2TWERQWDnaEN5wu1RnE8P8Tox2TuPv68Sx5DWvkw1e0ndl71W2CUX+AhBKhHxjxRz6TFcJ2plNbYAF4lYyXrIOwRzQ8s0W1p0d2pGuAQrcAlW4BKswCVYgUuQsImOmurVQF0i7IuWvB+RRTuu04b6i8fx4Cy8qwocPWyDlssU10VBhqCnH9dpQ30UL3Ci7GKZAm67Dz9yqQd1k2gkfHdiBUtI/ACe6Z+VsrbPGgAAAABJRU5ErkJggg==",
                        text:'+'
                    });
                    this.setState({
                        data:list2
                    })
                })
    }
    submit=(text)=>{
        var arr=[];
        for(var i=0;i<list2.length;i++){
            if(list2[i].text==text){
                arr.push(list2[i]);
            }
        }
        this.setState({
            data:arr
        })
    }
    clearText=(text)=>{
        if(text==''){
            this.setState({
                data:list2
            })
        }
    }
    changeNum=()=>{
        this.setState({
            num:2
        })
    }
    async componentDidUpdate(){
        if(this.state.num==2){
            list2=[];
            console.log('aaa')
            await fetch('http://172.17.100.2:3000/users/box')
                .then((res)=>res.json())
                .then((res)=>{
                    for(var i=0;i<res.length;i++){
                        var obj={
                            text:res[i].boxName,
                            img:res[i].boxImg,
                            id:res[i].boxId
                        }
                        list2.push(obj);
                    }
                    list2.push({
                        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAzCAYAAAA+VOAXAAACEUlEQVRoge2ZS0sCURTHzzx8ZYYpQi83plBEiwKDatO2RZta9AVa1r5tn6GW9QnatGtTEEQQLRIyahE9KCpqelhU2uho3gsazVyV0atdh/sDUe4Bz/8HM3fOzAi5PNDkiP8dgAZcghW4BCvI9fjTD/UVvrVPSGfV30aiDeyiE9ocAer9qEukMp+wdbkGl4lDUL6ui+t+Vzd0tIZhum8RXLKHak/qEvHHbTi42zCsPydv8SfkHYbRnhmqPamfE6dPu2XrZy/7tFvSl1C1VE31arDE7sQlWIFLsAKXYAUuwQqWkCg5AKpaEjL5UTqby1JvikZ1s9gkBzikFmKNKIHGaTSNoqkT/TYDkq9UR6O6Wbo8EejzjxHvRwT9I5tsToO9m3XYPF8x3ajeDAYmYHZgCURB+rNuOCfevhUmBRBxZQfn02OQeE3eNyRQtZDyWWJ3MkjojzfWIOUzSHidAXDK7oYEMosk2nA+PQSJToh2TWERQWDnaEN5wu1RnE8P8Tox2TuPv68Sx5DWvkw1e0ndl71W2CUX+AhBKhHxjxRz6TFcJ2plNbYAF4lYyXrIOwRzQ8s0W1p0d2pGuAQrcAlW4BKswCVYgUuQsImOmurVQF0i7IuWvB+RRTuu04b6i8fx4Cy8qwocPWyDlssU10VBhqCnH9dpQ30UL3Ci7GKZAm67Dz9yqQd1k2gkfHdiBUtI/ACe6Z+VsrbPGgAAAABJRU5ErkJggg==",
                        text:'+'
                    });
                    this.setState({
                        data:list2,
                        num:1
                    })
                })
        }
    }
    render() {
        return (
            <View>
                <ScrollView>
                <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:10,paddingBottom:10,borderColor:'#BBBBBB',borderWidth:1,borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:'#FFFFFF'}}>
                {
                    this.state.list.map((item)=>(
                        <View style={{alignItems:'center',width:'25%'}}>
                            <View style={{flexDirection:'row'}}><Text style={{color:item.color}}>{item.num}</Text><Text style={{color:'#807B7B'}}>{item.num2}</Text></View>
                            <Icon name={item.img} style={{marginTop:10,marginBottom:10}} color={item.color}/>
                            <Text style={{color:'#807B7B'}}>{item.text}</Text>
                        </View>
                    ))
                }
                </View>
                <View style={{borderColor:'#BBBBBB',borderWidth:1,marginTop:10,borderTopLeftRadius:10,borderTopRightRadius:10,backgroundColor:'#FFFFFF',marginBottom:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-around',paddingBottom:10,margin:10,borderBottomWidth:1,borderBottomColor:'#BBBBBB',alignItems:'center'}}>
                        <Text style={{fontSize:17}}>我的盒子</Text>
                        <View style={{flexDirection:'row',alignItems:'center',width:'30%',borderWidth:1,borderColor:'#BBBBBB',borderRadius:8}}>
                            <Icon name='search' style={{marginLeft:10}} color='#BBBBBB'/>
                            <TextInput placeholder='搜索' placeholderTextColor='#BBBBBB' style={{height:30}} onSubmitEditing={(event)=>{this.submit(event.nativeEvent.text)}} onChangeText={(text)=>{this.clearText(text)}}/>
                        </View>
                    </View>
                    <FlatList data={this.state.data} numColumns={2}  renderItem={({item})=>{
                        if(item.text=='+'){
                            return (
                                <View style={{width:'50%',padding:10,alignItems:'center',justifyContent:'center',height:h*0.2}}>
                                    <TouchableOpacity onPress={()=>{Actions.addBox({'change':this.changeNum})}}><Image source={{uri:item.img}} style={{width:w*0.2,height:0.1*h}}/></TouchableOpacity>
                                </View>
                            )
                        }
                        return (
                            <TouchableOpacity onPress={()=>{Actions.light({'id':item.id});Actions.refresh()}} style={{alignItems:'center',width:'50%',padding:10}}>
                                    <Image source={{uri:item.img}} style={{height:h*0.18,width:'65%'}}/>
                                    <Text style={{color:'#E81414',marginTop:10}}>{item.text}</Text>
                            </TouchableOpacity>
                        )
                    }}/>
                </View>
                </ScrollView>
            </View>
        )
    }
}
