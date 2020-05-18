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
                    var writerInfoArr = new Array();//js的数度组不要设置长知度，我们就道当他是4个。
                    var writerInfo = new Object();
                    var data = [];
                    for(var i=0;i<heng.length;i++){
                        writerInfo.name=this.state.xaxis[i];
                        writerInfo.value=this.state.series[i];
                        console.log(writerInfo);
                        writerInfoArr[i]=writerInfo;
                    }
                    console.log(writerInfoArr);
                    this.setState({
                        data:writerInfoArr
                    })
                }
            })
    }
    render() {
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 10,
                data: this.state.xaxis
            },
            series: [
                {
                    name: '盒子饼状图',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data:[
                    // {value:2,name:''},
                    // {value:2,name:''},
                    // {value:2,name:''}
                    ]
                }
            ]
        };
        return (
            <View style={{backgroundColor:'#fff',width:'100%',height:'100%'}}>
                <Text style={{fontSize:20,textAlign:'center',marginBottom:20,marginTop:10}}>本周学科卡片分布</Text>
                <Echarts option={option} height={300}/>
            </View>
        )
    }
}
