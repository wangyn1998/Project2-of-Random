import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,} from 'react-native'
import { Actions } from 'react-native-router-flux'
export default class Findpwd extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=>Actions.login()} style={{backgroundColor:'#fff',width:'100%',height:'100%'}}>
                    <Text>返回登录页面</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
