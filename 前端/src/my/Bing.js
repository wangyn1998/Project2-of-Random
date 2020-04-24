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
    render() {
        const option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 10,
                data: ['语文', '数学', '英语']
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
                    data: [
                        {value: 335, name: '语文'},
                        {value: 310, name: '数学'},
                        {value: 234, name: '英语'},
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
