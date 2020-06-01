import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import Echarts from 'native-echarts';

export default class Bing extends Component {
    constructor(){
        super();
        this.state={
          xaxis:[],
          series:[],
          data:[]
        }
    }
    componentDidMount(){
        fetch('http://172.17.100.2:3000/users/hezi')
            .then((res)=>res.json())
            .then((res)=>{
                if(res.success == false){
                    console.log('没有该用户')
                }
                else{
                    console.log('有该用户')
                    var xaxis = [];
                    for(var i = 0;i<res.length;i++){
                        xaxis[i] = res[i].boxName;
                    }
                    console.log(xaxis);
                    this.setState({
                    xaxis:xaxis
                })
              }
            })
            fetch('http://172.17.100.2:3000/users/kapian')
            .then((res)=>res.json())
            .then((res)=>{
                if(res.success == false){
                  console.log('没有该用户')
                }
                else{
                    var heng = this.state.xaxis;
                    var series = [];
                    for(var n = 0;n<heng.length;n++){
                        series[n] = 0;
                    }
                    console.log(series);
                    for(var i = 0;i<res.length;i++){
                        for(var j = 0;j<heng.length;j++){
                        if(heng[j] == res[i].boxName){
                            series[j]++
                        }
                        }
                    }
                    console.log(series);
                    this.setState({
                        series:series
                    })
                    var data = [];
                    for(let index in this.state.xaxis){
                        data.push({name: this.state.xaxis[index], value: this.state.series[index]});
                    }
                    console.log(data)
                    this.setState({
                        data:data
                    })
                }
            })
    }
    render() {
        var option1 = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: this.state.xaxis
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:this.state.data,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        return (
            <View style={{backgroundColor:'#fff',width:'100%',height:'100%'}}>
                <Text style={{fontSize:20,textAlign:'center',marginBottom:20,marginTop:10}}>本周学科卡片分布</Text>
                <Echarts option={option1} height={300}/>
            </View>
        )
    }
}
