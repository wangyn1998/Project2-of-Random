import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import Echarts from 'native-echarts';
import { WebView } from 'react-native-webview';

export default class Xian extends Component {
  constructor(){
    super();
    this.state={
      xaxis:[],
      series:[]
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
        }
    })
  }
  render() {
    var option = {
      xAxis: {
          type: 'category',
          data: this.state.xaxis
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: this.state.series,
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
          }
      }]
    };  
    return (
      <View style={{backgroundColor:'#fff',width:'100%',height:'100%'}}>
        <View style={{backgroundColor:'#fff',marginTop:20}}>
            <Echarts option={option} height={400}/>
        </View>
      </View>
    );
  }
}