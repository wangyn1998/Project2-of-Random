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
    }
  }
  componentDidMount(){

  }
  render() {
    const option = {
      color: ['#003366', '#006699', '#4cabce'],
      title: {
          text: ''
      },
      tooltip: {},
      legend: {
        data:['语文','数学','英语']
      },
      xAxis: {
        data: ["星期一","星期二","星期三","星期四","星期五","星期六",'星期日']
      },
      yAxis: {},
      series: [
        {
          name: '语文',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        },
        {
          name: '数学',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        },
        {
          name: '英语',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        },
    ]
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